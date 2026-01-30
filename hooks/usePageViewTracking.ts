'use client';

import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics/pageViews';

/**
 * Hook to automatically track page views for calculators
 * Use this in calculator page components to track analytics
 */
export function usePageViewTracking(calculatorId: string | null | undefined) {
  useEffect(() => {
    if (!calculatorId) return;

    // Track page view
    trackPageView(calculatorId);

    // Optional: Track with a small delay to ensure it's a real view
    // and not just a quick navigation
    const timeoutId = setTimeout(() => {
      trackPageView(calculatorId);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [calculatorId]);
}
