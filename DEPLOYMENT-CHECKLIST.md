# Deployment Checklist

## Pre-Deployment

### 1. Environment Configuration
- [ ] Create production `.env` file with correct domain values
- [ ] Set `NEXT_PUBLIC_EN_DOMAIN=prohealthcalc.com`
- [ ] Set `NEXT_PUBLIC_TR_DOMAIN=saglikhesapla.com`
- [ ] Set `SITE_URL=https://prohealthcalc.com`
- [ ] Set `NODE_ENV=production`

### 2. DNS Configuration
- [ ] Configure A records for both domains
- [ ] Configure CNAME records for www subdomains
- [ ] Verify DNS propagation (use `nslookup` or `dig`)
- [ ] Test domain resolution

### 3. SSL Certificates
- [ ] Obtain SSL certificate for prohealthcalc.com
- [ ] Obtain SSL certificate for saglikhesapla.com
- [ ] Configure auto-renewal for certificates
- [ ] Verify HTTPS works for both domains

### 4. Hosting Setup (Vercel)
- [ ] Add prohealthcalc.com to Vercel project
- [ ] Add saglikhesapla.com to Vercel project
- [ ] Configure domain redirects (www → non-www)
- [ ] Set environment variables in Vercel dashboard
- [ ] Enable automatic deployments from Git

### 5. Code Verification
- [ ] Run `npm run build` locally to verify build succeeds
- [ ] Test both domains locally using hosts file
- [ ] Verify language switching works
- [ ] Check SEO metadata on both domains
- [ ] Test calculator functionality on both languages

### 6. Analytics & Tracking
- [ ] Add Google Analytics ID to `config/site.config.ts`
- [ ] Add Google AdSense ID (if applicable)
- [ ] Set up Google Search Console for both domains
- [ ] Submit sitemaps to Google Search Console
- [ ] Verify tracking works on both domains

### 7. Content Verification
- [ ] Verify all translations are complete
- [ ] Check branding appears correctly (ProHealthCalc / Sağlık Hesapla)
- [ ] Test all calculator paths are translated
- [ ] Verify footer copyright shows correct brand name
- [ ] Check meta descriptions for both languages

## Deployment

### 1. Initial Deploy
```bash
npm run build
npm run start
```

### 2. Vercel Deploy
```bash
vercel --prod
```

Or push to main branch for automatic deployment.

### 3. Post-Deploy Verification
- [ ] Visit prohealthcalc.com and verify English content
- [ ] Visit saglikhesapla.com and verify Turkish content
- [ ] Test language switcher button
- [ ] Verify no 404 errors
- [ ] Check browser console for errors
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

## SEO Configuration

### 1. Sitemap Submission
- [ ] Generate sitemap: `npm run build && npm run postbuild`
- [ ] Verify sitemap.xml exists for both domains
- [ ] Submit prohealthcalc.com/sitemap.xml to Google Search Console
- [ ] Submit saglikhesapla.com/sitemap.xml to Google Search Console

### 2. robots.txt
- [ ] Verify robots.txt is accessible
- [ ] Check sitemap references are correct
- [ ] Verify crawl permissions

### 3. Meta Tags Verification
- [ ] Check canonical URLs point to correct domain
- [ ] Verify hreflang tags point to alternate domain
- [ ] Test Open Graph tags (use Facebook debugger)
- [ ] Test Twitter Card tags (use Twitter validator)
- [ ] Verify structured data (use Google Rich Results Test)

### 4. Search Console Setup
- [ ] Add both domains to Google Search Console
- [ ] Verify ownership for both domains
- [ ] Submit sitemaps
- [ ] Monitor index coverage
- [ ] Check for crawl errors

## Performance & Monitoring

### 1. Performance Testing
- [ ] Run Lighthouse audit for both domains
- [ ] Check Core Web Vitals
- [ ] Test page load speed
- [ ] Optimize images if needed
- [ ] Enable Vercel Analytics

### 2. Monitoring Setup
- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Configure error tracking (e.g., Sentry)
- [ ] Set up alerts for downtime
- [ ] Monitor server response times

### 3. Security
- [ ] Verify HTTPS is enforced
- [ ] Check security headers
- [ ] Test for XSS vulnerabilities
- [ ] Verify CORS policies
- [ ] Enable rate limiting if needed

## Marketing & Launch

### 1. Content Marketing
- [ ] Prepare launch announcement
- [ ] Update social media profiles with new domains
- [ ] Create branded images for both sites
- [ ] Prepare press release (optional)

### 2. Social Media
- [ ] Update Twitter handle and bio
- [ ] Update Facebook page information
- [ ] Update Instagram bio with new domain
- [ ] Create branded profile images

### 3. Link Building
- [ ] Update any existing backlinks to new domains
- [ ] Submit to web directories
- [ ] Reach out to health blogs for features
- [ ] Create content for link building

## Post-Launch Monitoring (First 48 Hours)

- [ ] Monitor server logs for errors
- [ ] Check Google Analytics for traffic
- [ ] Monitor Search Console for indexing issues
- [ ] Track user feedback
- [ ] Monitor social media mentions
- [ ] Check for broken links
- [ ] Verify email forms work (if any)
- [ ] Test language switching from various locations

## Maintenance Schedule

### Daily (First Week)
- Monitor error logs
- Check analytics data
- Review user feedback
- Check Search Console warnings

### Weekly
- Review performance metrics
- Update content as needed
- Check for broken links
- Review security alerts

### Monthly
- Update dependencies
- Review and refresh content
- Check SEO rankings
- Review analytics trends
- Backup database/content

## Emergency Rollback Plan

If something goes wrong:

1. **Immediate Actions**
   - Check Vercel deployment logs
   - Rollback to previous deployment in Vercel
   - Check DNS records
   - Verify environment variables

2. **Communication**
   - Notify users of issues (if significant)
   - Post updates on social media
   - Update status page (if applicable)

3. **Recovery**
   - Identify root cause
   - Fix issue in development
   - Test thoroughly
   - Redeploy with fixes

## Support

- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs
- Next-intl Documentation: https://next-intl-docs.vercel.app

## Notes

- Keep this checklist updated as the project evolves
- Document any issues encountered during deployment
- Share learnings with the team
- Update documentation with new procedures
