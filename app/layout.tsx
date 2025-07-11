import './globals.css';

import { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Navbar } from '@/shared/navbar';
import { Footer } from '@/shared/footer';
import { Toaster } from 'sonner';

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
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={cn(font.className, 'flex min-h-screen flex-col')}>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors duration={1500} />
      </body>
    </html>
  );
}
