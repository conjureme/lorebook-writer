import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'lorebook editor',
  description: 'create and edit lorebooks for ai storytelling',
  keywords: ['lorebook', 'ai', 'storytelling', 'worldbuilding', 'json editor'],
};

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-workSans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${workSans.variable} font-workSans`}>
        <Toaster position='top-center' />
        {children}
      </body>
    </html>
  );
}
