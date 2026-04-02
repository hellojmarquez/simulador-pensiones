import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Simulador de pensiones — Simula tu pensión y decide lo mejor para ti',
  description:
    'Simula el impacto de la reforma de pensiones en Chile. Compara Capitalización Individual vs Seguro Social y toma una decisión informada sobre tu futuro.',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://simulador-pensiones.cl',
    title: 'Simulador de pensiones — Simula tu pensión',
    description: 'Simula el impacto de la reforma de pensiones en Chile y comparte con tus amigos.',
    images: [
      {
        url: 'https://decidetu-cl.vercel.app/assets/landing/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Simulador de pensiones',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="w-full min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
