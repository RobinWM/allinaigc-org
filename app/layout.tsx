import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import ClientLayout from '@/components/client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
    images: ['images/og-image.png'],
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
    <html suppressHydrationWarning>
      <head>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <ClientLayout>{children}</ClientLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}