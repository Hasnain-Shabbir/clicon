import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Welcome to Clicon online eCommerce store.',
  description: 'Clicon is an online eCommerce store.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
