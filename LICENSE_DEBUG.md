# Cal.com License Debug Guide

## The Problem

The Cal.com embed is showing branding despite having a commercial self-hosted license with these env vars set in NorthFlank:
- `CALCOM_LICENSE_KEY`
- `CAL_SIGNATURE_TOKEN`
- `CALCOM_PRIVATE_API_ROUTE`

## Root Cause Analysis

### Why the license isn't being recognized:

1. **License verification happens on the backend** - The Cal.com instance needs to verify the license when it serves pages/embeds
2. **The embed script should be served with license status** - If branding shows, the backend isn't recognizing the license
3. **Possible causes:**
   - NorthFlank env vars not properly loaded
   - Cal.com instance needs restart after env var changes
   - License key format or value incorrect
   - License verification API endpoint not reachable
   - License expired or not activated

## Debugging Steps

### Step 1: Verify NorthFlank Environment Variables

Check in NorthFlank dashboard:
1. Go to your Cal.com service
2. Check Environment Variables section
3. Verify these are set:
   ```
   CALCOM_LICENSE_KEY=<your-key>
   CAL_SIGNATURE_TOKEN=<your-token>
   CALCOM_PRIVATE_API_ROUTE=<your-route>
   ```
4. **Important:** Did you restart the service after adding these vars?

### Step 2: Check Cal.com Backend Logs

In NorthFlank:
1. Go to Logs section
2. Look for license-related messages:
   - "License verified"
   - "License invalid"
   - "Failed to verify license"
   - Any errors about license API calls

### Step 3: Verify License with Cal.com Admin API

Test if your instance recognizes the license:

1. Open browser console on your booking page
2. Run this to check license status:
```javascript
fetch('https://bookings.mkgproductlab.com/api/license')
  .then(r => r.json())
  .then(data => console.log('License status:', data))
  .catch(e => console.error('License check failed:', e));
```

Or check the admin panel:
- Go to `https://bookings.mkgproductlab.com/settings/admin/license`
- Check if license is showing as active

### Step 4: Check Required Environment Variables

Cal.com self-hosted requires these vars for licensing:

```bash
# Core license vars (you have these)
CALCOM_LICENSE_KEY=
CAL_SIGNATURE_TOKEN=
CALCOM_PRIVATE_API_ROUTE=

# Additional vars that might be needed
NEXT_PUBLIC_LICENSE_CONSENT=true
NEXT_PUBLIC_DISABLE_SIGNUP=false
CALCOM_TELEMETRY_DISABLED=false  # Some licenses require telemetry enabled
```

### Step 5: Restart Cal.com Instance

Environment variables require a restart:
1. In NorthFlank, restart the Cal.com service
2. Wait for it to fully restart
3. Check logs for license verification messages
4. Test the embed again

## Expected Behavior with Valid License

Once license is properly recognized:
- ✅ No "Cal.com" branding anywhere
- ✅ No "Powered by Cal.com"
- ✅ Custom CSS can be applied
- ✅ Full white-label experience

## Common Issues

### Issue 1: Env vars not loaded
**Symptom:** Vars show in dashboard but not working
**Solution:** Restart the service

### Issue 2: License key format wrong
**Symptom:** License fails validation
**Solution:** Check license key format with Cal.com support, ensure no extra spaces/newlines

### Issue 3: License verification endpoint unreachable
**Symptom:** Logs show connection errors
**Solution:** Check if `CALCOM_PRIVATE_API_ROUTE` is correct and accessible

### Issue 4: License not activated
**Symptom:** Key is set but not validated
**Solution:** Contact Cal.com to activate your license key

## Next Steps

1. **Check NorthFlank logs** - Look for license errors
2. **Restart the service** - If you just added the vars
3. **Test license API endpoint** - Verify license is recognized
4. **Check admin panel** - Go to license settings page
5. **Contact Cal.com support** - If license still not recognized

## After License is Recognized

Once the license works, we can:
1. Apply custom CSS via Cal.com's theming system
2. Use the embed without any branding
3. Style it to match your design system perfectly




