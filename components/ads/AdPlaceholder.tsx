'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { adsConfig, adPlacements } from '@/config/ads.config';

interface AdPlaceholderProps {
  /** The placement ID from ads.config.ts */
  placement: keyof typeof adPlacements;
  /** Additional CSS classes */
  className?: string;
  /** Ad format for responsive ads */
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  /** Whether the ad is full width responsive */
  fullWidthResponsive?: boolean;
}

/**
 * AdSense ad unit component with CLS protection
 * Renders actual Google AdSense ads when enabled, placeholder when disabled
 */
const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  placement,
  className,
  adFormat = 'auto',
  fullWidthResponsive = true,
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const isAdPushed = useRef(false);

  const placementConfig = adPlacements[placement];

  useEffect(() => {
    if (!adsConfig.enabled || isAdPushed.current) return;

    const slotId = adsConfig.placementIds.googleAdsense[placement as keyof typeof adsConfig.placementIds.googleAdsense];
    if (!slotId) return;

    try {
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
      adsbygoogle.push({});
      isAdPushed.current = true;
    } catch {
      // AdSense not loaded yet or ad blocker active
    }
  }, [placement]);

  if (!placementConfig) {
    return null;
  }

  const { sizes, name } = placementConfig;
  const slotId = adsConfig.enabled
    ? adsConfig.placementIds.googleAdsense[placement as keyof typeof adsConfig.placementIds.googleAdsense]
    : '';

  // When ads are enabled and we have a slot ID, render actual AdSense unit
  if (adsConfig.enabled && slotId) {
    return (
      <div
        ref={adRef}
        className={cn('overflow-hidden', className)}
        style={{ minHeight: `${sizes.mobile[1]}px` }}
        data-ad-placement={placement}
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-6384218533700364"
          data-ad-slot={slotId}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive.toString()}
        />
      </div>
    );
  }

  // Placeholder when ads are disabled (development mode)
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-neutral-100',
        'border border-dashed border-neutral-300',
        'w-full',
        className
      )}
      style={{ minHeight: `${sizes.mobile[1]}px` }}
      data-ad-placement={placement}
    >
      <div className="flex h-full w-full flex-col items-center justify-center text-neutral-400">
        <p className="text-xs font-medium">{name}</p>
        <p className="text-[10px]">
          {sizes.desktop[0]}x{sizes.desktop[1]}
        </p>
      </div>
    </div>
  );
};

/**
 * Sidebar ad component - optimized for sidebar placement
 */
export const SidebarAd: React.FC<{ className?: string }> = ({ className }) => (
  <AdPlaceholder placement="sidebarTop" className={className} adFormat="auto" />
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
    adFormat="fluid"
  />
);

/**
 * Header banner ad component
 */
export const HeaderBannerAd: React.FC<{ className?: string }> = ({ className }) => (
  <AdPlaceholder placement="headerBanner" className={className} adFormat="horizontal" />
);

/**
 * Footer banner ad component
 */
export const FooterBannerAd: React.FC<{ className?: string }> = ({ className }) => (
  <AdPlaceholder placement="footerBanner" className={className} adFormat="horizontal" />
);

export default AdPlaceholder;
