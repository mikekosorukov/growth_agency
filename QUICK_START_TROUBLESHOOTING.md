# Quick Start: Cal.com Troubleshooting

## Immediate Actions

### 1. Open Your Website
Navigate to your booking section page where the Cal.com embed should appear.

### 2. Open Browser Console
- **Chrome/Edge:** Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
- **Firefox:** Press `F12` or `Cmd+Option+K` (Mac) / `Ctrl+Shift+K` (Windows)
- **Safari:** Enable Developer Menu first, then `Cmd+Option+C`

### 3. Look for Cal.com Logs
You should see logs prefixed with `[Cal.com]` that show:
- ✅ Script loading attempts
- ✅ Which script URL worked
- ✅ Which calLink format worked
- ❌ Any errors

### 4. Check These Common Issues

#### Issue: Script Not Loading
**Look for:** `[Cal.com] Script failed to load from: ...`
**Action:** 
1. Manually visit: `https://bookings.mkgproductlab.com/embed/embed.js`
2. If that fails, try: `https://bookings.mkgproductlab.com/embed.js`
3. Check if your Cal.com instance is running

#### Issue: Cal is not defined
**Look for:** `[Cal.com] window.Cal not available`
**Action:**
1. Check if script loaded successfully
2. Wait a few seconds - script might need time to initialize
3. Check Cal.com documentation for self-hosted embed format

#### Issue: Embed Not Rendering
**Look for:** `[Cal.com] ⚠️ Embed did not render with format: ...`
**Action:**
1. Check which formats were tried
2. Verify your Cal.com username is correct: `mkosorukov`
3. Check Cal.com admin panel for embed settings

### 5. Manual Test in Console
Copy and paste this into your browser console:

```javascript
// Check if Cal is available
console.log('Cal function:', window.Cal);

// Check if element exists
const embedDiv = document.querySelector('.cal-embed-inline');
console.log('Embed div:', embedDiv);

// Try manual initialization
if (window.Cal && embedDiv) {
  window.Cal('inline', {
    elementOrSelector: embedDiv,
    calLink: 'mkosorukov',
    layout: 'month_view',
  });
}
```

### 6. Check Network Tab
1. Open Developer Tools > Network tab
2. Reload the page
3. Look for `embed.js` request
4. Check if it returns 200 OK or an error

### 7. Verify Cal.com Admin Panel
1. Log into your Cal.com admin at `bookings.mkgproductlab.com`
2. Go to Settings > Embedding (or similar)
3. Copy the embed code shown there
4. Compare with our implementation

## What the Code Does Automatically

The updated component will:
1. ✅ Try multiple script URLs automatically
2. ✅ Try multiple calLink formats automatically  
3. ✅ Log everything to console for debugging
4. ✅ Fall back to iframe if all else fails
5. ✅ Detect if embed rendered successfully

## Next Steps

After checking the console:
1. Share the console logs with me
2. Tell me which step failed
3. I'll help fix the specific issue

## Expected Console Output (Success)

```
[Cal.com] Attempting to load script from: https://bookings.mkgproductlab.com/embed/embed.js
[Cal.com] Script loaded successfully from: https://bookings.mkgproductlab.com/embed/embed.js
[Cal.com] window.Cal available: function
[Cal.com] Initializing embed...
[Cal.com] Trying calLink format: mkosorukov/bookings.mkgproductlab.com
[Cal.com] Embed initialization called with format: mkosorukov/bookings.mkgproductlab.com
[Cal.com] ✅ Embed rendered successfully with format: mkosorukov/bookings.mkgproductlab.com
```



