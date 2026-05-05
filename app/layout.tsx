import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'José Viteri — ML & Data Engineer',
  description:
    'ML & Data Engineer with 8+ years of experience in medical AI, delivery-tech, and research. MSc student at TU Munich. 3 IEEE publications.',
  openGraph: {
    title: 'José Viteri — ML & Data Engineer',
    description:
      'ML & Data Engineer specializing in deep learning, data pipelines, and scalable systems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
