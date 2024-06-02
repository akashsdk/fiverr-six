import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ParentComponent from "./components/ParentComponent";
import Footer from "./components/Footer";
import FloatButtonClient from "./components/FloatButtonClient"; // Import the client component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "#fff", color: "#000" }}
        className={inter.className}
      >
        <div>
          <ParentComponent />
          {children}
          <Footer />
        </div>
        <FloatButtonClient />  
      </body>
    </html>
  );
}
