import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileCallBar } from "@/components/HomeConversion";
import {
  LocalBusinessSchema,
  WebSiteSchema,
  OrganizationSchema,
} from "@/components/StructuredData";
import { site } from "@/lib/site";
import Script from "next/script";
import ConversionTracking from "@/components/ConversionTracking";

export const viewport: Viewport = {
  themeColor: "#0f1714",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Clinic & Home Visit Physio Sydney & Newcastle | Fletcher Physiotherapy",
    template: "%s | Fletcher Physiotherapy",
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: "Clinic & Home Visit Physio Sydney & Newcastle | Fletcher Physiotherapy",
    description: site.description,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Fletcher Physiotherapy — clinic and home visit physiotherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic & Home Visit Physio Sydney & Newcastle | Fletcher Physiotherapy",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syncopate:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pb-20 md:pb-0">
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
        <a
          href="/locations"
          className="block bg-euc-700 px-4 py-2 text-center text-sm text-white hover:bg-euc-800"
        >
          Clinics in Jesmond, Yagoona &amp; Parramatta · Home visits across Newcastle, the Central Coast &amp; Sydney.{" "}
          <span className="font-semibold underline underline-offset-2">Find your location →</span>
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
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
