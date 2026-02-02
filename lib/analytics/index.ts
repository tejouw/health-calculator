// Google Analytics exports
export {
  GA_MEASUREMENT_ID,
  isGAEnabled,
  pageview,
  event,
  trackCalculatorUse,
  trackCalculationResult,
  trackShare,
  trackSearch,
  trackOutboundLink,
  trackAdImpression,
  trackScrollDepth,
  trackTimeOnPage,
} from './gtag';

// Local analytics exports
export {
  getPageViews,
  trackPageView,
  getMostViewedCalculatorIds,
  getViewCount,
  clearPageViews,
  getTrendingCalculatorIds,
} from './pageViews';

export type { PageViewData } from './pageViews';
