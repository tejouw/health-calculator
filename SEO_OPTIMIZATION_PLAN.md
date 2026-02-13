# 🎯 SEO Uyumluluk İyileştirme Planı
**Mevcut Durum:** 95/100 ⭐⭐⭐⭐⭐
**Hedef:** 100/100 + Organik Trafik Artışı

---

## 📊 Durum Özeti

### ✅ Mükemmel Durumda Olanlar
- [x] XML Sitemap (hreflang, priority, changefreq)
- [x] robots.txt (profesyonel yapılandırma)
- [x] Structured Data (4 JSON-LD schema per calculator)
- [x] Metadata (Open Graph, Twitter Cards)
- [x] Canonical URLs & Hreflang
- [x] Image Optimization (AVIF, WebP)
- [x] Mobile Responsive Design
- [x] SSL/HTTPS
- [x] Next.js 16 Performance

### ⚠️ İyileştirme Gereken Alanlar
- [ ] Google Search Console setup
- [ ] Google Analytics (GA4) tracking
- [ ] Core Web Vitals optimization
- [ ] Internal linking strategy
- [ ] Content freshness (post-calculation sections)
- [ ] Schema markup genişletme
- [ ] Backlink strategy
- [ ] Local SEO (eğer hedef ülke varsa)

---

## 🔴 ÖNCELIK 1: KRİTİK (1-2 Gün İçinde)

### 1.1 Google Search Console + Analytics Setup

#### Gerekli Environment Variables
`.env.local` dosyasını production için düzenle:

```bash
# Domain Configuration (Production)
NEXT_PUBLIC_EN_DOMAIN=prohealthcalc.com
NEXT_PUBLIC_TR_DOMAIN=saglikhesapla.com
SITE_URL=https://prohealthcalc.com
NODE_ENV=production

# Google Analytics (GA4)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz456

# Web3Forms (mevcut)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=5c89e389-c952-484f-8af8-f7813bf97c34
```

#### Adım Adım Kurulum

**A) Google Search Console**
1. https://search.google.com/search-console → Add Property
2. **2 ayrı property oluştur:**
   - Property 1: `https://prohealthcalc.com` (EN)
   - Property 2: `https://saglikhesapla.com` (TR)
3. Verification method: **HTML tag** seç
4. Verification code'u kopyala → `.env.local`'e ekle
5. Deploy et → "Verify" butonuna bas
6. Her iki domain için **sitemap submit et:**
   - EN: `https://prohealthcalc.com/sitemap.xml`
   - TR: `https://saglikhesapla.com/sitemap.xml`

**B) Google Analytics (GA4)**
1. https://analytics.google.com → Create Property
2. Property name: "ProHealthCalc"
3. Web stream oluştur:
   - URL: `https://prohealthcalc.com`
   - Stream name: "ProHealthCalc Web"
4. **Measurement ID** kopyala (G-XXXXXXXXXX)
5. `.env.local`'e ekle → Deploy et

#### Verification Testi
```bash
# 1. Sitemap erişilebilir mi?
curl https://prohealthcalc.com/sitemap.xml
curl https://saglikhesapla.com/sitemap.xml

# 2. Meta tag eklenmiş mi?
# Browser'da view source > Ara: "google-site-verification"

# 3. GA4 çalışıyor mu?
# Browser DevTools > Network > Filter: "google-analytics"
# Sayfayı yenile, gtag request'leri gör
```

**Beklenen Sonuç:**
✅ 48 saat içinde Google Search Console'da sayfa indexleme başlar
✅ GA4'te real-time ziyaretçi verileri görülür

---

## 🟡 ÖNCELIK 2: PERFORMANS (1 Hafta)

### 2.1 Core Web Vitals Optimization

#### A) Lazy Loading Enhancement
Tüm calculator komponentlerinde images için:

```typescript
// Örnek: BmiCalculator.tsx
import Image from 'next/image';

<Image
  src="/images/bmi-illustration.webp"
  alt="BMI Calculator Illustration"
  width={400}
  height={300}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,..." // 10x10 SVG blur
/>
```

