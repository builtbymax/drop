'use client';

import { useEntries } from '@/hooks/useEntries';
import type { Entry as EntryType } from '@/db/schema';
import { ContentSize } from '../UI/Section';
import { GridColumn, GridRow } from '../UI/Grid';
import { Entry } from './entry';

const EntryGrid = () => {
  const { data: entries, isFetching } = useEntries();

  return (
    <div className="entry-grid">
      <ContentSize size="fullscreen">
        <h2>Entries</h2>
        <GridRow>
        { isFetching ? <p>Loading...</p> : null }
        { entries?.length ? entries.map((entry: EntryType) => (
          <GridColumn key={entry.id} columnSize={{ xs: 12, m: 6, l: 4 }}>
            <Entry entry={entry} />
          </GridColumn>
        )) : <p>Empty...</p> }
        </GridRow>
      </ContentSize>
    </div>
  );
}

export default EntryGrid;