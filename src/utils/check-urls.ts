import { getImageSize } from "react-image-size";

export const stripRequestUrlToOrigin = (url?: string) => {
  if (!url) return;
  try {
    // Versuche zuerst, die URL-API zu verwenden
    const urlObject = new URL(url);
    return urlObject.origin;
  } catch (error) {
    console.log(error);
    // Fallback auf Regex, falls die URL-API fehlschlägt
    const regex = /^(https?:\/\/[^\/]+)/i;
    const match = url.match(regex);
    return match ? match[0] : null;
  };
};

export const getUrlDomain = (url?: string) => {
  if (!url) return;
  return new URL(url).hostname;
}

export const getFaviconFromUrl = (faviconSrc?: string | null, origin?: string) => {
  if (!faviconSrc || !faviconSrc.startsWith('http://') && !faviconSrc.startsWith('https://') && !faviconSrc.startsWith('//')) {
    return `${stripRequestUrlToOrigin(origin)}/favicon.ico`;
  };

  if (faviconSrc.startsWith('//')) {
    return `https:${faviconSrc}`;
  }

  return faviconSrc;
};

export const startsWithHttp = (url: string) => {
  if (!url) return;
  return url.startsWith('http://') || url.startsWith('https://');
}

export const checkIfStringIsTooLong = (text: string, maxLength: number) => {
  return text.length > maxLength;
};

export const checkIfTextIsLink = (text: string) => {
  try {
    const url = new URL(text);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export const getImageDimension = async (pasteEntry: FormData) => {
  if (!pasteEntry) return;
  const image = pasteEntry.get('image') as File;
  const dimension = await getImageSize(URL.createObjectURL(image));
  return dimension;
};

export const isLinkToImage = async (url:string) => {
  const img = new Image();
  img.src = url;
  return new Promise((resolve) => {
    img.onerror = () => resolve({ isImage: false });
    img.onload = () => resolve({ isImage: true, width: img.width, height: img.height });
  });
};

export const deserializeBuffer = (serializedBuffer: { type: string; data: number[] }): Blob => {
  if (serializedBuffer.type === 'Buffer') {
    const uint8Array = new Uint8Array(serializedBuffer.data);
    return new Blob([uint8Array]);
  }
  throw new Error('Invalid serialized buffer');
}