'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Search, X, Loader2, TrendingUp, Clock, Sparkles } from 'lucide-react';
import { useRouter } from '@/lib/navigation';
import { CalculatorMeta } from '@/types/calculator';
import { categories } from '@/config/categories.config';
import { getCategorySlugByLocale } from '@/lib/categoryMapping';
import { useSearch } from '@/hooks/useSearch';
import { cn } from '@/lib/utils';
import {
  getRecentSearches,
  addRecentSearch,
  removeRecentSearch,
  type RecentSearch
} from '@/lib/recentSearches';

interface SearchBarProps {
  calculators: CalculatorMeta[];
  locale: 'en' | 'tr';
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  calculators,
  locale,
  placeholder,
  className,
  autoFocus = false,
}) => {
  const t = useTranslations('common');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Get popular calculators
  const popularCalculators = calculators.filter(calc => calc.popular).slice(0, 3);

  const {
    query,
    results,
    isSearching,
    selectedIndex,
    hasResults,
    updateQuery,
    clearSearch,
    navigateUp,
    navigateDown,
    getSelectedResult,
  } = useSearch(calculators, { locale });

  // Load recent searches on mount (client-side only)
  useEffect(() => {
    setIsMounted(true);
    setRecentSearches(getRecentSearches());
  }, []);

  // Auto focus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Show/hide dropdown
  useEffect(() => {
    setIsOpen(isFocused && (hasResults || isSearching || query.length >= 2));
  }, [isFocused, hasResults, isSearching, query]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        navigateDown();
        break;
      case 'ArrowUp':
        e.preventDefault();
        navigateUp();
        break;
      case 'Enter':
        e.preventDefault();
        const selected = getSelectedResult();
        if (selected) {
          handleSelectCalculator(selected);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setIsFocused(false);
        inputRef.current?.blur();
        break;
    }
  };

  // Handle calculator selection
  const handleSelectCalculator = (calculator: CalculatorMeta) => {
    const category = categories.find(c => c.id === calculator.category);
    if (category) {
      // Save to recent searches
      if (query.trim()) {
        addRecentSearch(query.trim());
        setRecentSearches(getRecentSearches());
      }

      // Don't add locale - next-intl router adds it automatically
      const categorySlug = getCategorySlugByLocale(calculator.category, locale);
      const path = `/${categorySlug}/${calculator.slug[locale]}`;
      router.push(path);
      clearSearch();
      setIsOpen(false);
      setIsFocused(false);
    }
  };

  // Handle recent search click
  const handleRecentSearchClick = (searchQuery: string) => {
    updateQuery(searchQuery);
    inputRef.current?.focus();
  };

  // Handle remove recent search
  const handleRemoveRecentSearch = (searchQuery: string, e: React.MouseEvent) => {
    e.stopPropagation();
    removeRecentSearch(searchQuery);
    setRecentSearches(getRecentSearches());
  };

  // Group results by category
  const groupedResults = results.reduce((acc, result) => {
    const category = categories.find(c => c.id === result.category);
    const categoryName = category ? category.name[locale] : 'Other';

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(result);
    return acc;
  }, {} as Record<string, typeof results>);

  return (
    <div className={cn('relative w-full', className)}>
      {/* Search Input */}
      <div className="relative">
        <Search
          className={cn(
            "absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 transition-colors",
            isFocused ? "text-primary-600" : "text-neutral-400"
          )}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || t('searchPlaceholder')}
          className={cn(
            "w-full rounded-2xl border-0 bg-white py-5 pl-14 pr-14 text-lg text-neutral-900 shadow-2xl ring-1 transition-all placeholder:text-neutral-400 focus:outline-none focus:ring-4",
            isFocused
              ? "ring-primary-600 focus:ring-primary-600/50"
              : "ring-neutral-200 focus:ring-white/50"
          )}
          aria-label="Search calculators"
          aria-autocomplete="list"
          aria-controls="search-results"
          aria-expanded={isOpen}
          role="combobox"
        />

        {/* Loading or Clear Button */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          {isSearching ? (
            <Loader2 className="h-5 w-5 animate-spin text-primary-600" />
          ) : query.length > 0 ? (
            <button
              onClick={() => {
                clearSearch();
                inputRef.current?.focus();
              }}
              className="rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          ) : null}
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          id="search-results"
          role="listbox"
          className="absolute top-full z-50 mt-2 max-h-[500px] w-full overflow-y-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl"
        >
          {isSearching ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
            </div>
          ) : hasResults ? (
            <div className="py-2">
              {Object.entries(groupedResults).map(([categoryName, categoryResults]) => (
                <div key={categoryName}>
                  {/* Category Header */}
                  <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    {categoryName}
                  </div>

                  {/* Results */}
                  {categoryResults.map((result) => {
                    const globalIndex = results.findIndex(r => r.id === result.id);
                    const isSelected = globalIndex === selectedIndex;
                    const category = categories.find(c => c.id === result.category);

                    return (
                      <button
                        key={result.id}
                        onClick={() => handleSelectCalculator(result)}
                        className={cn(
                          "w-full px-4 py-3 text-left transition-colors",
                          isSelected
                            ? "bg-primary-50 text-primary-900"
                            : "text-neutral-700 hover:bg-neutral-50"
                        )}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className="flex items-start gap-3">
                          {/* Category Icon */}
                          {category && (
                            <div
                              className={cn(
                                "mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br",
                                category.gradient
                              )}
                            >
                              <span className="text-sm text-white">
                                {result.title[locale].charAt(0)}
                              </span>
                            </div>
                          )}

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold truncate">
                                {result.title[locale]}
                              </div>
                              {result.popular && (
                                <TrendingUp className="h-4 w-4 flex-shrink-0 text-primary-600" />
                              )}
                            </div>
                            <div className="mt-0.5 text-sm text-neutral-500 line-clamp-1">
                              {result.description[locale]}
                            </div>
                            {/* Match info for debugging - remove in production */}
                            {process.env.NODE_ENV === 'development' && (
                              <div className="mt-1 text-xs text-neutral-400">
                                Score: {result.score} | {result.matchedFields.join(', ')}
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="p-8 text-center">
              <div className="mb-2 text-4xl">🔍</div>
              <div className="text-lg font-semibold text-neutral-900">
                {t('noResults')}
              </div>
              <div className="mt-1 text-sm text-neutral-500">
                {t('tryDifferentKeywords')}
              </div>
            </div>
          ) : (
            <div className="py-2">
              {/* Recent Searches */}
              {isMounted && recentSearches.length > 0 && (
                <div className="mb-4">
                  <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    <Clock className="mr-1 inline h-3 w-3" />
                    {t('recentSearches')}
                  </div>
                  <div className="space-y-1">
                    {recentSearches.map((recent, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearchClick(recent.query)}
                        className="group flex w-full items-center justify-between px-4 py-2 text-left text-sm text-neutral-700 transition-colors hover:bg-neutral-50"
                      >
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-neutral-400" />
                          {recent.query}
                        </span>
                        <button
                          onClick={(e) => handleRemoveRecentSearch(recent.query, e)}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                          aria-label="Remove"
                        >
                          <X className="h-4 w-4 text-neutral-400 hover:text-neutral-600" />
                        </button>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Calculators */}
              {popularCalculators.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    <Sparkles className="mr-1 inline h-3 w-3" />
                    {t('popularCalculators')}
                  </div>
                  <div className="space-y-1">
                    {popularCalculators.map((calc) => {
                      const category = categories.find(c => c.id === calc.category);
                      return (
                        <button
                          key={calc.id}
                          onClick={() => handleSelectCalculator(calc)}
                          className="w-full px-4 py-3 text-left transition-colors hover:bg-neutral-50"
                        >
                          <div className="flex items-start gap-3">
                            {category && (
                              <div
                                className={cn(
                                  "mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br",
                                  category.gradient
                                )}
                              >
                                <span className="text-sm text-white">
                                  {calc.title[locale].charAt(0)}
                                </span>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <div className="font-semibold truncate text-sm">
                                  {calc.title[locale]}
                                </div>
                                <TrendingUp className="h-3 w-3 flex-shrink-0 text-primary-600" />
                              </div>
                              <div className="mt-0.5 text-xs text-neutral-500 line-clamp-1">
                                {calc.description[locale]}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Empty state */}
              {isMounted && recentSearches.length === 0 && popularCalculators.length === 0 && (
                <div className="p-8 text-center">
                  <div className="mb-2 text-4xl">💡</div>
                  <div className="text-sm text-neutral-500">
                    {t('typeToSearch')}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