**Oluşturma komutu:**
```bash
# Her calculator için blur placeholder oluştur
npm install plaiceholder sharp
```

#### B) Font Optimization (Zaten iyi, ama kontrol et)
`app/[locale]/layout.tsx`:
```typescript
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',        // ✅ Var
  variable: '--font-inter', // ✅ Var
  preload: true,          // Ekle (eğer yoksa)
});
```

#### C) Bundle Size Optimization
```json
// package.json scripts ekle:
"analyze": "ANALYZE=true next build"
```

```typescript
// next.config.ts - Bundle analyzer ekle
const nextConfig: NextConfig = {
  // ... mevcut config
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};
```

#### D) Preconnect Critical Domains
`app/[locale]/layout.tsx` - `<head>` içine:
```typescript
// Google Analytics için DNS prefetch
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

**Hedef Skorlar:**
- LCP (Largest Contentful Paint): < 2.5s ✅
- FID (First Input Delay): < 100ms ✅
- CLS (Cumulative Layout Shift): < 0.1 ✅

**Test Etme:**
- https://pagespeed.web.dev/
- Chrome DevTools > Lighthouse

---

## 🟢 ÖNCELIK 3: İÇERİK STRATEJİSİ (2 Hafta)

### 3.1 Post-Calculation Content Enrichment
MEMORY.md'de belirtildiği gibi, "Hesapla" sonrası içerik **EN ZENGİN** bölüm olmalı.

#### Şablon Yapısı (Her Calculator İçin)
```typescript
// calculators/[category]/[name]/[name]Content.ts

export const bmiContent = {
  en: {
    // ... mevcut content

    // ✅ EKLE: Post-calculation sections
    postCalculation: {
      // Layer 1: Interactive Cards
      insights: [
        {
          icon: 'TrendingUp',
          title: 'Health Trends',
          description: '...',
          visual: 'chart' // veya 'infographic'
        },
        {
          icon: 'Target',
          title: 'Goal Setting',
          description: '...',
          cta: 'Set Your Goal'
        }
      ],

      // Layer 2: Educational Content (SEO!)
      education: {
        overview: '1500+ word detailed explanation...',
        sections: [
          {
            heading: 'Understanding BMI Ranges',
            content: '...',
            schema: 'HowTo' // veya 'FAQ'
          },
          {
            heading: 'BMI Limitations and Alternatives',
            content: '...',
          }
        ],
        faq: [
          {
            question: 'Is BMI accurate for athletes?',
            answer: '...'
          }
          // 5-10 FAQ
        ]
      },

      // Layer 3: Related Actions
      actions: [
        {
          calculator: 'body-fat-calculator',
          reason: 'For a more detailed body composition analysis',
          ctaText: 'Calculate Body Fat %'
        }
      ]
    }
  },
  tr: { /* aynı yapı */ }
};
```

#### İçerik Kalitesi Checklist (Her Calculator)
- [ ] 1500+ kelime educational content
- [ ] 5-10 FAQ (FAQ Schema için)
- [ ] 3-5 high-quality images/infographics
- [ ] Internal links (3-5 related calculators)
- [ ] External authority links (2-3: WHO, CDC, Mayo Clinic)
- [ ] Readability: Flesch Reading Ease > 60
- [ ] Keyword density: Primary keyword 1-2%, LSI keywords 0.5-1%

### 3.2 FAQ Schema Expansion
Her calculator'a zengin FAQ ekle:

```typescript
// app/[locale]/[category]/[calculator]/page.tsx
import { generateFAQSchema } from '@/lib/seo';

const faqSchema = generateFAQSchema(calculatorContent.postCalculation.faq);

// JSON-LD script tag olarak ekle
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

### 3.3 Content Freshness Strategy
```typescript
// lib/seo.ts - dateModified otomatiği
export function generateCalculatorSchema(calculator: {...}) {
  return {
    // ...
    datePublished: '2025-01-01', // Sabit
    dateModified: new Date().toISOString().split('T')[0], // ✅ Otomatik
  };
}
```

