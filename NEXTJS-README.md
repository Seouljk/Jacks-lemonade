# Jack's Lemonade - Next.js Implementation

A modern, SEO-optimized Next.js 14 implementation of the Jack's Lemonade website with server-side rendering, static generation, and comprehensive structured data for search engines.

## 🚀 Project Structure

```
jacks-lemonade/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── lib/
│   └── data.ts            # Menu, branches, and site data
├── public/
│   ├── robots.txt         # Search engine crawling rules
│   ├── sitemap.xml        # XML sitemap for SEO
│   ├── manifest.json      # PWA manifest
│   └── assets/            # Images and media
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── .gitignore            # Git ignore rules
```

## 🎯 SEO Features Implemented

### 1. **Metadata & Meta Tags**
- Comprehensive meta tags in `layout.tsx`
- Open Graph tags for social sharing
- Twitter Card integration
- Canonical URLs
- Mobile app meta tags (Apple web app)

### 2. **Structured Data (Schema.org JSON-LD)**
- LocalBusiness schema for restaurant/business info
- BreadcrumbList schema for navigation
- Organization information
- Location and contact details
- Social media links

### 3. **Search Engine Optimization**
- Server-side rendering (SSR) for dynamic content
- Static site generation (SSG) for performance
- Optimized title and description tags
- Keywords list integrated into metadata
- Proper heading hierarchy (h1, h2, h3)
- Semantic HTML5 structure

### 4. **Performance Optimization**
- Image optimization with Next.js `Image` component
- Font preloading
- DNS prefetching for Google Fonts
- CSS minimization
- Code splitting per route
- Static asset optimization

### 5. **Crawlability & Indexability**
- `robots.txt` for search engine guidelines
- `sitemap.xml` for URL discovery
- Proper meta robots tags
- Open Graph meta tags
- Social media integration

### 6. **Progressive Web App (PWA)**
- `manifest.json` for PWA installation
- Theme color integration
- Responsive viewport settings
- App shortcut icons

## 📋 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd jacks-lemonade
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 🌐 Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and deploys
4. Your site is live with automatic SSR optimization

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Other Platforms

**Netlify:**
```bash
# Build and export
npm run build
```

**AWS, GCP, or Docker:**
- Next.js supports containerization
- Configure environment variables
- Use `npm run build` then `npm run start`

## 📊 SEO Features Breakdown

### Title & Meta Tags
```typescript
// Auto-generated from metadata export
<title>Jack's Lemonade - The Only Fresh Lemonade in 30 Flavors</title>
<meta name="description" content="The only fresh lemonade in 30 flavors...">
<meta name="keywords" content="lemonade, fresh lemonade, Metro Manila...">
```

### Open Graph (Social Sharing)
```typescript
<meta property="og:title" content="Jack's Lemonade - Fresh, Hand-Squeezed Lemonade">
<meta property="og:description" content="The only fresh lemonade in 30 flavors...">
<meta property="og:image" content="https://jackslemonade.com/og-image.png">
<meta property="og:type" content="website">
```

### Structured Data Example
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jack's Lemonade",
  "description": "The only fresh lemonade in 30 flavors...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Metro Manila"
  },
  "sameAs": ["https://facebook.com/...", "https://instagram.com/..."]
}
```

### Breadcrumb Navigation
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"position": 1, "name": "Home", "item": "https://jackslemonade.com"},
    {"position": 2, "name": "Menu", "item": "https://jackslemonade.com/#menu"},
    {"position": 3, "name": "Find a Branch", "item": "https://jackslemonade.com/#branches"}
  ]
}
```

## 🔧 Configuration

### Update Site Configuration

Edit `lib/data.ts` to customize:
- Site name and description
- Social media links
- Contact information
- Menu items, branches, prices
- Flavor families and descriptions

### SEO Customization

Edit `app/layout.tsx` to:
- Update meta keywords
- Change Open Graph images
- Modify structured data
- Configure Google Analytics
- Add tracking pixels

### Styling

Edit `app/globals.css` for:
- Color scheme
- Typography
- Responsive breakpoints
- Component styling

## 📱 Responsive Design

- **Mobile-first approach** with CSS media queries
- **Flexbox and CSS Grid** for layouts
- **Viewport optimization** for all devices
- **Touch-friendly buttons** and interactive elements
- **Fast load times** on 3G connections

Tested and responsive on:
- iPhone (320px+)
- iPad (768px+)
- Desktop (1200px+)

## 🎨 Customization Guide

### Colors
Update CSS variables in `app/globals.css`:
```css
:root {
  --color-bg: #FFFBEE;
  --color-yellow: #FFD21A;
  --color-green-dark: #0F4A26;
  /* ... */
}
```

### Fonts
Google Fonts are pre-loaded in `layout.tsx`:
- Baloo 2 (headings)
- Caveat (accents)
- Nunito (body text)

Change the font link in the `<head>` section.

### Images
Place images in `/public/assets/`:
- `cup-tamarind.png` - About section
- `monsoon-sips.png` - Menu seasonal
- `og-image.png` - Social sharing
- `favicon.ico` - Browser tab

## 📈 Performance Metrics

Expected Lighthouse scores with optimizations:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

## 🔍 Testing SEO

### Local Testing
```bash
# Check SEO with sitemap
curl http://localhost:3000/sitemap.xml

# Check robots.txt
curl http://localhost:3000/robots.txt

# Check meta tags (view page source)
# Look for og:, twitter:, and other meta tags
```

### Online Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Schema.org Validator](https://validator.schema.org)

## 🚀 Production Checklist

- [ ] Update `SITE_CONFIG.url` to your production domain
- [ ] Add real product images
- [ ] Update pricing data in `lib/data.ts`
- [ ] Set real social media links
- [ ] Add contact email and phone
- [ ] Create custom social media images (og-image.png, twitter-image.png)
- [ ] Update sitemap with actual domain
- [ ] Configure Google Analytics ID
- [ ] Set up email notifications/contact form
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org)
- [Google Search Central](https://developers.google.com/search)
- [Web.dev Best Practices](https://web.dev)

## 🛠 Troubleshooting

### Development server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Images not showing
- Ensure images are in `/public/assets/`
- Check image paths in components
- Verify image formats (PNG, JPG, WebP)

### SEO not updating
- Clear browser cache
- Wait 24-48 hours for search engines
- Submit URL to Google Search Console
- Check sitemap.xml is accessible

### Build fails
```bash
# Check TypeScript errors
npm run build

# Fix linting issues
npm run lint
```

## 📝 License

Created for Jack's Lemonade - Pro-bono project

## 🤝 Support

For issues or questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the code comments
3. Check the troubleshooting section above
