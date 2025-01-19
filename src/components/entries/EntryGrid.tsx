'use client';

import { useEntries } from '@/hooks/useEntries';
import type { Entry } from '@/db/schema';

const EntryGrid = () => {
  const { data: entries, isFetching } = useEntries();

  return (
    <div className="entry-grid">
      <h2>Entries</h2>
      { isFetching ? <p>Loading...</p> : null }
      { entries?.length ? entries.map((entry: Entry) => (
        <pre key={entry.id}>{JSON.stringify(entry, null, 2)}</pre>
      )) : <p>Empty...</p> }
    </div>
  );
}

export default EntryGrid;