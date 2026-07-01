import type { Metadata } from "next";

import { siteConfig } from "@/features/landing/constants/site";
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
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
