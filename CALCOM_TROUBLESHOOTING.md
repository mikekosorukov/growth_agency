# Cal.com Inline Embed Troubleshooting Guide

## Step-by-Step Troubleshooting Process

### Step 1: Verify Embed Script URL is Accessible
**Action:** Open your browser and navigate to:
```
https://bookings.mkgproductlab.com/embed/embed.js
```

**Expected Result:** You should see JavaScript code (not an error page)

**If it fails:**
- Check if your Cal.com instance is running
- Verify the URL path is correct (might be `/embed.js` instead of `/embed/embed.js`)
- Check North Flank deployment logs

---

### Step 2: Check Browser Console for Errors
**Action:** 
1. Open your website in the browser
2. Open Developer Tools (F12 or Cmd+Option+I)
3. Go to the Console tab
4. Look for errors related to:
   - Script loading failures
   - `Cal is not defined`
   - CORS errors
   - Network errors

**What to look for:**
- ✅ `Cal.com embed script loaded successfully` (if we add logging)
- ❌ `Failed to load Cal.com embed script`
- ❌ `Cal is not defined`
- ❌ CORS policy errors

---

### Step 3: Verify Cal.com Embed Script Format
**Action:** Check what format your self-hosted Cal.com uses:

**Option A:** Standard Cal.com format
- Script: `https://bookings.mkgproductlab.com/embed/embed.js`
- Initialization: `Cal('inline', {...})`

**Option B:** Alternative format
- Script might be at: `https://bookings.mkgproductlab.com/embed.js`
- Or might use different initialization

**How to check:**
1. Visit your Cal.com admin panel
2. Go to Settings > Embedding
3. Copy the embed code provided
4. Compare with our implementation

---

### Step 4: Test Different calLink Formats
The `calLink` format might need to be different. Try these variations:

**Format 1 (Current):**
```javascript
calLink: 'mkosorukov/bookings.mkgproductlab.com'
```

**Format 2:**
```javascript
calLink: 'mkosorukov'
```

**Format 3:**
```javascript
calLink: 'bookings.mkgproductlab.com/mkosorukov'
```

**Format 4:**
```javascript
calLink: 'https://bookings.mkgproductlab.com/mkosorukov'
```

---

### Step 5: Verify Data Attributes
Cal.com might auto-initialize from data attributes. Check if these are correct:

**Current:**
```html
data-cal-link="mkosorukov/bookings.mkgproductlab.com"
data-cal-config='{"layout":"month_view"}'
```

**Try alternatives:**
```html
data-cal-link="mkosorukov"
data-cal-namespace="bookings.mkgproductlab.com"
```

---

### Step 6: Test Manual Initialization
**Action:** Open browser console and manually test:

```javascript
// Check if Cal is available
console.log('Cal function:', window.Cal);

// Try manual initialization
if (window.Cal) {
  window.Cal('inline', {
    elementOrSelector: '.cal-embed-inline',
    calLink: 'mkosorukov/bookings.mkgproductlab.com',
    layout: 'month_view',
  });
}
```

---

### Step 7: Check Network Tab
**Action:**
1. Open Developer Tools > Network tab
2. Reload the page
3. Look for:
   - `embed.js` request (should be 200 OK)
   - Any failed requests
   - CORS errors

---

### Step 8: Verify Cal.com Instance Configuration
**Action:** Check your Cal.com admin panel:
1. Go to Settings > Embedding
2. Ensure inline embedding is enabled
3. Check if there are any domain restrictions
4. Verify the embed code format shown in admin panel

---

## Common Issues and Solutions

### Issue 1: Script Not Loading
**Symptoms:** Console shows script loading error
**Solutions:**
- Check if script URL is correct
- Verify Cal.com instance is accessible
- Check CORS settings on Cal.com instance

### Issue 2: Cal is not defined
**Symptoms:** `window.Cal` is undefined after script loads
**Solutions:**
- Script might use different global variable name
- Check Cal.com documentation for self-hosted instances
- Try waiting longer for script to initialize

### Issue 3: Embed Not Rendering
**Symptoms:** Script loads but nothing appears
**Solutions:**
- Check if element selector is correct
- Verify calLink format
- Check browser console for Cal.com errors
- Try different layout options

### Issue 4: CORS Errors
**Symptoms:** Console shows CORS policy errors
**Solutions:**
- Configure CORS headers on Cal.com instance
- Check North Flank CORS settings
- Ensure embed script allows cross-origin requests

---

## Testing Checklist

- [ ] Embed script URL is accessible
- [ ] Script loads without errors in console
- [ ] `window.Cal` function is available after script loads
- [ ] No CORS errors in console
- [ ] Element selector finds the correct div
- [ ] calLink format is correct
- [ ] Cal.com instance is running and accessible
- [ ] Embed appears in the page (even if unstyled)

---

## Next Steps After Troubleshooting

Once we identify the issue:
1. Update the component with correct format
2. Fix any configuration issues
3. Test the embed functionality
4. Apply styling to match your brand




