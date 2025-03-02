import type { Metadata } from 'next';
import ReactQueryProvider from '@/providers/QueryClient';
import '@/styles/app.scss';
import { Toaster } from 'sonner';
import { calSans, satoshi, ibmPlex } from '@/fonts/fontConfig';
import { ReactScan } from '@/components/ui/react-scan';

export const metadata: Metadata = {
  title: 'Drop',
  description: 'Your collection of links, notes, and files.',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const debug = false; //true;

  return (
    <html lang="en">
      <body className={`${calSans.variable} ${satoshi.variable} ${ibmPlex.variable}`}>
        { debug && <ReactScan /> }
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
