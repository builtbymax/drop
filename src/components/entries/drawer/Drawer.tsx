'use client';

import { GridColumn, GridRow } from '@/components/UI/Grid';
import { ContentSize } from '@/components/UI/Section';
import { Drawer as VaulDrawer } from 'vaul';
import './Drawer.scss';

export const Drawer = ({ isOpen, setIsOpen } : Readonly<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void; }>) => {
  return (
    <VaulDrawer.Root snapPoints={[0.8, 1]} shouldScaleBackground open={isOpen} onOpenChange={setIsOpen} handleOnly={true} dismissible={true}>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="drawer" />
          <VaulDrawer.Content className="drawer-content" aria-describedby={undefined}>
            <div className="inner-wrapper">
              <VaulDrawer.Handle className="handle" />
              <div className="body" data-vaul-no-drag>
                <ContentSize size="fullscreen">
                  <GridRow>
                    <GridColumn columnSize={{ xs: 12 }}>
                      <VaulDrawer.Title className="title">
                        Your pasted content:
                      </VaulDrawer.Title>
                      <label htmlFor="title">Title</label>
                      <input type="text" name="title" placeholder="Add a title" />
                    </GridColumn>
                  </GridRow>
                </ContentSize>
              </div>
            </div>
          </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
};
Drawer.displayName = 'Drawer';

export default Drawer;