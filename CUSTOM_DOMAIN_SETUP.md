# Custom Domain Setup Guide - www.rutgersrusca.com

## Step 1: Purchase Domain Name

### Option A: Namecheap (Recommended - ~$10-15/year)
1. Go to https://www.namecheap.com
2. Search for: `rutgersrusca.com`
3. Add to cart and checkout
4. Complete purchase

### Option B: Google Domains (~$12/year)
1. Go to https://domains.google
2. Search for: `rutgersrusca.com`
3. Purchase domain

### Option C: Other Providers
- GoDaddy, Cloudflare, Hover, etc.

**Note:** If `rutgersrusca.com` is taken, try:
- `rusca.rutgers.edu` (if Rutgers provides subdomains)
- `rutgersrusca.org`
- `rusca-rutgers.com`

## Step 2: Deploy to GitHub Pages (Free Hosting)

### Enable GitHub Pages:
1. Go to: https://github.com/jmc917/rusca/settings/pages
2. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**
4. Your site will be live at: `https://jmc917.github.io/rusca/`

## Step 3: Configure Custom Domain in GitHub

1. In GitHub Pages settings, scroll to **Custom domain**
2. Enter: `rutgersrusca.com` (or `www.rutgersrusca.com`)
3. Check **Enforce HTTPS** (GitHub provides free SSL)
4. Click **Save**

## Step 4: Configure DNS Records

### In Your Domain Provider (Namecheap/Google/etc.):

#### For Root Domain (rutgersrusca.com):
Add these DNS records:

**Type A Records:**
```
Type: A
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.111.153
TTL: Automatic
```

**Type CNAME Record (for www):**
```
Type: CNAME
Host: www
Value: jmc917.github.io
TTL: Automatic
```

### Alternative: Use CNAME for Root (Some Providers)
If your provider supports CNAME flattening (Cloudflare, some others):
```
Type: CNAME
Host: @
Value: jmc917.github.io
TTL: Automatic
```

## Step 5: Create CNAME File in Repository

After DNS is configured, GitHub will automatically create a `CNAME` file, OR you can create it manually:

1. Create file: `CNAME` (no extension) in root directory
2. Add one line: `rutgersrusca.com` (or `www.rutgersrusca.com`)

## Step 6: Update Site URLs

After domain is live, update these files with your new domain:

1. **index.html** - Update all meta tag URLs
2. **sitemap.xml** - Update all URLs
3. **robots.txt** - Update sitemap URL

## Step 7: Wait for DNS Propagation

- DNS changes take 24-48 hours to fully propagate
- You can check status at: https://www.whatsmydns.net
- GitHub will show "DNS check in progress" until ready

## Step 8: Verify & Submit to Search Engines

### Google Search Console:
1. Go to: https://search.google.com/search-console
2. Add property: `https://rutgersrusca.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://rutgersrusca.com/sitemap.xml`

### Bing Webmaster Tools:
1. Go to: https://www.bing.com/webmasters
2. Add site: `https://rutgersrusca.com`
3. Submit sitemap

## Troubleshooting

**Domain not working?**
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify CNAME file exists in repo
- Check GitHub Pages settings show "DNS check passed"

**HTTPS not working?**
- Wait for GitHub to provision SSL (can take up to 24 hours)
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings

**Site not appearing in Google?**
- Submit to Google Search Console
- Wait 1-2 weeks for initial indexing
- Share site on social media to help discovery

## Cost Breakdown

- **Domain:** ~$10-15/year
- **Hosting:** FREE (GitHub Pages)
- **SSL Certificate:** FREE (GitHub provides)
- **Total:** ~$10-15/year

## Alternative: Free Subdomain Options

If you want to avoid domain costs:

### Option 1: Netlify (Free Custom Domain)
- Deploy to Netlify (free)
- Get free subdomain: `rusca.netlify.app`
- Can add custom domain later

### Option 2: Vercel (Free Custom Domain)
- Deploy to Vercel (free)
- Get free subdomain: `rusca.vercel.app`
- Can add custom domain later

### Option 3: GitHub Pages Subdomain
- Use: `jmc917.github.io/rusca`
- Free but longer URL

