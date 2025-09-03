export function generateMetadata() {
  const title = 'All In AIGC - Leading SEO and AI Tools Provider';
  const description = 'Professional SEO tools and AI-powered solutions for businesses. Discover our comprehensive suite of SEO and AI tools designed to enhance your digital presence';

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://allinaigc.org'),
    title,
    description,
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/logo.png', sizes: 'any' }
      ],
      apple: '/logo.png',
    },
    openGraph: {
      title,
      description,
      images: ['/logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.png'],
    },
  };
}
