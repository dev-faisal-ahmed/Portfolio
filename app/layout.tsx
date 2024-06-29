import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { PageTransition } from '@/components/shared/page-transition';
import { cn } from '@/lib/utils';
import './globals.css';
import { StairTransition } from '@/components/shared/page-transition/stair-transition';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

const font = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Faisal Ahmed',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
