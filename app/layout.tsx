import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { PHProvider } from "@/providers/posthog-provider";
import { PostHogPageView } from "@/providers/posthog-pageview";
import { Suspense } from "react";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Growth Agency - Product Growth & Innovation",
  description: "Transform your product with strategic growth and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
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
