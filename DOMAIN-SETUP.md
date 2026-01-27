# Domain-Based Routing Setup

This application uses domain-based routing to serve different languages on different domains:

- **prohealthcalc.com** → English content
- **saglikhesapla.com** → Turkish content

## How It Works

### 1. Domain Detection

The middleware (`middleware.ts`) detects the domain from the request hostname and automatically sets the appropriate locale:

```typescript
if (hostname.includes('prohealthcalc.com')) {
  defaultLocale = 'en';
} else if (hostname.includes('saglikhesapla.com')) {
  defaultLocale = 'tr';
}
```

### 2. URL Structure

URLs do NOT include locale prefixes:
- ✅ `prohealthcalc.com/calorie-calculator`
- ✅ `saglikhesapla.com/kalori-hesaplayici`
- ❌ ~~`prohealthcalc.com/en/calorie-calculator`~~

### 3. Language Switching

When users click the language toggle button:
- They are redirected to the alternate domain
- The current path is translated to the target language
- Example: `prohealthcalc.com/calorie-calculator` → `saglikhesapla.com/kalori-hesaplayici`

### 4. SEO Configuration

Each domain has its own:
- Canonical URLs
- Alternate language tags (hreflang)
- Separate sitemaps
- Domain-specific branding

## Configuration Files

### Environment Variables

Create `.env.local` for development:

```env
NEXT_PUBLIC_EN_DOMAIN=localhost:3000
NEXT_PUBLIC_TR_DOMAIN=localhost:3000
SITE_URL=http://localhost:3000
NODE_ENV=development
```

For production, set:

```env
NEXT_PUBLIC_EN_DOMAIN=prohealthcalc.com
NEXT_PUBLIC_TR_DOMAIN=saglikhesapla.com
SITE_URL=https://prohealthcalc.com
NODE_ENV=production
```

### Key Files Modified

1. **middleware.ts** - Domain detection and locale routing
2. **routing.ts** - Locale configuration with domain constants
3. **i18n.ts** - Helper function for domain-based locale detection
4. **lib/domain.ts** - Utility functions for domain operations
5. **lib/seo.ts** - Domain-based SEO metadata generation
6. **components/layout/Header.tsx** - Language switcher with domain redirect
7. **config/site.config.ts** - Domain-specific site configuration
8. **messages/*.json** - Brand names updated (ProHealthCalc / Sağlık Hesapla)

## Deployment

### DNS Configuration

Point both domains to your hosting provider:

```
prohealthcalc.com     A     <your-server-ip>
www.prohealthcalc.com CNAME prohealthcalc.com

saglikhesapla.com     A     <your-server-ip>
www.saglikhesapla.com CNAME saglikhesapla.com
```

### Vercel Deployment

1. Add both domains in your Vercel project settings
2. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_EN_DOMAIN=prohealthcalc.com`
   - `NEXT_PUBLIC_TR_DOMAIN=saglikhesapla.com`
   - `SITE_URL=https://prohealthcalc.com`
   - `NODE_ENV=production`

3. Configure domain redirects:
   - `www.prohealthcalc.com` → `prohealthcalc.com`
   - `www.saglikhesapla.com` → `saglikhesapla.com`

### Testing Locally

To test domain-based routing locally, modify your hosts file:

**Windows:** `C:\Windows\System32\drivers\etc\hosts`
**Mac/Linux:** `/etc/hosts`

Add:
```
127.0.0.1 prohealthcalc.local
127.0.0.1 saglikhesapla.local
```

Then update `.env.local`:
```env
NEXT_PUBLIC_EN_DOMAIN=prohealthcalc.local:3000
NEXT_PUBLIC_TR_DOMAIN=saglikhesapla.local:3000
```

Access the site:
- English: `http://prohealthcalc.local:3000`
- Turkish: `http://saglikhesapla.local:3000`

## Sitemap Configuration

The sitemap is configured to generate separate entries for each domain in `next-sitemap.config.js`. After building, the sitemap will automatically include URLs for both domains.

## Important Notes

1. **No Locale Prefixes**: URLs do not contain `/en` or `/tr` prefixes
2. **Domain-Specific Branding**: Each domain has its own site name
3. **SEO Optimization**: Each domain has proper canonical and alternate tags
4. **Language Switching**: Redirects to the alternate domain with translated path
5. **Local Development**: Both domains resolve to localhost in development mode

## Troubleshooting

### Language not switching
- Check environment variables are set correctly
- Verify domain detection logic in middleware.ts
- Check browser console for redirect errors

### Wrong content showing
- Clear browser cache and cookies
- Verify DNS is pointing to correct server
- Check middleware logs for domain detection

### SEO issues
- Verify canonical URLs in page source
- Check hreflang tags are pointing to correct domains
- Validate sitemaps for both domains
