import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import type { Metadata } from 'next';
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: 'Web Demo',
  description: 'website demo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
