import { getAllEntries } from '@/actions/entries';
import { useQuery } from '@tanstack/react-query';

export const useEntries = () => {
  return useQuery({
    queryKey: ['entries'],
    queryFn: () => getAllEntries(null),
  });
};

export const useEntriesByFolder = (folderId: string) => {
  return useQuery({
    queryKey: ['entries', folderId],
    queryFn: () => getAllEntries(folderId),
  });
};