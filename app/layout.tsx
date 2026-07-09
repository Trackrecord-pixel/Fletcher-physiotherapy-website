import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  LocalBusinessSchema,
  WebSiteSchema,
  OrganizationSchema,
} from "@/components/StructuredData";
import { site } from "@/lib/site";
import Script from "next/script";
import ConversionTracking from "@/components/ConversionTracking";

export const viewport: Viewport = {
  themeColor: "#13243d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Home Visit Physiotherapy Newcastle | Fletcher Physiotherapy",
    template: "%s | Fletcher Physiotherapy",
  },
  description: site.description,
  keywords: [
    "home visit physiotherapy Newcastle",
    "mobile physiotherapy Newcastle",
    "NDIS physiotherapy Newcastle",
    "home care package physiotherapy Newcastle",
    "support at home physiotherapy Newcastle",
    "physiotherapist Newcastle",
    "mobile physio Lake Macquarie",
    "mobile physio Central Coast",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: "Home Visit Physiotherapy Newcastle | Fletcher Physiotherapy",
    description: site.description,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Fletcher Physiotherapy home visit physiotherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Visit Physiotherapy Newcastle | Fletcher Physiotherapy",
    description: site.description,
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ConversionTracking />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EPKMS5KX40"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EPKMS5KX40');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1049946123735988');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1049946123735988&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
