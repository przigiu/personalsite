import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import Footer from "@/app/components/Footer";
import "./globals.css";

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
  title: "Giulia — Product & UX Designer",
  description: "Portfolio of Giulia, Product & UX Designer",
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
      </body>
    </html>
  );
}
