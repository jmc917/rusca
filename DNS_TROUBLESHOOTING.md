# DNS Troubleshooting Guide

## Error: "Domain does not resolve to the GitHub Pages server"

This means your DNS records aren't pointing to GitHub yet. Follow these steps:

## Step 1: Identify Your Domain Provider

Where did you buy the domain? Common providers:
- Namecheap
- Google Domains
- GoDaddy
- Cloudflare
- Hover
- Others

## Step 2: Access DNS Settings

Log into your domain provider and find:
- "DNS Management"
- "Advanced DNS"
- "DNS Records"
- "Name Servers"

## Step 3: Delete Existing A/CNAME Records

**IMPORTANT:** Delete any existing A or CNAME records for:
- `@` (root domain)
- `www`

## Step 4: Add Correct DNS Records

### For Root Domain (rutgersrusca.com):

Add **4 A Records** (all are required):

```
Record 1:
Type: A
Host: @
Value: 185.199.108.153
TTL: Automatic (or 3600)

Record 2:
Type: A
Host: @
Value: 185.199.109.153
TTL: Automatic (or 3600)

Record 3:
Type: A
Host: @
Value: 185.199.110.153
TTL: Automatic (or 3600)

Record 4:
Type: A
Host: @
Value: 185.199.111.153
TTL: Automatic (or 3600)
```

### For www (www.rutgersrusca.com):

Add **1 CNAME Record**:

```
Type: CNAME
Host: www
Value: jmc917.github.io
TTL: Automatic (or 3600)
```

**Note:** Some providers use different notation:
- `@` might be shown as `rutgersrusca.com` or blank
- `www` might need to be entered as `www.rutgersrusca.com` or just `www`

## Step 5: Provider-Specific Instructions

### Namecheap:
1. Go to Domain List → Manage → Advanced DNS
2. Delete old A/CNAME records
3. Add new records as shown above
4. Save changes

### Google Domains:
1. Go to DNS → Custom records
2. Delete old records
3. Add new records
4. Save

### GoDaddy:
1. Go to DNS Management
2. Delete old records
3. Add new records
4. Save

### Cloudflare:
1. Go to DNS → Records
2. Delete old records
3. Add new records
4. **IMPORTANT:** Make sure proxy is OFF (gray cloud, not orange)
5. Save

## Step 6: Wait for DNS Propagation

- Changes take **15 minutes to 48 hours** to propagate
- Usually works within 1-2 hours
- Check status: https://www.whatsmydns.net/#A/rutgersrusca.com

## Step 7: Verify DNS is Working

After 15-30 minutes, check:

```bash
# Should show GitHub IPs
dig rutgersrusca.com +short

# Should show jmc917.github.io
dig www.rutgersrusca.com +short
```

Or use online tools:
- https://www.whatsmydns.net/#A/rutgersrusca.com
- https://dnschecker.org/#A/rutgersrusca.com

## Step 8: Re-check in GitHub

1. Go to: https://github.com/jmc917/rusca/settings/pages
2. Scroll to Custom domain
3. Click "Save" again (even if domain is already there)
4. Wait a few minutes
5. Check if error is gone

## Common Mistakes

❌ **Wrong IP addresses** - Must use GitHub's exact IPs
❌ **Only 1-3 A records** - Need all 4 A records
❌ **Wrong CNAME value** - Must be `jmc917.github.io` (not `github.io`)
❌ **Cloudflare proxy ON** - Must be gray cloud (DNS only)
❌ **TTL too high** - Use Automatic or 3600
❌ **Old records not deleted** - Delete conflicting records first

## Still Not Working?

1. **Double-check all 4 A records are added**
2. **Verify CNAME points to `jmc917.github.io`**
3. **Wait at least 1 hour** for DNS propagation
4. **Check DNS with online tools** (whatsmydns.net)
5. **Contact your domain provider support** if issues persist

## Alternative: Use CNAME for Root (Some Providers)

If your provider supports CNAME flattening (Cloudflare, some others):

```
Type: CNAME
Host: @
Value: jmc917.github.io
TTL: Automatic
```

Then you only need:
- 1 CNAME for `@` → `jmc917.github.io`
- 1 CNAME for `www` → `jmc917.github.io`

