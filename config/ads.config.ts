export interface AdPlacement {
  id: string;
  name: string;
  format: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper';
  sizes: {
    mobile: [number, number];
    tablet: [number, number];
    desktop: [number, number];
  };
}

export const adPlacements: Record<string, AdPlacement> = {
  headerBanner: {
    id: 'header-banner',
    name: 'Header Banner',
    format: 'leaderboard',
    sizes: {
      mobile: [320, 50],
      tablet: [728, 90],
      desktop: [970, 90],
    },
  },
  sidebarTop: {
    id: 'sidebar-top',
    name: 'Sidebar Top',
    format: 'rectangle',
    sizes: {
      mobile: [300, 250],
      tablet: [300, 250],
      desktop: [300, 600],
    },
  },
  inContentTop: {
    id: 'in-content-top',
    name: 'In Content Top',
    format: 'rectangle',
    sizes: {
      mobile: [300, 250],
      tablet: [336, 280],
      desktop: [336, 280],
    },
  },
  inContentBottom: {
    id: 'in-content-bottom',
    name: 'In Content Bottom',
    format: 'rectangle',
    sizes: {
      mobile: [300, 250],
      tablet: [336, 280],
      desktop: [728, 90],
    },
  },
  footerBanner: {
    id: 'footer-banner',
    name: 'Footer Banner',
    format: 'leaderboard',
    sizes: {
      mobile: [320, 50],
      tablet: [728, 90],
      desktop: [728, 90],
    },
  },
};

export const adsConfig = {
  enabled: false, // Enable when ready for production
  placementIds: {
    googleAdsense: {
      headerBanner: '',
      sidebarTop: '',
      inContentTop: '',
      inContentBottom: '',
      footerBanner: '',
    },
  },
  lazyLoad: true,
  refreshInterval: 30000, // 30 seconds
};
