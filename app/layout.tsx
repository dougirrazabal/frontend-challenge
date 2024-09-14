import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Search from "@/_components/Search";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Challenge",
  description: "Build with Nextjs 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <nav>
            <Suspense>
              <Search />
            </Suspense>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
