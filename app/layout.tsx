import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

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
      <body className={`${montserrat.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
