# How to Get Your Site on Google Search

Your site is live at rutgersrusca.com! Now let's get it indexed by Google.

## Step 1: Update URLs to Custom Domain (IMPORTANT)

Before submitting to Google, update all URLs to use your custom domain.

### Option A: Use the Script (Easiest)
```bash
./update-domain-urls.sh rutgersrusca.com
git add .
git commit -m "Update URLs to custom domain"
git push origin main
```

### Option B: Manual Update
Update these files:
- `index.html` - Replace `jmc917.github.io/rusca` with `rutgersrusca.com`
- `sitemap.xml` - Update all URLs to `rutgersrusca.com`
- `robots.txt` - Update sitemap URL

## Step 2: Submit to Google Search Console

### A. Add Your Site
1. Go to: **https://search.google.com/search-console**
2. Click **Add property**
3. Choose **URL prefix**
4. Enter: `https://rutgersrusca.com`
5. Click **Continue**

### B. Verify Ownership
Choose the **HTML tag** method (easiest):

1. Google will show you a meta tag like:
   ```html
   <meta name="google-site-verification" content="ABC123xyz..." />
   ```
2. Copy this tag
3. Add it to the `<head>` section of your `index.html` (between `<head>` and `</head>`)
4. Commit and push to GitHub:
   ```bash
   git add index.html
   git commit -m "Add Google Search Console verification"
   git push origin main
   ```
5. Wait 1-2 minutes for GitHub Pages to update
6. Go back to Google Search Console
7. Click **Verify**

**Alternative verification methods:**
- DNS method (add TXT record in Namecheap)
- HTML file upload (upload file to GitHub)

### C. Submit Sitemap
1. In Google Search Console, click **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Google will start crawling your site

## Step 3: Request Indexing (Optional but Recommended)

1. In Google Search Console, click **URL Inspection** (top search bar)
2. Enter: `https://rutgersrusca.com`
3. Click **Enter**
4. Click **Request Indexing**
5. Repeat for key pages:
   - `https://rutgersrusca.com`
   - `https://rutgersrusca.com/#what-we-do`
   - `https://rutgersrusca.com/#events`
   - `https://rutgersrusca.com/#team`

## Step 4: Speed Up Indexing

### A. Submit to Bing (Optional but Helpful)
1. Go to: **https://www.bing.com/webmasters**
2. Add site: `https://rutgersrusca.com`
3. Verify ownership (similar to Google)
4. Submit sitemap

### B. Get Backlinks
Share your site to help Google find it:
- Share on social media (Instagram, LinkedIn)
- Link from Rutgers Business School website (if possible)
- Share in relevant communities
- Add to your Linktree

### C. Update Social Media
- Update Instagram bio with website link
- Post about the new website
- Share on LinkedIn

## Step 5: Monitor Progress

### In Google Search Console:
1. Check **Coverage** report (see which pages are indexed)
2. Check **Performance** (see search queries after indexing)
3. Check for errors in **Pages** report

### How Long Does It Take?
- **Initial indexing:** 1-7 days
- **Appearing in search results:** 1-2 weeks
- **Full site indexed:** 2-4 weeks

**Pro tip:** Your site will appear faster if:
- You have good SEO (already done ✅)
- You get backlinks
- You share on social media
- You update content regularly

## Step 6: Optimize for Search

### Already Done ✅:
- Meta tags (title, description)
- Open Graph tags (social sharing)
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Mobile responsive
- Fast loading

### Additional Tips:
1. **Keep content fresh** - Update news section regularly
2. **Add more content** - Blog posts, event updates
3. **Use keywords naturally** - "Rutgers supply chain", "RUSCA", etc.
4. **Get social shares** - More shares = faster indexing

## Troubleshooting

**Site not appearing after 2 weeks?**
- Check Google Search Console for errors
- Make sure sitemap is submitted
- Request indexing for main pages
- Share site on social media
- Check if site is mobile-friendly: https://search.google.com/test/mobile-friendly

**Verification failed?**
- Wait 2-5 minutes after pushing to GitHub
- Make sure verification tag is in `<head>` section
- Try DNS verification method instead

**Sitemap errors?**
- Make sure `sitemap.xml` is accessible: `https://rutgersrusca.com/sitemap.xml`
- Check for XML errors
- Update sitemap with correct domain

## Quick Checklist

- [ ] URLs updated to rutgersrusca.com
- [ ] Site verified in Google Search Console
- [ ] Sitemap submitted
- [ ] Main pages requested for indexing
- [ ] Site shared on social media
- [ ] Monitoring Google Search Console for errors

## Resources

- **Google Search Console:** https://search.google.com/search-console
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Bing Webmaster Tools:** https://www.bing.com/webmasters