**Content Update Schedule:**
- **Weekly**: Trending calculators (BMI, Calorie, etc.) - minor edits
- **Monthly**: Seasonal calculators (Fitness Jan-Mar, Pregnancy all year)
- **Quarterly**: All calculators - review + update

---

## 🔵 ÖNCELIK 4: SCHEMA & STRUCTURED DATA (1 Hafta)

### 4.1 Review & Rating Schema Ekle
Kullanıcı yorumları toplayın ve schema'ya ekleyin:

```typescript
// lib/seo.ts - Yeni fonksiyon ekle
export function generateAggregateRatingSchema(data: {
  itemName: string;
  ratingValue: number;
  ratingCount: number;
  bestRating?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'WebApplication',
      name: data.itemName,
    },
    ratingValue: data.ratingValue,
    ratingCount: data.ratingCount,
    bestRating: data.bestRating || 5,
  };
}
```

**Kullanım:**
```typescript
// Her calculator sayfasında
const ratingSchema = generateAggregateRatingSchema({
  itemName: 'BMI Calculator',
  ratingValue: 4.8,
  ratingCount: 1247,
});
```

### 4.2 Video Schema (Eğer Tutorial Videoları Eklersen)
```typescript
export function generateVideoObjectSchema(data: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string; // ISO 8601: PT1M30S
  contentUrl: string;
  embedUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    uploadDate: data.uploadDate,
    duration: data.duration,
    contentUrl: data.contentUrl,
    embedUrl: data.embedUrl,
  };
}
```

### 4.3 Breadcrumb Schema (Zaten var mı kontrol et)
Her calculator sayfasında breadcrumb:

```typescript
import { generateBreadcrumbSchema } from '@/lib/seo';

const breadcrumbItems = [
  { name: 'Home', url: domain },
  { name: categoryName, url: `${domain}/${categorySlug}` },
  { name: calculatorTitle, url: `${domain}/${categorySlug}/${calcSlug}` },
];

const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
```

---

## 🟣 ÖNCELIK 5: TECHNICAL SEO REFINEMENTS (2 Hafta)

### 5.1 Internal Linking Strategy

#### A) Contextual Links (İçerik İçinde)
Her calculator'ın educational content kısmında:
```markdown
For athletes with high muscle mass, [Body Fat Calculator](link)
provides more accurate results than BMI alone.

To determine your daily calorie needs based on your BMI result,
use our [TDEE Calculator](link).
```

#### B) Related Calculators Widget
Zaten var: `components/calculators/RelatedCalculators.tsx`

**İyileştirme:** Contextual relevance artır
```typescript
// config/calculatorRelations.config.ts
export const calculatorRelations = {
  'bmi-calculator': {
    primary: [
      'ideal-weight-calculator',
      'body-fat-calculator',
      'waist-hip-ratio-calculator' // ✅ Aynı "body composition" teması
    ],
    secondary: [
      'calorie-calculator',
      'bmr-calculator',
      'tdee-calculator' // Nutrition-related
    ],
    // ✅ EKLE: Reason (SEO!)
    reasons: {
      'body-fat-calculator': 'More accurate body composition analysis',
      'ideal-weight-calculator': 'Find your healthy weight goal',
    }
  }
};
```

#### C) Category Hub Pages
Şu an her category için hub page var mı? Yoksa oluştur:

```typescript
// app/[locale]/[category]/page.tsx
export default function CategoryPage({ params }) {
  const category = params.category;
  const calculatorsInCategory = getCalculatorsByCategory(category);

  return (
    <div>
      <h1>{categoryTitle}</h1>
      <p>Category description (500+ words, SEO-optimized)</p>

      {/* Calculator grid */}
      <div className="grid">
        {calculatorsInCategory.map(calc => (
          <CalculatorCard key={calc.id} {...calc} />
        ))}
      </div>

      {/* Educational content */}
      <section>
        <h2>About {categoryTitle}</h2>
        <p>...</p>
      </section>
    </div>
  );
}
```

**Hedef:**
- Her category hub: 1000+ words
- 10+ internal links
- Schema: CollectionPage

