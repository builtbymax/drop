'use client';

import { useEntries } from '@/hooks/useEntries';
import type { Entry as EntryType } from '@/db/schema';
import { ContentSize } from '@/components/ui/Section';
import { GridColumn, GridRow } from '@/components/ui/Grid';
import { Entry } from './entry';
import './styles.scss';

const EntriesWrapper = () => {
  const { data: entries, isFetching } = useEntries();

  return (
    <div className="entries-wrapper">
      <ContentSize size="fullscreen">
        <h2>Entries</h2>
        { isFetching ? <p>Loading...</p> : (
          <GridRow>
            { entries?.length ? entries.map((entry: EntryType) => (
              <GridColumn key={entry.id} columnSize={{ xs: 12, m: 6, l: 4, xl: 3 }}>
                <Entry entry={entry} />
              </GridColumn>
            )) : <p>Empty...</p> }
          </GridRow>
        )}
      </ContentSize>
    </div>
  );
}

export default EntriesWrapper;