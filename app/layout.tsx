import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";
import { Analytics } from '@vercel/analytics/react'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://coachakshay.com'),
  title: {
    default: "Coach Akshay - Certified Personal Fitness Trainer in Kerala",
    template: "%s | Coach Akshay"
  },
  description: "Transform your body with Coach Akshay, a certified personal trainer with 7+ years of experience. Specializing in competition prep, weight loss, and muscle gain in Kerala.",
  keywords: [
    "personal trainer",
    "fitness coach",
    "bodybuilding coach",
    "competition preparation",
    "weight loss trainer",
    "muscle gain expert",
    "fitness trainer Kerala",
    "Coach Akshay",
    "certified trainer",
    "personal training",
    "body transformation"
  ],
  authors: [{ name: "Coach Akshay" }],
  creator: "Coach Akshay",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://coachakshay.com",
    title: "Coach Akshay - Transform Your Body with Expert Personal Training",
    description: "Expert personal training services in Kerala. Competition prep, weight loss, and muscle gain programs with proven results.",
    siteName: "Coach Akshay Personal Training",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coach Akshay - Personal Trainer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Akshay - Personal Fitness Trainer",
    description: "Transform your body with expert personal training in Kerala",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: 'https://coachakshay.com'
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Coach Akshay",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} font-sans`}>
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
