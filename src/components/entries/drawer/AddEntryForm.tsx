'use client';

import { addLinkToDatabase } from '@/actions/entries';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';

export const AddEntryForm = ({ setIsOpen }:{ setIsOpen: (isOpen: boolean) => void; }) => {
  const queryClient = useQueryClient();
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: (values: { title: string; content: string }) => addLinkToDatabase(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entries'] });
      setIsOpen(false);
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!titleInputRef.current || !contentInputRef.current) return;

    if (!contentInputRef.current?.value) {
      setError('Please fill out the content field.');
      return
    };

    mutation.mutate({ 
      title: titleInputRef.current?.value ?? '',
      content: contentInputRef.current?.value
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" placeholder="Add a title" ref={titleInputRef} />
      <br />
      <label htmlFor="content">Content</label>
      <input type="text" name="content" placeholder="Add a link" ref={contentInputRef} />
      <button type="submit">Add New Entry</button>
      <p>{error}</p>
    </form>
  );
};
AddEntryForm.displayName = 'AddEntryForm';