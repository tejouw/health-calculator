/**
 * Page View Analytics System
 * Tracks calculator page views and provides popularity metrics
 */

export interface PageViewData {
  calculatorId: string;
  views: number;
  lastViewed: string;
}

const STORAGE_KEY = 'calculator_page_views';
const MAX_STORED_ITEMS = 50;

/**
 * Get all page view data from localStorage
 */
export function getPageViews(): PageViewData[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to get page views:', error);
    return [];
  }
}

/**
 * Track a page view for a calculator
 */
export function trackPageView(calculatorId: string): void {
  if (typeof window === 'undefined') return;

  try {
    const pageViews = getPageViews();
    const existingIndex = pageViews.findIndex(pv => pv.calculatorId === calculatorId);

    if (existingIndex >= 0) {
      // Update existing entry
      pageViews[existingIndex].views += 1;
      pageViews[existingIndex].lastViewed = new Date().toISOString();
    } else {
      // Add new entry
      pageViews.push({
        calculatorId,
        views: 1,
        lastViewed: new Date().toISOString(),
      });
    }

    // Keep only top items to avoid localStorage bloat
    const sortedViews = pageViews
      .sort((a, b) => b.views - a.views)
      .slice(0, MAX_STORED_ITEMS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedViews));
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
}

/**
 * Get most viewed calculator IDs
 */
export function getMostViewedCalculatorIds(limit: number = 10): string[] {
  const pageViews = getPageViews();
  return pageViews
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
    .map(pv => pv.calculatorId);
}

/**
 * Get view count for a specific calculator
 */
export function getViewCount(calculatorId: string): number {
  const pageViews = getPageViews();
  const view = pageViews.find(pv => pv.calculatorId === calculatorId);
  return view?.views || 0;
}

/**
 * Clear all page view data (for testing or privacy)
 */
export function clearPageViews(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear page views:', error);
  }
}

/**
 * Get trending calculators (high views in recent time)
 * This considers both view count and recency
 */
export function getTrendingCalculatorIds(limit: number = 10): string[] {
  const pageViews = getPageViews();
  const now = new Date().getTime();
  const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);

  return pageViews
    .filter(pv => {
      const lastViewed = new Date(pv.lastViewed).getTime();
      return lastViewed > thirtyDaysAgo;
    })
    .sort((a, b) => {
      // Weight by views and recency
      const aScore = a.views * (1 + (new Date(a.lastViewed).getTime() - thirtyDaysAgo) / (now - thirtyDaysAgo));
      const bScore = b.views * (1 + (new Date(b.lastViewed).getTime() - thirtyDaysAgo) / (now - thirtyDaysAgo));
      return bScore - aScore;
    })
    .slice(0, limit)
    .map(pv => pv.calculatorId);
}
