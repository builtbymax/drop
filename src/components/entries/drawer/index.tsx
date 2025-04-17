'use client'

import { GridColumn, GridRow } from '@/components/ui/Grid'
import { ContentSize } from '@/components/ui/Section'
import { Drawer as VaulDrawer } from 'vaul'
import './styles.scss'
import { AddEntryForm } from './entry-form'

export const Drawer = ({ isOpen, setIsOpen }: Readonly<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void }>) => {
  return (
    <VaulDrawer.Root autoFocus={true} snapPoints={[0.8, 1]} shouldScaleBackground open={isOpen} onOpenChange={setIsOpen} handleOnly={true} dismissible={true}>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="drawer" />
        <VaulDrawer.Content className="drawer-content" aria-describedby={undefined}>
          <div className="inner-wrapper">
            <VaulDrawer.Handle className="handle" />
            <div className="body" data-vaul-no-drag>
              <ContentSize size="fullscreen">
                <GridRow>
                  <GridColumn columnSize={{ xs: 12 }}>
                    <VaulDrawer.Title className="title">Add Entry</VaulDrawer.Title>
                    <AddEntryForm setIsOpen={setIsOpen} />
                  </GridColumn>
                </GridRow>
              </ContentSize>
            </div>
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  )
}
Drawer.displayName = 'Drawer'

export default Drawer
