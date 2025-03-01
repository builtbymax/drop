'use server';

import { db } from '@/db/db';
import { entries } from '@/db/schema';
import { getUserId } from './server';
import { eq } from 'drizzle-orm';
import getOGData from './get-og-data';
import { ImageObject } from 'open-graph-scraper/types';
import { getFaviconFromUrl } from '@/utils/check-urls';

interface LinkTypes {
  title: string;
  content: string;
}

export const addLinkToDatabase = async ({ title, content }: LinkTypes) => {
  const userId = await getUserId();
  if (!userId) return;
  let setOgDataObject;

  const getOgImageUrl = (ogImage: ImageObject[]) => {
    return ogImage.length > 0 ? ogImage[0].url ?? '' : '';
  };

  const ogData = await getOGData(content);

  if (!ogData) {
    setOgDataObject = null;
  } else {
    setOgDataObject = {
      title: ogData?.ogTitle,
      description: ogData?.ogDescription,
      image: getOgImageUrl(ogData?.ogImage ?? []),
      url: ogData?.requestUrl,
      favicon: getFaviconFromUrl(ogData?.favicon, ogData?.requestUrl),
      siteName: ogData?.ogSiteName,
    };
  }

  await
  db.insert(entries).values({
    userId: userId,
    folderId: null,
    type: 'link',
    title: title,
    content: content,
    ogdata: setOgDataObject
  })
  .catch((error) => {
    console.error('Error saving link:', error);
    throw new Error('Error saving link');
  });
};

export const removeLinkFromDatabase = async (entryId: string) => {
  const userId = await getUserId();
  if (!userId) return;

  await db.delete(entries)
    .where(eq(entries.id, entryId as string))
    .returning().catch((error) => {
      console.error('Error deleting entry:', error);
      throw new Error('Error deleting entry');
    });
}