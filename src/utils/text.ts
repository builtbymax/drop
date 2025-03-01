export const sliceText = (title?: string | null, limit: number = 50) => {
  if (!title) return '';
  return title.length > limit ? title.slice(0, limit) + '...' : title;
};