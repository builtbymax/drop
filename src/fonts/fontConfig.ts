import { IBM_Plex_Serif } from 'next/font/google';
import localFont from 'next/font/local';

export const calSans = localFont({
  src: [
    {
      path: '../fonts/CalSans_SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/CalSans_SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-cal-sans-sb',
});

export const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Variable.woff',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
  ],
  weight: '100 900',
  variable: '--font-satoshi',
});

export const ibmPlex = IBM_Plex_Serif({
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-ibm-plex',
  weight: '400',
});