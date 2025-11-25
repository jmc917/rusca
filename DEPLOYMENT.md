# Deployment Guide for RUSCA Website

## Quick Deploy to GitHub Pages (Free & Easy)

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/jmc917/rusca
2. Click **Settings** (top menu)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be live at: `https://jmc917.github.io/rusca/`

### Step 2: Custom Domain (Optional - for www.yourdomain.com)
If you have a custom domain (e.g., `rusca.rutgers.edu` or `www.rusca.org`):

1. In GitHub Pages settings, add your custom domain
2. Add a `CNAME` file to your repository root:
   ```
   yourdomain.com
   ```
3. Update DNS records with your domain provider:
   - Type: `CNAME`
   - Name: `www` (or `@` for root domain)
   - Value: `jmc917.github.io`
4. Update the meta tags in `index.html` with your actual domain

### Step 3: Update URLs (After Deployment)
After deploying, update these files with your actual URL:

1. **index.html** - Update all `https://jmc917.github.io/rusca/` references
2. **sitemap.xml** - Update all URLs
3. **robots.txt** - Update sitemap URL

## Alternative Deployment Options

### Option 2: Netlify (Recommended for Custom Domains)
1. Go to https://www.netlify.com
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Add custom domain in Netlify settings
7. Netlify provides free SSL automatically

### Option 3: Vercel
1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Import your repository
4. Deploy (no build needed for static site)
5. Add custom domain in project settings

## SEO Checklist ✅

- [x] Meta tags added (title, description, keywords)
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Structured data (JSON-LD) for search engines
- [x] Sitemap.xml created
- [x] Robots.txt created
- [x] Canonical URLs set
- [x] All images have alt text
- [x] Semantic HTML structure
- [x] Mobile responsive design

## Post-Deployment Steps

1. **Submit to Google Search Console**
   - Go to https://search.google.com/search-console
   - Add your property (your website URL)
   - Verify ownership
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Submit to Bing Webmaster Tools**
   - Go to https://www.bing.com/webmasters
   - Add your site
   - Submit sitemap

3. **Test Your Site**
   - Check all links work
   - Verify images load correctly
   - Test on mobile devices
   - Use Google's Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

4. **Monitor Performance**
   - Use Google Analytics (optional)
   - Check page speed: https://pagespeed.web.dev/
   - Monitor search rankings

## Important Notes

- All image paths are already relative (`assets/images/...`) ✅
- All CSS/JS paths are relative ✅
- No local file dependencies ✅
- Site is ready for deployment ✅

## Troubleshooting

**Images not loading?**
- Check that all image files are committed to GitHub
- Verify paths are relative (not absolute)
- Clear browser cache

**Links broken?**
- Ensure all anchor links use `#section-id` format
- Check that section IDs match link hrefs

**SEO not working?**
- Wait 24-48 hours for search engines to index
- Submit sitemap to Google Search Console
- Check robots.txt is accessible

