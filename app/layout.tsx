import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Search from "./ui/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Challenge",
  description: "",
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
          <Search />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
