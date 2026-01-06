import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { PHProvider } from "@/providers/posthog-provider";
import { PostHogPageView } from "@/providers/posthog-pageview";
import { Suspense } from "react";
import { JsonLd } from "@/components/JsonLd";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mkgproductlab.com';

export const metadata: Metadata = {
  title: {
    default: "Go-to-market and product growth for Tech startups and SMBs | MKG Product Lab",
    template: "%s | MKG Product Lab",
  },
  description: "We partner with traction and early-growth tech startups and SMEs to build a complete GTM system grounded in deep customer insight",
  keywords: ["GTM strategy", "product growth", "tech startup consulting", "go-to-market", "customer insight", "startup growth", "product-led growth", "B2B SaaS growth"],
  authors: [{ name: "MKG Product Lab" }],
  creator: "MKG Product Lab",
  publisher: "MKG Product Lab",
  
  // Open Graph
  openGraph: {
    title: "Go-to-market and product growth for Tech startups and SMBs",
    description: "We partner with traction and early-growth tech startups and SMEs to build a complete GTM system grounded in deep customer insight",
    url: baseUrl,
    siteName: "MKG Product Lab",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "MKG Product Lab - GTM and Product Growth Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Go-to-market and product growth for Tech startups and SMBs",
    description: "We partner with traction and early-growth tech startups and SMEs to build a complete GTM system grounded in deep customer insight",
    images: [`${baseUrl}/og-image.png`],
    creator: "@mkosorukov",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Manifest
  manifest: "/manifest.json",
  
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <JsonLd />
        <PHProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}
