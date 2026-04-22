import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "@/app/components/Footer";
import { SITE_URL } from "@/app/lib/site";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-X9R58XZD3Q";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Giulia Peruzzi — Product & UX Designer",
    template: "%s — Giulia Peruzzi",
  },
  description:
    "Portfolio of Giulia Peruzzi, Product & UX Designer. Case studies from Missivio, DoorDash, and Brazily.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Giulia Peruzzi",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @container (min-width: 1280px) {
            .fluid-page {
              width: 1280px;
              zoom: calc(100cqw / 1280px);
            }
          }
          @container (min-width: 1440px) {
            .fluid-page {
              zoom: 1.125;
            }
          }
        ` }} />
      </head>
      <body className={`${inter.variable} ${dmMono.variable} antialiased`} suppressHydrationWarning>
        <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col" style={{ containerType: 'inline-size' }}>
          {children}
          <Footer />
        </div>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
