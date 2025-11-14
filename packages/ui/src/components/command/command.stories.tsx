import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command'

const meta = {
  title: 'UI/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className={'w-[350px] rounded-lg border shadow-md'}>
      <CommandInput placeholder={'Type a command or search...'} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading={'Suggestions'}>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={'Settings'}>
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Tints: Story = {
  render: () => (
    <Command className={'w-[350px] rounded-lg border shadow-md'}>
      <CommandInput placeholder={'Type a command or search...'} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading={'Default Tint'}>
          <CommandItem tint={'default'}>
            <span className={'i-tabler-palette size-4'} />
            <span>Default Style</span>
          </CommandItem>
          <CommandItem tint={'default'}>
            <span className={'i-tabler-brush size-4'} />
            <span>Default Color</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={'Accent Tint'}>
          <CommandItem tint={'accent'}>
            <span className={'i-tabler-sparkles size-4'} />
            <span>Accent Style</span>
          </CommandItem>
          <CommandItem tint={'accent'}>
            <span className={'i-tabler-star size-4'} />
            <span>Accent Color</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={'Rose Tint'}>
          <CommandItem tint={'rose'}>
            <span className={'i-tabler-heart size-4'} />
            <span>Rose Style</span>
          </CommandItem>
          <CommandItem tint={'rose'}>
            <span className={'i-tabler-flower size-4'} />
            <span>Rose Color</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button
          type={'button'}
          onClick={() => setOpen(true)}
          className={'mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground'}
        >
          Open Command Dialog
        </button>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder={'Type a command or search...'} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading={'Suggestions'}>
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={'Settings'}>
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}

export const WithShortcuts: Story = {
  render: () => (
    <Command className={'w-[350px] rounded-lg border shadow-md'}>
      <CommandInput placeholder={'Type a command or search...'} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading={'Suggestions'}>
          <CommandItem>
            <span className={'i-tabler-calendar size-4'} />
            <span>Calendar</span>
            <CommandShortcut>C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className={'i-tabler-mood-smile size-4'} />
            <span>Search Emoji</span>
            <CommandShortcut>E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className={'i-tabler-calculator size-4'} />
            <span>Calculator</span>
            <CommandShortcut>K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={'Settings'}>
          <CommandItem>
            <span className={'i-tabler-user size-4'} />
            <span>Profile</span>
            <CommandShortcut>P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className={'i-tabler-credit-card size-4'} />
            <span>Billing</span>
            <CommandShortcut>B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className={'i-tabler-settings size-4'} />
            <span>Settings</span>
            <CommandShortcut>S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const EmptyState: Story = {
  render: () => (
    <Command className={'w-[350px] rounded-lg border shadow-md'}>
      <CommandInput placeholder={'Search for something that does not exist...'} />
      <CommandList>
        <CommandEmpty>
          <div className={'flex flex-col items-center gap-2 py-6'}>
            <span className={'i-tabler-search-off size-8 opacity-50'} />
            <p className={'text-sm'}>No results found.</p>
          </div>
        </CommandEmpty>
        <CommandGroup heading={'Suggestions'}>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
