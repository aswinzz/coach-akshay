import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coach Akshay - Certified Personal Fitness Trainer | Transform Your Body Today",
  description: "Welcome to Akshay's personal training services! With over 7 years of experience, Akshay offers personalized fitness programs tailored to your goals. From injury prevention to competition preparation, achieve your dream physique with expert guidance.",
  keywords: "Personal trainer, fitness trainer, certified trainer, fitness programs, injury prevention, competition preparation, personalized fitness, workout plans, nutrition advice, muscle gain, weight loss, Akshay, fitness transformation"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
