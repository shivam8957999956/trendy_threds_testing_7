import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import SaleLive from "@/components/SaleLive";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.trendythreds.in`),
  title: "Trendy Threds",
  description:
    "Embrace your inner voice with our exclusive t-shirt collection. Discover unique, high-quality designs and elevate your wardrobe #kapdokobolnedo theme.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: 'Trendy Threds',
    description: 'Embrace your inner voice with our exclusive t-shirt collection #kapdokobolnedo',
    url: 'https://www.trendythreds.in',
    siteName: 'Trendy Threds',
    images: [
      {
        url: 'https://www.trendythreds.in/_next/image?url=%2Flogo.png&w=256&q=75', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.trendythreds.in/_next/image?url=%2Flogo.png&w=256&q=75', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'trendy threds',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          {/* <SaleLive/> */}
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
