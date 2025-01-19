'use client';

import { addNewEntry } from '@/actions/server';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const AddNewButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addNewEntry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entries'] });
    },
  });
  
  return (
    <>
      <button onClick={() => mutation.mutate()}>Add New Entry</button>
    </>
  );
};