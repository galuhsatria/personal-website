import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './components/theme/theme-provider';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import MobileNav from './components/ui/MobileNav';
import NextTopLoader from 'nextjs-toploader';
import 'react-photo-view/dist/react-photo-view.css';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from './components/ui/sonner';

export const metadata: Metadata = {
  title: 'Galuh Satria',
  description: 'Personal portfolio and blog of Galuh Satria.',
  openGraph: {
    title: 'Galuh Satria – Portfolio & Blog',
    description: 'Explore the personal projects, portfolio, and writings of Galuh Satria.',
    url: process.env.NEXT_PUBLIC_WEB_DOMAIN,
    siteName: 'Galuh Satria',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_DOMAIN}/api/og?title=Galuh%20Satria%20Portfolio%20%26%20Blog&description=Explore%20the%20personal%20projects%2C%20portfolio%2C%20and%20writings%20of%20Galuh%20Satria`,
        width: 1200,
        height: 630,
        alt: 'Galuh Satria OG Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galuh Satria – Portfolio & Blog',
    description: 'Explore the personal projects, portfolio, and writings of Galuh Satria.',
    images: [`${process.env.NEXT_PUBLIC_WEB_DOMAIN}/api/og?title=Galuh%20Satria%20Portfolio%20%26%20Blog&description=Explore%20the%20personal%20projects%2C%20portfolio%2C%20and%20writings%20of%20Galuh%20Satria`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="c5deca0e-365b-45e5-99ae-a6a10a10cb4a"></script>
        <meta name="google-site-verification" content="dzq1psxM3O9eGTVFNSf4brHqOEhj6Z2S1LyLpoBdCU0" />
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader showSpinner={false} height={2} shadow="0 0 #0000" crawlSpeed={400} />
          <Navbar />
          {children}
          <Footer />
          <MobileNav />
          <Toaster position='top-center'/>
        </ThemeProvider>
      </body>
    </html>
  );
}
