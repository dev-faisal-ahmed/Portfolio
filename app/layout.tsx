import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/shared/navbar';
import { cn } from '@/lib/utils';
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
      <body className={cn(font.className, 'flex min-h-screen flex-col')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
