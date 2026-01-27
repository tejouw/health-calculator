import { useState, useEffect, useCallback, useRef } from 'react';
import { CalculatorMeta } from '@/types/calculator';
import { advancedSearch } from '@/lib/searchUtils';

interface UseSearchOptions {
  debounceMs?: number;
  minQueryLength?: number;
  locale: 'en' | 'tr';
}

interface SearchResult extends CalculatorMeta {
  score: number;
  matchedFields: string[];
}

export function useSearch(
  calculators: CalculatorMeta[],
  options: UseSearchOptions
) {
  const { debounceMs = 300, minQueryLength = 2, locale } = options;

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Debounce query
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    setIsSearching(true);

    debounceTimerRef.current = setTimeout(() => {
      setDebouncedQuery(query);
      setIsSearching(false);
    }, debounceMs);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, debounceMs]);

  // Perform search
  useEffect(() => {
    if (debouncedQuery.length >= minQueryLength) {
      const searchResults = advancedSearch(calculators, debouncedQuery, locale);
      setResults(searchResults);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setSelectedIndex(-1);
    }
  }, [debouncedQuery, calculators, locale, minQueryLength]);

  // Update query
  const updateQuery = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setQuery('');
    setDebouncedQuery('');
    setResults([]);
    setSelectedIndex(-1);
  }, []);

  // Navigate results with keyboard
  const navigateUp = useCallback(() => {
    setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const navigateDown = useCallback(() => {
    setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
  }, [results.length]);

  const resetNavigation = useCallback(() => {
    setSelectedIndex(-1);
  }, []);

  // Get selected result
  const getSelectedResult = useCallback(() => {
    if (selectedIndex >= 0 && selectedIndex < results.length) {
      return results[selectedIndex];
    }
    return null;
  }, [selectedIndex, results]);

  return {
    query,
    debouncedQuery,
    results,
    isSearching,
    selectedIndex,
    hasResults: results.length > 0,
    updateQuery,
    clearSearch,
    navigateUp,
    navigateDown,
    resetNavigation,
    getSelectedResult,
  };
}
