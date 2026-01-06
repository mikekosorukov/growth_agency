# Cal.com License & Styling Configuration Guide

## Issue Summary

✅ **Good News:** The embed is working! It auto-initialized from data attributes.

⚠️ **Issues:**
1. Cal.com branding is showing (license configuration needed)
2. Custom styling not applied (iframe limitation)

## Why Custom Styling Isn't Working

The Cal.com embed renders in an **iframe**, which means:
- ❌ We **cannot** directly style the iframe content with CSS (cross-origin security)
- ❌ Our CSS targeting `.cal-embed` only styles the container, not the iframe content
- ✅ Cal.com needs to be configured **on the Cal.com side** for custom styling

## Solution 1: Configure License in Cal.com Admin

### Steps to Remove Branding:

1. **Log into your Cal.com admin panel:**
   - Go to `https://bookings.mkgproductlab.com`
   - Log in as admin

2. **Navigate to License/Branding Settings:**
   - Go to **Settings** → **License** (or **Branding**)
   - Look for options like:
     - "Hide Cal.com branding"
     - "Remove powered by Cal.com"
     - "White label mode"
     - "Commercial license settings"

3. **Enable White Label/Branding Removal:**
   - If you have a commercial license, enable white-label mode
   - This should remove the "Cal.com" branding automatically

4. **Save Settings:**
   - Save your changes
   - The embed should update automatically (may need to clear cache)

### Alternative: Check Environment Variables

If you're self-hosting on North Flank, check your environment variables:

```bash
# In North Flank dashboard, check for:
CALCOM_LICENSE_KEY=your-license-key
NEXT_PUBLIC_HIDE_BRANDING=true
# or similar variables
```

## Solution 2: Apply Custom Styling via Cal.com Configuration

### Option A: Use Cal.com's Theme API

Cal.com supports theming via configuration. Update the embed to include theme settings:

```javascript
// In BookingSection.tsx, you can add theme config to data-cal-config
data-cal-config='{
  "layout": "month_view",
  "theme": "dark",
  "brandColor": "#8c99eb",
  "lightColor": "#dcdff2",
  "darkColor": "#171c39"
}'
```

### Option B: Configure in Cal.com Admin Panel

1. Go to **Settings** → **Appearance** (or **Branding**)
2. Set your brand colors:
   - Primary color: `#8c99eb`
   - Background: `#171c39`
   - Text: `#dcdff2`
   - Accent: `#ff885d`
3. Save and the embed will use these colors

### Option C: Custom CSS in Cal.com Admin

If your Cal.com instance supports custom CSS:
1. Go to **Settings** → **Custom CSS**
2. Add your custom styles there
3. These will apply to all embeds

## Solution 3: Use Cal.com's Embed API with Styling

We can try using Cal.com's embed API with explicit styling options. Let me update the component to include theme configuration.

## Quick Fix: Hide Branding with CSS (Temporary)

I've added CSS to hide branding, but since the embed is in an iframe, this may not work. However, if the branding is in the parent page (not in the iframe), it should work.

## Next Steps

1. **Check Cal.com Admin Panel:**
   - Log into `https://bookings.mkgproductlab.com`
   - Look for License/Branding settings
   - Enable white-label mode if available

2. **Verify License Key:**
   - Ensure your commercial license key is properly configured
   - Check North Flank environment variables

3. **Test Embed:**
   - Clear browser cache
   - Reload the page
   - Check if branding is removed

4. **Apply Custom Colors:**
   - Use Cal.com's admin panel to set brand colors
   - Or use the theme configuration in the embed

## Expected Result After Configuration

- ✅ No "Cal.com" branding visible
- ✅ Custom colors matching your design system
- ✅ Styled buttons, calendar cells, and inputs
- ✅ Consistent with your website's dark theme

## If Branding Still Shows

If branding still appears after configuring the license:
1. Check if your license is properly activated
2. Verify the license key in environment variables
3. Contact Cal.com support for commercial license issues
4. Check Cal.com documentation for self-hosted branding removal




