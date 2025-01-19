import { getEntries } from '@/actions/server';
import { useQuery } from '@tanstack/react-query';

export const useEntries = () => {
  return useQuery({
    queryKey: ['entries'],
    queryFn: () => getEntries(null),
  });
};

export const useEntriesByFolder = (folderId: string) => {
  return useQuery({
    queryKey: ['entries', folderId],
    queryFn: () => getEntries(folderId),
  });
};