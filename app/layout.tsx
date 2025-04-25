import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/theme/theme-provider";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import MobileNav from "./components/ui/MobileNav";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });
import 'react-photo-view/dist/react-photo-view.css';
import { GeistSans } from "geist/font/sans";
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Galuh Satria ",
  description: "Portfolio website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
       <script defer src="https://cloud.umami.is/script.js" data-website-id="c5deca0e-365b-45e5-99ae-a6a10a10cb4a"></script>
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader showSpinner={false} height={2} shadow="0 0 #0000" crawlSpeed={400}/>
          <Navbar />
          {children}
          <Footer />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
