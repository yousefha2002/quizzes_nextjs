import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getUserToken } from "@/lib/auth";

const inter = Inter({
  subsets: ['latin'],  // use latin subset for English
  weight: ['400', '700'], // customize weights if you want
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Zerotodev – Interactive Programming Quizzes",
  description: "Challenge your skills in JavaScript, React, HTML, and more. Earn points and certificates as you learn.",
  icons: {
    icon: '/favicon.png',
  }
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const token = await getUserToken();
  const isLoggedIn = !!token?.value;
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header isLoggedIn={isLoggedIn}/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}