import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/theme/theme-provider";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import MobileNav from "./components/ui/MobileNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galuh Satria ",
  description: "Portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
