'use client';

import { removeLinkFromDatabase } from '@/actions/entries';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const DeleteEntryButton = ({ entryId }:{ entryId: string }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values: { entryId: string; }) => removeLinkFromDatabase(values.entryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entries'] });
    },
    onError: (error) => {
      console.error(error);
    }
  });

  const handleButtonClick = () => {
    mutation.mutate({ 
      entryId: entryId,
    });
  };
  
  return (
    <button onClick={handleButtonClick}>Delete Entry</button>
  );
};
DeleteEntryButton.displayName = 'DeleteEntryButton';