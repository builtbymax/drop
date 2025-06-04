import { getImageSize } from 'react-image-size'
import { tryCatchSync } from './try-catch'

export const stripRequestUrlToOrigin = (url?: string) => {
  if (!url) return

  const [urlObject, error] = tryCatchSync(() => new URL(url))

  if (error) {
    console.log(error)
    const regex = /^(https?:\/\/[^\/]+)/i
    const match = url.match(regex)
    return match ? match[0] : null
  }

  return urlObject.origin
}

export const getUrlDomain = (url?: string) => {
  if (!url) return
  return new URL(url).hostname
}

export const getFaviconFromUrl = (faviconSrc?: string | null, origin?: string) => {
  if (!faviconSrc) {
    return `${stripRequestUrlToOrigin(origin)}/favicon.ico`
  }

  if (faviconSrc.startsWith('//')) {
    return `https:${faviconSrc}`
  }

  if (faviconSrc.startsWith('/')) {
    return `${stripRequestUrlToOrigin(origin)}${faviconSrc}`
  }

  return faviconSrc
}

export const startsWithHttp = (url: string) => {
  if (!url) return
  return url.startsWith('http://') || url.startsWith('https://')
}

export const checkIfStringIsTooLong = (text: string, maxLength: number) => {
  return text.length > maxLength
}

export const checkIfTextIsLink = (text: string) => {
  const [data, error] = tryCatchSync(() => new URL(text))
  if (error) return false

  return data.protocol === 'http:' || data.protocol === 'https:'
}

export const getImageDimension = async (pasteEntry: FormData) => {
  if (!pasteEntry) return
  const image = pasteEntry.get('image') as File
  const dimension = await getImageSize(URL.createObjectURL(image))
  return dimension
}

export const isLinkToImage = async (url: string) => {
  const img = new Image()
  img.src = url
  return new Promise((resolve) => {
    img.onerror = () => resolve({ isImage: false })
    img.onload = () => resolve({ isImage: true, width: img.width, height: img.height })
  })
}

export const deserializeBuffer = (serializedBuffer: { type: string; data: number[] }): Blob => {
  if (serializedBuffer.type === 'Buffer') {
    const uint8Array = new Uint8Array(serializedBuffer.data)
    return new Blob([uint8Array])
  }
  throw new Error('Invalid serialized buffer')
}
