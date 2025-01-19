import type { Metadata } from 'next';
import ReactQueryProvider from '@/providers/QueryClient';

import '@/styles/app.scss';

export const metadata: Metadata = {
  title: 'Drop',
  description: 'Your collection of links, notes, and files.',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
};
