#!/bin/bash
# Script to update all URLs in the site to use custom domain
# Usage: ./update-domain-urls.sh rutgersrusca.com

if [ -z "$1" ]; then
    echo "Usage: ./update-domain-urls.sh yourdomain.com"
    exit 1
fi

DOMAIN=$1
OLD_URL="https://jmc917.github.io/rusca"
NEW_URL="https://${DOMAIN}"

echo "Updating URLs from ${OLD_URL} to ${NEW_URL}..."

# Update index.html
if [ -f "index.html" ]; then
    sed -i '' "s|${OLD_URL}|${NEW_URL}|g" index.html
    echo "✓ Updated index.html"
fi

# Update sitemap.xml
if [ -f "sitemap.xml" ]; then
    sed -i '' "s|${OLD_URL}|${NEW_URL}|g" sitemap.xml
    echo "✓ Updated sitemap.xml"
fi

# Update robots.txt
if [ -f "robots.txt" ]; then
    sed -i '' "s|${OLD_URL}|${NEW_URL}|g" robots.txt
    echo "✓ Updated robots.txt"
fi

echo "Done! Review changes and commit to GitHub."

