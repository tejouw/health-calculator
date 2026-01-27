import { CalculatorMeta } from '@/types/calculator';
import { categories } from '@/config/categories.config';

/**
 * Advanced search utilities with fuzzy matching and scoring
 */

interface SearchResult extends CalculatorMeta {
  score: number;
  matchedFields: string[];
}

/**
 * Calculate Levenshtein distance for fuzzy matching
 */
function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
}

/**
 * Calculate similarity score between two strings (0-1)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) {
    return 1.0;
  }

  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
}

/**
 * Check if query matches text with fuzzy tolerance
 */
function fuzzyMatch(query: string, text: string, threshold = 0.6): boolean {
  const lowerQuery = query.toLowerCase();
  const lowerText = text.toLowerCase();

  // Exact match
  if (lowerText.includes(lowerQuery)) {
    return true;
  }

  // Check word by word
  const queryWords = lowerQuery.split(/\s+/);
  const textWords = lowerText.split(/\s+/);

  return queryWords.every(qWord => {
    return textWords.some(tWord => {
      // Start of word match
      if (tWord.startsWith(qWord)) {
        return true;
      }
      // Fuzzy similarity
      return calculateSimilarity(qWord, tWord) >= threshold;
    });
  });
}

/**
 * Score a calculator against search query
 */
function scoreCalculator(
  calc: CalculatorMeta,
  query: string,
  locale: 'en' | 'tr'
): { score: number; matchedFields: string[] } {
  const lowerQuery = query.toLowerCase();
  let score = 0;
  const matchedFields: string[] = [];

  const title = calc.title[locale].toLowerCase();
  const description = calc.description[locale].toLowerCase();
  const keywords = calc.keywords.map(k => k.toLowerCase());

  // Exact title match - highest score
  if (title === lowerQuery) {
    score += 100;
    matchedFields.push('title-exact');
  }
  // Title starts with query
  else if (title.startsWith(lowerQuery)) {
    score += 80;
    matchedFields.push('title-start');
  }
  // Title contains query
  else if (title.includes(lowerQuery)) {
    score += 60;
    matchedFields.push('title');
  }
  // Fuzzy title match
  else if (fuzzyMatch(query, title, 0.7)) {
    score += 40;
    matchedFields.push('title-fuzzy');
  }

  // Description contains query
  if (description.includes(lowerQuery)) {
    score += 30;
    matchedFields.push('description');
  } else if (fuzzyMatch(query, description, 0.6)) {
    score += 15;
    matchedFields.push('description-fuzzy');
  }

  // Keyword matches
  keywords.forEach(keyword => {
    if (keyword === lowerQuery) {
      score += 50;
      matchedFields.push('keyword-exact');
    } else if (keyword.includes(lowerQuery)) {
      score += 25;
      matchedFields.push('keyword');
    } else if (fuzzyMatch(query, keyword, 0.7)) {
      score += 12;
      matchedFields.push('keyword-fuzzy');
    }
  });

  // Category name match
  const category = categories.find(c => c.id === calc.category);
  if (category) {
    const categoryName = category.name[locale].toLowerCase();
    if (categoryName.includes(lowerQuery)) {
      score += 20;
      matchedFields.push('category');
    }
  }

  // Boost popular calculators
  if (calc.popular) {
    score += 5;
  }

  // Boost featured calculators
  if (calc.featured) {
    score += 3;
  }

  return { score, matchedFields };
}

/**
 * Search calculators with advanced scoring and fuzzy matching
 */
export function advancedSearch(
  calculators: CalculatorMeta[],
  query: string,
  locale: 'en' | 'tr'
): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const results: SearchResult[] = [];

  calculators.forEach(calc => {
    const { score, matchedFields } = scoreCalculator(calc, query, locale);

    if (score > 0) {
      results.push({
        ...calc,
        score,
        matchedFields
      });
    }
  });

  // Sort by score (descending)
  return results.sort((a, b) => b.score - a.score);
}

/**
 * Highlight matched text in string
 */
export function highlightMatch(text: string, query: string): string {
  if (!query.trim()) {
    return text;
  }

  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 text-neutral-900">$1</mark>');
}

/**
 * Escape special regex characters
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Group search results by category
 */
export function groupByCategory(
  results: SearchResult[],
  locale: 'en' | 'tr'
): Record<string, SearchResult[]> {
  const grouped: Record<string, SearchResult[]> = {};

  results.forEach(result => {
    const category = categories.find(c => c.id === result.category);
    const categoryName = category ? category.name[locale] : 'Other';

    if (!grouped[categoryName]) {
      grouped[categoryName] = [];
    }

    grouped[categoryName].push(result);
  });

  return grouped;
}

/**
 * Get search suggestions based on query
 */
export function getSearchSuggestions(
  calculators: CalculatorMeta[],
  query: string,
  locale: 'en' | 'tr',
  limit = 5
): string[] {
  const lowerQuery = query.toLowerCase();
  const suggestions = new Set<string>();

  // Add calculator titles that start with query
  calculators.forEach(calc => {
    const title = calc.title[locale];
    if (title.toLowerCase().startsWith(lowerQuery)) {
      suggestions.add(title);
    }
  });

  // Add keywords that start with query
  calculators.forEach(calc => {
    calc.keywords.forEach(keyword => {
      if (keyword.toLowerCase().startsWith(lowerQuery)) {
        suggestions.add(keyword);
      }
    });
  });

  return Array.from(suggestions).slice(0, limit);
}
