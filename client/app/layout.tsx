import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { PageTransition } from '@/shared/page-transition';
import { cn } from '@/lib/utils';
import { Navbar } from '@/shared/navbar';
import { Footer } from '@/shared/footer';
import { StairTransition } from '@/shared/page-transition/stair-transition';
import './globals.css';

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
      <body className={cn(font.className, 'flex min-h-screen flex-col')}>
        <Navbar />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
