import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getUserToken } from "@/lib/auth";

const inter = Inter({
  subsets: ['latin'],  // use latin subset for English
  weight: ['400', '700'], // customize weights if you want
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png'
  }
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const token = await getUserToken();
  const isLoggedIn = !!token?.value;
  return (
    <html lang="en" dir="ltr">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"></script>
      </head>
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