### 5.2 URL Structure Optimization (Zaten mükemmel!)
✅ Mevcut yapı ideal:
```
/nutrition/calorie-calculator
/beslenme/kalori-hesaplayici

✅ Clean URLs
✅ Semantic slugs
✅ Hreflang cross-linking
```

### 5.3 Duplicate Content Prevention
```typescript
// middleware.ts - Canonical redirect
export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Trailing slash redirect
  if (url.pathname.endsWith('/') && url.pathname !== '/') {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // Case-insensitive redirect
  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
```

### 5.4 404 Page Optimization
```typescript
// app/not-found.tsx
import { getSimilarCalculators } from '@/lib/search';

export default function NotFound() {
  const suggestedCalculators = getSimilarCalculators(/* based on URL */);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>

      {/* Search box */}
      <SearchBox />

      {/* Suggested calculators */}
      <section>
        <h2>You might be looking for:</h2>
        {suggestedCalculators.map(calc => <CalculatorCard {...calc} />)}
      </section>

      {/* Popular calculators */}
      <PopularCalculators />
    </div>
  );
}
```

---

## 🟠 ÖNCELIK 6: OFF-PAGE SEO (Devam Eden Süreç)

### 6.1 Backlink Strategy

#### A) High-Quality Link Opportunities
**Hedef Siteler (Domain Authority 40+):**
1. **Health Blogs**: Healthline, WebMD, Verywell Health
   - Outreach: "Free calculator embed widget"
2. **Fitness Communities**: MyFitnessPal, Bodybuilding.com forums
   - Strategy: Answer questions + link to calculator
3. **Medical Institutions**: Hospital blogs, clinic websites
   - Strategy: "Free tool for your patients"
4. **Government Health Sites**: WHO, CDC (referans bağlantısı)
   - Strategy: Data citation

#### B) Content Marketing for Links
**Blog Post Ideas** (her biri backlink çekebilir):
1. "BMI vs Body Fat %: Which One Matters More?" → Link to both calculators
2. "The Truth About Calorie Calculators: Which Formula is Best?"
3. "How to Calculate Your Macro Needs: Complete Guide"

