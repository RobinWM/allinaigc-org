import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://allinaigc.org'),
  title: 'All In AIGC - Leading SEO and AI Tools Provider',
  description: 'Professional SEO tools and AI-powered solutions for businesses. Discover our comprehensive suite of SEO and AI tools designed to enhance your digital presence.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.png', sizes: 'any' }
    ],
    apple: '/logo.png',
  },
  openGraph: {
    title: 'All In AIGC - Leading SEO and AI Tools Provider',
    description: 'Professional SEO tools and AI-powered solutions for businesses. Discover our comprehensive suite of SEO and AI tools designed to enhance your digital presence.',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All In AIGC - Leading SEO and AI Tools Provider',
    description: 'Professional SEO tools and AI-powered solutions for businesses. Discover our comprehensive suite of SEO and AI tools designed to enhance your digital presence.',
    images: ['/images/og-image.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}