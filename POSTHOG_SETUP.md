# PostHog Analytics Setup

PostHog has been successfully installed and configured for this Next.js application.

## What's Been Set Up

1. **Package Installation**: `posthog-js` has been added to your dependencies
2. **Provider Components**: 
   - `providers/posthog-provider.tsx` - Initializes PostHog client
   - `providers/posthog-pageview.tsx` - Handles automatic pageview tracking
3. **Integration**: PostHog is integrated into your app's root layout

## Configuration Required

To complete the setup, you need to add your PostHog API credentials:

### 1. Get Your PostHog API Key

1. Go to [PostHog](https://app.posthog.com/)
2. Sign up or log in to your account
3. Navigate to Project Settings
4. Copy your **Project API Key**

### 2. Create Environment File

Create a `.env.local` file in the root of your project with the following content:

```env
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=phc_YOUR_ACTUAL_KEY_HERE
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

**Note**: If you're self-hosting PostHog, replace `https://app.posthog.com` with your PostHog instance URL.

### 3. Restart Your Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## Features Enabled

- ✅ Automatic pageview tracking
- ✅ Page leave tracking
- ✅ User session tracking
- ✅ Custom event tracking (via PostHog hooks)

## Using PostHog in Your Components

You can track custom events in any client component:

```tsx
'use client'

import { usePostHog } from 'posthog-js/react'

export function MyComponent() {
  const posthog = usePostHog()

  const handleClick = () => {
    posthog?.capture('button_clicked', {
      button_name: 'My Button',
      page: 'home'
    })
  }

  return <button onClick={handleClick}>Track Me</button>
}
```

## Privacy Settings

The current configuration uses `person_profiles: 'identified_only'` which means:
- Anonymous users are tracked as sessions only
- User profiles are only created when you explicitly identify users

To change this, edit `providers/posthog-provider.tsx` and modify the `person_profiles` option.

## Verifying Installation

1. Start your dev server: `npm run dev`
2. Open your site in a browser
3. Go to PostHog dashboard → Live Events
4. You should see pageview events appearing in real-time

## Documentation

- [PostHog React Documentation](https://posthog.com/docs/libraries/react)
- [PostHog Next.js Integration](https://posthog.com/docs/libraries/next-js)


