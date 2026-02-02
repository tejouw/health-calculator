/**
 * Google Analytics 4 (gtag) Integration
 *
 * This file provides functions to interact with Google Analytics.
 * GA_MEASUREMENT_ID should be set in .env.local as NEXT_PUBLIC_GA_MEASUREMENT_ID
 */

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Check if Google Analytics is enabled
export const isGAEnabled = (): boolean => {
  return typeof window !== 'undefined' && !!GA_MEASUREMENT_ID && 'gtag' in window;
};

// Declare gtag function type
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

/**
 * Track page views
 */
export const pageview = (url: string, title?: string): void => {
  if (!isGAEnabled()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
};

/**
 * Track custom events
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  if (!isGAEnabled()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Track calculator usage
 */
export const trackCalculatorUse = (calculatorId: string, calculatorName: string): void => {
  event({
    action: 'calculator_use',
    category: 'Calculator',
    label: calculatorId,
  });
};

/**
 * Track calculation result
 */
export const trackCalculationResult = (
  calculatorId: string,
  resultCategory?: string
): void => {
  event({
    action: 'calculation_complete',
    category: 'Calculator',
    label: `${calculatorId}${resultCategory ? `_${resultCategory}` : ''}`,
  });
};

/**
 * Track social share
 */
export const trackShare = (
  calculatorId: string,
  platform: 'facebook' | 'twitter' | 'pinterest' | 'copy_link'
): void => {
  event({
    action: 'share',
    category: 'Social',
    label: `${calculatorId}_${platform}`,
  });
};

/**
 * Track search
 */
export const trackSearch = (searchTerm: string, resultsCount: number): void => {
  event({
    action: 'search',
    category: 'Engagement',
    label: searchTerm,
    value: resultsCount,
  });
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string): void => {
  event({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  });
};

/**
 * Track ad impression (when ads are visible)
 */
export const trackAdImpression = (adPlacement: string): void => {
  event({
    action: 'ad_impression',
    category: 'Advertising',
    label: adPlacement,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100): void => {
  event({
    action: 'scroll',
    category: 'Engagement',
    label: `${depth}%`,
    value: depth,
  });
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (seconds: number, calculatorId?: string): void => {
  event({
    action: 'time_on_page',
    category: 'Engagement',
    label: calculatorId || 'general',
    value: seconds,
  });
};
