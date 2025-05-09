import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import heroBg from "./../../public/images/hero-bg.png";
import Navbar from "./features/Hero/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Service Agency",
  description: "Digital Service Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div 
          className="px-[10px] sm:px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] min-h-screen py-8 relative"
          style={{
            backgroundImage: `url(${heroBg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
