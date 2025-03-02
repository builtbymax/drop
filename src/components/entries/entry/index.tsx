/* eslint-disable @next/next/no-img-element */
'use client';

import type { Entry as EntryType } from '@/db/schema';
import { DeleteEntryButton } from '../mutations/DeleteEntryButton';
import getOGData from '@/actions/get-og-data';
import clsx from 'clsx';
import Link from 'next/link';
import './styles.scss';
import { sliceText } from '@/utils/text';

export const Entry = ({ entry }: { entry: EntryType }) => {
  const type = entry.type ? entry.type : 'link';
  const debug = false;

  const handleClick = async (entryUrl: string | null) => {
    if (!entryUrl) return;

    const OG = await getOGData(entryUrl);
    console.log(OG);
  };

  const handleDetail = () => {
    console.log('handleDetail');
  };

  return (
    <div className="card">
      <TopContent className={'grid'} type={entry.type as string}>
        <Detail handleDetail={handleDetail} />
      </TopContent>
      { entry.ogdata?.image && (
        <div className="media">
          <img src={entry.ogdata?.image} alt={entry.title} width={100} height={100} />
        </div>
      )}
      {type === 'link' && (
        <BottomContent>
          <>
            <Link className="favicon-link" href={entry.content as string} target='_blank'>
              <Favicon src={entry?.ogdata?.favicon} />
              {sliceText(entry?.ogdata?.url, 32)}
            </Link>
            { entry?.ogdata?.title && <h3>{ sliceText(entry?.ogdata?.title, 50) }</h3> }
            { sliceText(entry.title, 50) && <p>{ sliceText(entry.title, 50) }</p> }
            <DeleteEntryButton entryId={entry.id} />
            { debug && <button onClick={() => handleClick(entry.content)}>getOgData</button> }
          </>
        </BottomContent>
      )}
    </div>
  );
}

interface TopContentProps {
  children: React.ReactNode;
  className?: string;
  type: string;
}

const TopContent = ({ children, className, type }: TopContentProps) => {
  return (
    <div className={clsx('header', className)}>
      <div className={clsx('type', [`type-${type}`])}>
        <Icon type={type} />
        <span>{type}</span>
      </div>
      {children}
    </div>
  );
};

const Favicon = ({ src }: { src?: string }) => {
  if (!src) return null;

  return (
    <div className={'favicon'}>
      <img src={src} alt='Favicon' />
    </div>
  );
};

const Detail = ({ handleDetail }: { handleDetail?: () => void }) => {
  return (
    <div className={'detail'} onClick={handleDetail}>
      <svg width='3' height='13' viewBox='0 0 3 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1.49104 0C0.666068 0 -0.00891077 0.67498 8.89659e-05 1.49996C8.89659e-05 2.32493 0.675069 2.99991 1.50004 2.99991C2.32502 2.99991 3 2.32493 3 1.49996C3 0.67498 2.32502 0 1.49104 0Z' fill='white' />
        <path d='M1.49104 4.99988C0.666068 4.99988 -0.00891077 5.67486 8.89659e-05 6.49983C8.89659e-05 7.32481 0.675069 7.99979 1.50004 7.99979C2.32502 7.99979 3 7.32481 3 6.49983C3 5.67486 2.32502 4.99988 1.49104 4.99988Z' fill='white' />
        <path d='M1.49104 9.99976C0.666068 9.99976 -0.00891077 10.6747 8.89659e-05 11.4997C8.89659e-05 12.3247 0.675069 12.9997 1.50004 12.9997C2.32502 12.9997 3 12.3247 3 11.4997C3 10.6747 2.32502 9.99976 1.49104 9.99976Z' fill='white' />
      </svg>
    </div>
  );
};

const Icon = ({ type }: { type?: string }) => {
  if (type === 'link')
    return (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_1903_520)'>
          <path d='M12.88 7.11918C12.7517 5.98918 12.2583 4.89251 11.3917 4.02501C9.35751 1.99085 6.06001 1.99085 4.02584 4.02501C1.99167 6.05918 1.99167 9.35668 4.02584 11.3908C6.06001 13.425 9.35751 13.425 11.3917 11.3908C11.9925 10.79 12.4108 10.0783 12.6567 9.32251' stroke='white' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.1199 12.8808C7.24824 14.0108 7.74157 15.1075 8.60824 15.975C10.6424 18.0091 13.9399 18.0091 15.9741 15.975C18.0082 13.9408 18.0082 10.6433 15.9741 8.60912C13.9399 6.57495 10.6424 6.57495 8.60824 8.60912C8.0074 9.20995 7.58907 9.92162 7.34324 10.6775' stroke='white' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' />
        </g>
        <defs>
          <clipPath id='clip0_1903_520'>
            <rect width='20' height='20' rx='6' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );

  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M9.74816 6.62684C10.3339 7.21263 10.3339 8.16237 9.74816 8.74816C9.16237 9.33395 8.21263 9.33395 7.62684 8.74816C7.04105 8.16237 7.04105 7.21263 7.62684 6.62684C8.21263 6.04105 9.16237 6.04105 9.74816 6.62684Z' fill='white' />
      <path d='M10 17.5C5.8575 17.5 2.5 14.1425 2.5 10C2.5 5.8575 5.8575 2.5 10 2.5C14.1425 2.5 17.5 5.8575 17.5 10C17.5 14.1425 14.1425 17.5 10 17.5Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M9.16669 13.3334L12.7442 9.75585C13.0692 9.43002 13.5967 9.43002 13.9225 9.75585L16.9575 12.7909' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M12.7908 16.9575L8.08915 12.2558C7.76332 11.93 7.23582 11.93 6.91082 12.2558L4.29999 14.8667' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

interface BottomContent {
  children: React.ReactNode;
  className?: string;
}

const BottomContent = ({ children, className }: BottomContent) => {
  return <div className={clsx('grid', 'content', className)}>{children}</div>;
};