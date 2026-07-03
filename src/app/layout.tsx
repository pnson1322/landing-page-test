import type { Metadata } from "next";

import { ThemeProvider } from "@/features/landing/components/theme/theme-provider";
import { siteConfig } from "@/features/landing/constants/site";
import "./theme.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.openGraphDescription,
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: siteConfig.heroImage.src,
        width: siteConfig.heroImage.width,
        height: siteConfig.heroImage.height,
        alt: siteConfig.heroImage.alt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
