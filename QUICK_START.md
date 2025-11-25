# Quick Start: Deploy to www.rutgersrusca.com

## 🚀 Fastest Path to Live Site

### Step 1: Enable GitHub Pages (2 minutes)
1. Go to: **https://github.com/jmc917/rusca/settings/pages**
2. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**
4. ✅ Site is now live at: `https://jmc917.github.io/rusca/`

### Step 2: Get Domain Name (5 minutes)
**Recommended: Namecheap**
1. Visit: https://www.namecheap.com
2. Search: `rutgersrusca.com`
3. Add to cart → Checkout (~$10-15/year)
4. Complete purchase

**Alternative domains if taken:**
- `rusca-rutgers.com`
- `rutgersrusca.org`
- `rusca.rutgers.edu` (if Rutgers provides subdomains)

### Step 3: Connect Domain to GitHub (10 minutes)

#### A. In GitHub:
1. Go back to: **https://github.com/jmc917/rusca/settings/pages**
2. Under **Custom domain**, enter: `rutgersrusca.com`
3. Check ✅ **Enforce HTTPS**
4. Click **Save**

#### B. In Namecheap (or your domain provider):
1. Go to **Domain List** → **Manage** → **Advanced DNS**
2. Add these records:

**For www (CNAME):**
```
Type: CNAME
Host: www
Value: jmc917.github.io
TTL: Automatic
```

**For root domain (A Records - add all 4):**
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

### Step 4: Wait & Verify (24-48 hours)
- DNS propagation takes time
- Check status: https://www.whatsmydns.net
- GitHub will show "DNS check passed" when ready
- Site will be live at: `https://rutgersrusca.com` and `https://www.rutgersrusca.com`

### Step 5: Update URLs in Code (After domain is live)
Run this command in terminal:
```bash
./update-domain-urls.sh rutgersrusca.com
```

Or manually update:
- `index.html` - Replace `jmc917.github.io/rusca` with `rutgersrusca.com`
- `sitemap.xml` - Update all URLs
- `robots.txt` - Update sitemap URL

Then commit and push:
```bash
git add .
git commit -m "Update URLs to custom domain"
git push origin main
```

### Step 6: Submit to Google (Make it searchable)
1. Go to: **https://search.google.com/search-console**
2. Add property: `https://rutgersrusca.com`
3. Verify ownership (DNS method is easiest)
4. Submit sitemap: `https://rutgersrusca.com/sitemap.xml`
5. Wait 1-2 weeks for Google to index

## 💰 Cost Breakdown
- **Domain:** $10-15/year
- **Hosting:** FREE (GitHub Pages)
- **SSL:** FREE (GitHub provides)
- **Total:** ~$12/year

## ⚡ Alternative: Free Subdomain (No Cost)
If you want to skip domain purchase:
- Use: `https://jmc917.github.io/rusca` (already works!)
- Or deploy to Netlify: `rusca.netlify.app` (free)

## ✅ Checklist
- [ ] GitHub Pages enabled
- [ ] Domain purchased
- [ ] DNS records configured
- [ ] Custom domain added in GitHub
- [ ] URLs updated in code
- [ ] Submitted to Google Search Console
- [ ] Site accessible at www.rutgersrusca.com

## 🆘 Need Help?
- DNS issues? Check: https://www.whatsmydns.net
- GitHub Pages docs: https://docs.github.com/en/pages
- Domain help? Contact your domain provider support

