'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { adsConfig, adPlacements, AdPlacement } from '@/config/ads.config';

type AdSize = 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper';

interface AdPlaceholderProps {
  /** The placement ID from ads.config.ts */
  placement: keyof typeof adPlacements;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show a placeholder when ads are disabled */
  showPlaceholder?: boolean;
  /** Custom label for the placeholder */
  label?: string;
}

/**
 * Ad placeholder component with CLS protection
 * Reserves space for ads to prevent layout shift
 */
const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  placement,
  className,
  showPlaceholder = true,
  label,
}) => {
  const placementConfig = adPlacements[placement];

  if (!placementConfig) {
    console.warn(`Ad placement "${placement}" not found in config`);
    return null;
  }

  // Get responsive sizes
  const { sizes, format, name } = placementConfig;

  // CSS for CLS protection - reserves space even before ad loads
  const getMinDimensions = () => {
    // Use mobile size as minimum to ensure space is always reserved
    return {
      minHeight: sizes.mobile[1],
      minWidth: sizes.mobile[0],
    };
  };

  const dimensions = getMinDimensions();

  // If ads are enabled and we have an ad slot ID, render the actual ad
  // For now, we just render a placeholder
  const renderAd = () => {
    if (adsConfig.enabled) {
      // TODO: Implement actual Google AdSense integration
      // const slotId = adsConfig.placementIds.googleAdsense[placement];
      // if (slotId) {
      //   return <ins className="adsbygoogle" ... />;
      // }
    }

    // Show placeholder when ads are not enabled
    if (!showPlaceholder) {
      return null;
    }

    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-neutral-400">
        <p className="text-xs font-medium">{label || name}</p>
        <p className="text-[10px]">
          {sizes.desktop[0]}x{sizes.desktop[1]}
        </p>
      </div>
    );
  };

  return (
    <div
      className={cn(
        // Base styles
        'relative overflow-hidden rounded-lg bg-neutral-100',
        // Border for visual feedback
        'border border-dashed border-neutral-300',
        // Responsive width
        'w-full',
        className
      )}
      style={{
        minHeight: `${dimensions.minHeight}px`,
      }}
      data-ad-placement={placement}
      data-ad-format={format}
    >
      {renderAd()}
    </div>
  );
};

/**
 * Sidebar ad component - optimized for sidebar placement
 */
export const SidebarAd: React.FC<{ className?: string }> = ({ className }) => (
  <AdPlaceholder placement="sidebarTop" className={className} />
);

/**
 * In-content ad component - for placing within article content
 */
export const InContentAd: React.FC<{
  position?: 'top' | 'bottom';
  className?: string;
}> = ({ position = 'top', className }) => (
  <AdPlaceholder
    placement={position === 'top' ? 'inContentTop' : 'inContentBottom'}
    className={className}
  />
);

/**
 * Header banner ad component
 */
export const HeaderBannerAd: React.FC<{ className?: string }> = ({ className }) => (
  <AdPlaceholder placement="headerBanner" className={className} />
);

/**
 * Footer banner ad component
 */
export const FooterBannerAd: React.FC<{ className?: string }> = ({ className }) => (
  <AdPlaceholder placement="footerBanner" className={className} />
);

export default AdPlaceholder;
