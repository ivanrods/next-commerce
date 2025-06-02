import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Next E-commerce",
  description: "Next E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider localization={ptBR}>
    <html lang="en">
      <body
        className={clsx(geistSans.variable, `bg-slate-700 antialiased`)}
      >
       <Navbar/>
        <main className=" h-screen p-16">{children}</main>
      </body>
    </html>
    </ClerkProvider>
  );
}
