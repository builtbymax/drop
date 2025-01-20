import type { Metadata } from 'next';
import ReactQueryProvider from '@/providers/QueryClient';

import '@/styles/app.scss';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Drop',
  description: 'Your collection of links, notes, and files.',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <main>
          <ReactQueryProvider>
            <div vaul-drawer-wrapper="" className="vaul-drawer-wrapper">
              {children}
            </div>
            <Toaster />
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
};
