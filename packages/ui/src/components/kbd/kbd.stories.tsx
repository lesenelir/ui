import { Button } from '@lesenelir/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@lesenelir/ui/tooltip'
import type { Meta, StoryObj } from '@storybook/react'

import { Kbd, KbdGroup } from './kbd'

const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom className for styling the kbd element',
    },
    ref: {
      control: false,
      description: 'Forwarded ref to the root element',
    },
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Cmd',
  },
}

export const SingleKeys: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-2'}>
      <Kbd>Cmd</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Alt</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Space</Kbd>
      <Kbd>Delete</Kbd>
      <Kbd>Backspace</Kbd>
    </div>
  ),
}

export const KeyCombination: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Cmd</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}

export const CommonShortcuts: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center gap-4'}>
        <span className={'w-32 text-sm text-fg/60'}>Copy</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <span>+</span>
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
      <div className={'flex items-center gap-4'}>
        <span className={'w-32 text-sm text-fg/60'}>Paste</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <span>+</span>
          <Kbd>V</Kbd>
        </KbdGroup>
      </div>
      <div className={'flex items-center gap-4'}>
        <span className={'w-32 text-sm text-fg/60'}>Cut</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <span>+</span>
          <Kbd>X</Kbd>
        </KbdGroup>
      </div>
      <div className={'flex items-center gap-4'}>
        <span className={'w-32 text-sm text-fg/60'}>Undo</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <span>+</span>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
      <div className={'flex items-center gap-4'}>
        <span className={'w-32 text-sm text-fg/60'}>Redo</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <span>+</span>
          <Kbd>Shift</Kbd>
          <span>+</span>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
      <div className={'flex items-center gap-4'}>
        <span className={'w-32 text-sm text-fg/60'}>Save</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <span>+</span>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className={'flex items-center gap-4'}>
        <span className={'w-32 text-sm text-fg/60'}>Find</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <span>+</span>
          <Kbd>F</Kbd>
        </KbdGroup>
      </div>
      <div className={'flex items-center gap-4'}>
        <span className={'w-32 text-sm text-fg/60'}>Command Palette</span>
        <KbdGroup>
          <Kbd>Cmd</Kbd>
          <span>+</span>
          <Kbd>Shift</Kbd>
          <span>+</span>
          <Kbd>P</Kbd>
        </KbdGroup>
      </div>
    </div>
  ),
}

export const InTooltip: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-4'}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>
            <span className={'i-tabler-search'} />
            Search
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Quick search</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>
            <span className={'i-tabler-copy'} />
            Copy
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Copy</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>
            <span className={'i-tabler-clipboard'} />
            Paste
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Paste</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <span className={'i-tabler-arrow-back'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Undo</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <span className={'i-tabler-arrow-forward'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Redo</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <span className={'i-tabler-device-floppy'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Save</span>
            <Kbd>⌘S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const AllShortcuts: Story = {
  render: () => (
    <div className={'max-w-4xl space-y-8 p-8'}>
      <div>
        <h3 className={'mb-4 text-lg font-semibold'}>Editing</h3>
        <div className={'space-y-3'}>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Copy</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Paste</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>V</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Cut</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>X</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Select All</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>A</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'mb-4 text-lg font-semibold'}>Navigation</h3>
        <div className={'space-y-3'}>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Go to File</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>P</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Quick Open</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Go to Line</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>G</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Navigate Back</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>-</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'mb-4 text-lg font-semibold'}>Search & Replace</h3>
        <div className={'space-y-3'}>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Find</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>F</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Replace</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>H</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Find in Files</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>Shift</Kbd>
              <span>+</span>
              <Kbd>F</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'mb-4 text-lg font-semibold'}>View & Layout</h3>
        <div className={'space-y-3'}>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Toggle Sidebar</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>B</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Toggle Terminal</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>`</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Zoom In</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>+</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Zoom Out</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>-</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'mb-4 text-lg font-semibold'}>Terminal</h3>
        <div className={'space-y-3'}>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>New Terminal</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>Shift</Kbd>
              <span>+</span>
              <Kbd>`</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Clear Terminal</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <span>+</span>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-sm'}>Interrupt</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>
    </div>
  ),
}
