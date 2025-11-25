# Namecheap DNS Setup for GitHub Pages

## Your Current Issue
Your domain is pointing to Namecheap's parking page, not GitHub. Here's how to fix it:

## Step-by-Step Instructions for Namecheap

### Step 1: Log into Namecheap
1. Go to: https://www.namecheap.com
2. Log in to your account
3. Click **Domain List** (top menu)

### Step 2: Access DNS Settings
1. Find `rutgersrusca.com` in your domain list
2. Click **Manage** button next to it
3. Click **Advanced DNS** tab

### Step 3: Remove Parking Page Records
1. Look for any existing records (especially A records pointing to parking pages)
2. Delete ALL existing A records and CNAME records for:
   - `@` (root domain)
   - `www`
3. Click the trash icon (🗑️) next to each record to delete

### Step 4: Add GitHub A Records (Root Domain)
Add **4 A Records** (click "Add New Record" for each):

**Record 1:**
- Type: **A Record**
- Host: **@**
- Value: **185.199.108.153**
- TTL: **Automatic** (or 3600)
- Click **Save** (green checkmark)

**Record 2:**
- Type: **A Record**
- Host: **@**
- Value: **185.199.109.153**
- TTL: **Automatic**
- Click **Save**

**Record 3:**
- Type: **A Record**
- Host: **@**
- Value: **185.199.110.153**
- TTL: **Automatic**
- Click **Save**

**Record 4:**
- Type: **A Record**
- Host: **@**
- Value: **185.199.111.153**
- TTL: **Automatic**
- Click **Save**

### Step 5: Add CNAME Record (www)
Add **1 CNAME Record**:

- Type: **CNAME Record**
- Host: **www**
- Value: **jmc917.github.io**
- TTL: **Automatic**
- Click **Save**

### Step 6: Verify Your Records
You should now have:
- ✅ 4 A Records for `@` pointing to GitHub IPs
- ✅ 1 CNAME Record for `www` pointing to `jmc917.github.io`
- ❌ NO parking page records
- ❌ NO other conflicting records

### Step 7: Wait for DNS Propagation
- **Wait 15-60 minutes** for DNS to update
- Namecheap usually propagates within 30 minutes
- Check status: https://www.whatsmydns.net/#A/rutgersrusca.com

### Step 8: Verify in GitHub
1. Go to: https://github.com/jmc917/rusca/settings/pages
2. Under "Custom domain", make sure `rutgersrusca.com` is entered
3. Check ✅ **Enforce HTTPS**
4. Click **Save** (even if already saved)
5. Wait 5-10 minutes
6. The error should disappear and show "DNS check passed"

## Visual Guide

Your Namecheap DNS should look like this:

```
Type    Host    Value                    TTL
A       @       185.199.108.153         Automatic
A       @       185.199.109.153         Automatic
A       @       185.199.110.153         Automatic
A       @       185.199.111.153         Automatic
CNAME   www     jmc917.github.io        Automatic
```

## Troubleshooting

**Still showing parking page?**
- Make sure you deleted ALL old records
- Wait longer (up to 1 hour)
- Clear your browser cache

**GitHub still shows error?**
- Wait at least 30 minutes after adding DNS records
- Click "Save" again in GitHub Pages settings
- Check DNS propagation: https://www.whatsmydns.net

**Need help?**
- Namecheap Support: https://www.namecheap.com/support/
- Live Chat available 24/7

## Quick Checklist
- [ ] Logged into Namecheap
- [ ] Went to Advanced DNS
- [ ] Deleted all old A/CNAME records
- [ ] Added 4 A records for `@` with GitHub IPs
- [ ] Added 1 CNAME for `www` → `jmc917.github.io`
- [ ] Saved all changes
- [ ] Waited 30-60 minutes
- [ ] Re-checked GitHub Pages settings

