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
    "Explore our luxury clothing brand's exclusive collection of premium t-shirts. Experience unique, high-quality designs crafted for elegance and comfort. Elevate your style with our timeless, sophisticated pieces.",
  alternates: {
    canonical: "./",
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
