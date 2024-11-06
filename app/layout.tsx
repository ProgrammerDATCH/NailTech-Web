import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nail Tech Ltd - Software Development & Tech Solutions",
  description: "Leading software development company specializing in custom solutions, cloud hosting, and tech consulting. Join our team of innovators shaping the future of technology.",
  keywords: ["software development", "tech consulting", "cloud hosting", "web development", "internship", "technology solutions"],
  authors: [{ name: "Nail Tech Ltd" }],
  openGraph: {
    title: "Nail Tech Ltd - Software Development & Tech Solutions",
    description: "Leading software development company specializing in custom solutions, cloud hosting, and tech consulting.",
    images: [{ url: "/logo.webp", width: 1200, height: 630, alt: "Nail Tech Ltd Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Tech Ltd - Software Development & Tech Solutions",
    description: "Leading software development company specializing in custom solutions, cloud hosting, and tech consulting.",
    images: ["/logo.webp"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}