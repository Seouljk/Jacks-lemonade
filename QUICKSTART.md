# Jack's Lemonade - Next.js Quick Start Guide

Welcome! This is a modern Next.js implementation with full SEO optimization. Get started in minutes.

## 🚀 One-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: **http://localhost:3000**

That's it! 🎉

## 📁 File Locations

Key files you might want to edit:

- **Menu Data:** `lib/data.ts`
  - Edit flavors, families, branches, prices
  
- **Website Content:** `app/page.tsx`
  - Edit text, headings, descriptions
  
- **Styling:** `app/globals.css`
  - Edit colors, fonts, layouts
  
- **SEO Settings:** `app/layout.tsx`
  - Edit meta tags, site config, structured data
  
- **Images:** `public/assets/`
  - Add: `cup-tamarind.png`, `monsoon-sips.png`

## 🎨 Customization Examples

### Change a flavor name
Edit `lib/data.ts`:
```typescript
{ name: "Your New Flavor Name", note: "fresh · healthy" }
```

### Add a new branch location
Edit `lib/data.ts`:
```typescript
BRANCHES.push({
  id: 'new-branch',
  mall: "SM Shopping Center",
  city: "Quezon City",
  note: "near entrance",
  coordinates: { lat: 14.6349, lng: 121.0663 }
});
```

### Update brand colors
Edit `app/globals.css`:
```css
:root {
  --color-yellow: #FFD21A;      /* Change this */
  --color-green-dark: #0F4A26;  /* Or this */
}
```

## 🌐 Deploy to Production

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Done! Your site is live with automatic HTTPS and CDN.

### Option 2: Other Hosts
```bash
npm run build
npm run start
```

Deploy the built files to your host.

## 📊 SEO is Built-in

Your site automatically has:
- ✅ Dynamic meta tags
- ✅ Open Graph tags (social sharing)
- ✅ Schema structured data
- ✅ Sitemap.xml
- ✅ robots.txt
- ✅ Mobile optimization
- ✅ Fast loading

## 🔗 Important Links

- **Local:** http://localhost:3000
- **Sitemap:** http://localhost:3000/sitemap.xml
- **Robots:** http://localhost:3000/robots.txt

## 🐛 Having Issues?

### Port already in use?
```bash
npm run dev -- -p 3001
```

### Images not showing?
Make sure files are in `public/assets/`:
- `cup-tamarind.png`
- `monsoon-sips.png`

### Need to reset?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## 📚 Need More Help?

- Read the [full README](./NEXTJS-README.md)
- Check [Next.js docs](https://nextjs.org/docs)
- View the [old static version](./index.html)

## ✨ Next Steps

1. ✅ Get it running locally (`npm run dev`)
2. ✅ Customize data in `lib/data.ts`
3. ✅ Add your images to `public/assets/`
4. ✅ Deploy to Vercel or your host
5. ✅ Submit sitemap to Google Search Console

You're all set! 🍋