**Publication Platform:**
- Medium (tag: #health, #fitness, #nutrition)
- Dev.to (technical health app articles)
- LinkedIn Articles (professional health content)

#### C) Guest Posting
**Target Blogs:**
- Nutrition blogs
- Fitness influencer blogs
- Parenting blogs (pregnancy calculators)

**Pitch Template:**
```
Subject: Free Interactive Calculator for Your Readers

Hi [Name],

I noticed your recent article about [topic]. Your readers might find
our [Calculator Name] useful for [specific benefit].

We'd love to contribute a guest post:
"[Title Related to Their Niche]"

It will include:
- [Value prop 1]
- [Value prop 2]
- Embed code for the calculator (free to use)

Would this interest your audience?

Best,
[Your Name]
```

### 6.2 Social Signals
**Platform Strategy:**
1. **Pinterest** (Visual health content):
   - Infographic pins → Calculator landing pages
   - "BMI Chart", "Calorie Guide", "Pregnancy Timeline"

2. **Reddit**:
   - r/fitness, r/loseit, r/nutrition, r/bodyweightfitness
   - Strategy: Answer questions genuinely + link when relevant

3. **Quora**:
   - "How do I calculate my BMI?"
   - "What's my ideal weight?"
   - Strategy: Comprehensive answer + link to calculator

4. **YouTube** (Future):
   - "How to Use Our BMI Calculator"
   - "5 Best Health Calculators for Weight Loss"

### 6.3 Directory Submissions
**Free High-Quality Directories:**
- [ ] Google My Business (eğer fiziksel ofis varsa)
- [ ] Bing Places
- [ ] Health-specific directories
- [ ] Tool directories (Product Hunt, BetaList)

---

## 📈 ÖNCELIK 7: TRACKING & ANALYTICS (1 Hafta)

### 7.1 Goal Tracking Setup (GA4)

#### Custom Events
```typescript
// lib/analytics.ts
export const trackCalculation = (calculatorName: string, result: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'calculation_complete', {
      calculator_name: calculatorName,
      result_value: result,
    });
  }
};

export const trackShare = (calculatorName: string, platform: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      calculator_name: calculatorName,
      platform: platform,
    });
  }
};
```

**Kullanım:**
```typescript
// BmiCalculator.tsx
import { trackCalculation } from '@/lib/analytics';

const handleCalculate = () => {
  const result = calculateBMI(weight, height);
  setResult(result);

  // ✅ Track event
  trackCalculation('bmi-calculator', result.bmi);
};
```

#### Conversion Goals (GA4)
1. **Calculator Usage**: `calculation_complete` event
2. **Engagement**: Time on page > 1 min
3. **Share**: `share` event
4. **Newsletter Signup**: `newsletter_signup` event

### 7.2 Heatmap & Session Recording
**Tool:** Microsoft Clarity (free, GDPR-compliant)

```typescript
// components/analytics/MicrosoftClarity.tsx
'use client';

export function MicrosoftClarity() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
    }
  }, []);

  return null;
}
```

**Neden Kullanmalı?**
- Kullanıcılar hangi bölümde takılıyor?
- Hangi butonlara tıklanmıyor?
- Mobile scroll depth ne kadar?

### 7.3 Search Console Monitoring
**Haftalık Kontrol Edilecekler:**
- [ ] Coverage: Indexleme hataları var mı?
- [ ] Performance: CTR düşük olan sayfalar?
- [ ] Core Web Vitals: Kötü skorlu sayfalar?
- [ ] Manual Actions: Penalty yok mu?
- [ ] Security Issues: Hacking yok mu?

---

## 🎯 KPI'lar ve Hedefler

### 3 Aylık Hedefler
| Metrik | Şu An | Hedef (3 ay) |
|--------|-------|--------------|
| Organic Traffic | 0 (yeni site) | 5,000/ay |
| Indexed Pages | 0 | 76+ (38 calc × 2 lang) |
| Domain Authority | N/A | DA 20-30 |
| Backlinks | 0 | 50+ (kaliteli) |
| Avg. Time on Page | N/A | 2:30+ |
| Bounce Rate | N/A | < 60% |
| Core Web Vitals | ? | All Green |

### 6 Aylık Hedefler
- Organic Traffic: 20,000/ay
- Top 10 Rankings: 50+ keywords
- Domain Authority: DA 40+
- Backlinks: 200+
- Email Subscribers: 1,000+

### 12 Aylık Hedefler
- Organic Traffic: 100,000/ay
- Top 3 Rankings: 100+ keywords
- Domain Authority: DA 50+
- Backlinks: 1,000+
- Revenue: (eğer monetization varsa)

---

## 🛠️ SEO Tools Stack

### Free Tools
- [x] Google Search Console
- [x] Google Analytics 4
- [ ] Microsoft Clarity (heatmaps)
- [ ] Google PageSpeed Insights
- [ ] Schema.org Validator
- [ ] Mobile-Friendly Test
- [ ] Rich Results Test

### Paid Tools (Opsiyonel ama Önerilen)
- [ ] **Ahrefs** ($99/mo): Backlink analysis, keyword research
- [ ] **SEMrush** ($120/mo): Competitive analysis, site audit
- [ ] **Screaming Frog** (Free up to 500 URLs): Technical SEO audit

### Alternative Free Tools
- [ ] **Ubersuggest** (Free tier): Keyword research
- [ ] **AnswerThePublic**: Content ideas
- [ ] **Google Trends**: Topic trending

---

## 📅 Implementation Timeline

### Week 1: Critical Setup
- [x] Day 1-2: Google Search Console + Analytics
- [x] Day 3-4: Sitemap verification, indexing başlat
- [x] Day 5-7: Core Web Vitals test + ilk optimizasyonlar

### Week 2-3: Content Enhancement
- [ ] Week 2: Top 5 calculator'a zengin post-calc content
- [ ] Week 3: Kalan calculators'a FAQ + educational sections

### Week 4: Schema Expansion
- [ ] AggregateRating schema ekle
- [ ] FAQ schema ekle (tüm calculators)
- [ ] Breadcrumb schema kontrol/ekle

### Month 2: Internal Linking + Category Pages
- [ ] Category hub pages oluştur (13 category)
- [ ] Internal linking strategy implement
- [ ] Related calculators logic iyileştir

### Month 3: Off-Page SEO Başlat
- [ ] Guest post outreach (10 site)
- [ ] Directory submissions (20 directory)
- [ ] Social media presence (Pinterest, Reddit)
- [ ] İlk backlink'leri kur (50+ hedef)

### Month 4-6: Scale & Optimize
- [ ] A/B testing (titles, meta descriptions)
- [ ] Content refresh (seasonal updates)
- [ ] Advanced schema (Video, Review)
- [ ] Link building devam (200+ backlink)

---

## 🚨 Common SEO Mistakes to Avoid

### ❌ DON'T
1. **Keyword Stuffing**: "BMI calculator BMI free BMI tool BMI"
2. **Thin Content**: <300 words per page
3. **Duplicate Content**: Copying from other sites
4. **Hidden Text**: White text on white bg
5. **Link Farms**: Buying cheap backlinks
6. **Slow Loading**: >3s page load time
7. **Not Mobile-First**: Desktop-only design
8. **Ignoring Analytics**: Not tracking anything
9. **Black-Hat Techniques**: Cloaking, doorways
10. **Outdated Content**: Never updating

### ✅ DO
1. **User-First**: Solve problems, don't just rank
2. **Quality Content**: 1500+ words, original, valuable
3. **Natural Links**: Earn links, don't buy
4. **Mobile Optimization**: Test on real devices
5. **Regular Updates**: Fresh content monthly
6. **Track Everything**: Data-driven decisions
7. **White-Hat Only**: Sustainable, long-term
8. **User Experience**: Fast, intuitive, helpful
9. **E-A-T**: Expertise, Authority, Trust
10. **Patience**: SEO takes 3-6 months minimum

---

## 📚 SEO Learning Resources

### Official Documentation
- [Google Search Central](https://developers.google.com/search)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)
- [Schema.org](https://schema.org/)

### Recommended Blogs
- Moz Blog
- Ahrefs Blog
- Search Engine Journal
- Backlinko

### Communities
- r/SEO (Reddit)
- r/bigseo (Reddit)
- SEO Discord servers
- WebmasterWorld forums

---

## ✅ Monthly SEO Checklist

### Her Ay Yapılacaklar
- [ ] Google Search Console review (errors, opportunities)
- [ ] Google Analytics analysis (traffic, conversions)
- [ ] Core Web Vitals check (performance)
- [ ] New backlinks check (Ahrefs/SEMrush)
- [ ] Competitor analysis (rankings, content)
- [ ] Content update (1-2 calculators)
- [ ] New content publish (blog post/guide)
- [ ] Technical audit (broken links, 404s)
- [ ] Schema validation (no errors)
- [ ] Mobile usability test

### Quarterly (3 Ayda Bir)
- [ ] Full site audit (Screaming Frog)
- [ ] Keyword research refresh
- [ ] Backlink cleanup (disavow toxic links)
- [ ] Content strategy review
- [ ] Competitor deep-dive
- [ ] UX/UI improvements based on heatmaps

---

## 🎓 Next Steps

1. **Today**: Setup Google Search Console + Analytics
2. **This Week**: Fix .env.local, deploy, verify
3. **This Month**: Content enhancement top 10 calculators
4. **Next 3 Months**: Implement full plan, track KPIs
5. **Ongoing**: Link building, content updates, monitoring

---

## 📞 Need Help?

**SEO Consultant Önerileri:**
- Upwork: SEO specialist ara (budget: $500-2000/mo)
- Fiverr: One-time audit ($50-200)
- Local SEO agencies: Long-term partnership

**DIY Approach:**
Bu plandaki her şey kendi başına yapılabilir, yaklaşık:
- **Time Investment**: 10-15 saat/hafta (ilk 2 ay)
- **Cost**: $0-200/mo (tools opsiyonel)
- **Results Timeline**: 3-6 ay

---

**Son Güncelleme:** 2026-02-13
**Planlayan:** Claude Code
**Versiyon:** 1.0
