/**
 * Recent searches utility with localStorage
 */

const STORAGE_KEY = 'health-calc-recent-searches';
const MAX_RECENT_SEARCHES = 5;

export interface RecentSearch {
  query: string;
  timestamp: number;
}

/**
 * Get recent searches from localStorage
 */
export function getRecentSearches(): RecentSearch[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load recent searches:', error);
  }

  return [];
}

/**
 * Add a search to recent searches
 */
export function addRecentSearch(query: string): void {
  if (typeof window === 'undefined' || !query.trim()) {
    return;
  }

  try {
    let recent = getRecentSearches();

    // Remove if already exists
    recent = recent.filter(item => item.query.toLowerCase() !== query.toLowerCase());

    // Add to beginning
    recent.unshift({
      query: query.trim(),
      timestamp: Date.now()
    });

    // Keep only MAX_RECENT_SEARCHES
    recent = recent.slice(0, MAX_RECENT_SEARCHES);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch (error) {
    console.error('Failed to save recent search:', error);
  }
}

/**
 * Clear all recent searches
 */
export function clearRecentSearches(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear recent searches:', error);
  }
}

/**
 * Remove a specific search from recent searches
 */
export function removeRecentSearch(query: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    let recent = getRecentSearches();
    recent = recent.filter(item => item.query.toLowerCase() !== query.toLowerCase());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch (error) {
    console.error('Failed to remove recent search:', error);
  }
}
