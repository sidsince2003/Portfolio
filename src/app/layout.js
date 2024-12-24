// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio with Blog",
  description: "Portfolio website with integrated blog using Sanity CMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background/80 dark:bg-gray-900 backdrop-blur-sm text-gray-900 dark:text-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}