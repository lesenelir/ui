import { Button } from '@lesenelir/ui/button'
import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from './divider'

const meta = {
  title: 'UI/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    className: {
      control: 'text',
      description: 'Custom className for styling the divider',
    },
    ref: {
      control: false,
      description: 'Forwarded ref to the root element',
    },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Horizontal: Story = {
  render: () => (
    <div className={'w-96'}>
      <div className={'text-sm mb-2'}>Content above divider</div>
      <Divider />
      <div className={'text-sm mt-2'}>Content below divider</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className={'flex items-center h-12'}>
      <div className={'text-sm px-3'}>Left content</div>
      <Divider orientation={'vertical'} />
      <div className={'text-sm px-3'}>Right content</div>
    </div>
  ),
}

// Vertical in Navigation
export const VerticalInNav: Story = {
  render: () => (
    <div className={'flex items-center gap-4 px-4 py-2 border rounded-lg'}>
      <Button
        type={'button'}
        variant={'outline'}
        className={'border-none p-0 h-fit font-normal bg-transparent hover:bg-transparent'}
      >
        Home
      </Button>
      <Divider orientation={'vertical'} className={'h-4'} />
      <Button
        type={'button'}
        variant={'outline'}
        className={'border-none p-0 h-fit font-normal bg-transparent hover:bg-transparent'}
      >
        About
      </Button>
      <Divider orientation={'vertical'} className={'h-4'} />
      <Button
        type={'button'}
        variant={'outline'}
        className={'border-none p-0 h-fit font-normal bg-transparent hover:bg-transparent'}
      >
        Services
      </Button>
      <Divider orientation={'vertical'} className={'h-4'} />
      <Button
        type={'button'}
        variant={'outline'}
        className={'border-none p-0 h-fit font-normal bg-transparent hover:bg-transparent'}
      >
        Contact
      </Button>
    </div>
  ),
}

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className={'w-96 space-y-6'}>
      <div>
        <div className={'text-sm mb-2'}>Default divider</div>
        <Divider />
      </div>

      <div>
        <div className={'text-sm mb-2'}>Thicker divider</div>
        <Divider className={'h-0.5'} />
      </div>

      <div>
        <div className={'text-sm mb-2'}>Custom color divider</div>
        <Divider className={'bg-ac'} />
      </div>

      <div>
        <div className={'text-sm mb-2'}>Dashed divider (using border)</div>
        <hr className={'border-t border-dashed border-border bg-transparent'} />
      </div>

      <div>
        <div className={'text-sm mb-2'}>Dotted divider (using border)</div>
        <hr className={'border-t border-dotted border-border bg-transparent'} />
      </div>
    </div>
  ),
}
