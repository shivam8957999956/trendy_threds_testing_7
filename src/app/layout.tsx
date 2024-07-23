import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import SaleLive from "@/components/SaleLive";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trendy Threds",
  description: "A complete e-commerce Store",
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
          <SaleLive/>
          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
