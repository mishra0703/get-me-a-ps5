"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import { usePathname } from "next/navigation";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isUsernamePage = /^\/[^/]+$/.test(pathname) && !["/", "/about", "/dashboard" ,"/login"].includes(pathname);
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="png" href="/favicon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <SessionWrapper>
          {isUsernamePage ? (
            <div className="bg-black"></div>
          ) : (
            <>
              <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
              <div className="fixed left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] pointer-events-none"></div>
            </>
          )}
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
