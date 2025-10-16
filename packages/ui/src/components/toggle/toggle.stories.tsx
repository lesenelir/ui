import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './toggle'

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'The visual style variant of the toggle',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the toggle',
    },
    tint: {
      control: 'select',
      options: [
        'accent',
        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'emerald',
        'teal',
        'cyan',
        'sky',
        'blue',
        'indigo',
        'violet',
        'purple',
        'fuchsia',
        'pink',
        'rose',
        'slate',
        'gray',
        'zinc',
        'neutral',
        'stone',
      ],
      description: 'The color tint of the toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    pressed: {
      control: 'boolean',
      description: 'The controlled pressed state of the toggle',
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variant Stories
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    tint: 'accent',
    children: <span className={'i-tabler-bold'} />,
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    tint: 'accent',
    children: <span className={'i-tabler-italic'} />,
  },
}

// State Stories
export const Pressed: Story = {
  args: {
    variant: 'default',
    size: 'default',
    tint: 'accent',
    pressed: true,
    children: <span className={'i-tabler-bold'} />,
  },
}

export const Unpressed: Story = {
  args: {
    variant: 'default',
    size: 'default',
    tint: 'accent',
    pressed: false,
    children: <span className={'i-tabler-bold'} />,
  },
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    tint: 'accent',
    disabled: true,
    children: <span className={'i-tabler-bold'} />,
  },
}

// State Variations
export const StateVariations: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center gap-2'}>
        <Toggle tint={'blue'} pressed={false}>
          <span className={'i-tabler-bold'} />
        </Toggle>
        <span className={'text-sm'}>Unpressed</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Toggle tint={'blue'} pressed={true}>
          <span className={'i-tabler-bold'} />
        </Toggle>
        <span className={'text-sm'}>Pressed</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Toggle tint={'blue'} disabled>
          <span className={'i-tabler-bold'} />
        </Toggle>
        <span className={'text-sm'}>Disabled</span>
      </div>
    </div>
  ),
}

// All Variants Overview
export const AllVariants: Story = {
  render: () => (
    <div className={'flex gap-2 items-center'}>
      <Toggle variant={'default'} tint={'accent'}>
        <span className={'i-tabler-bold'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'accent'}>
        <span className={'i-tabler-italic'} />
      </Toggle>
    </div>
  ),
}

// All Sizes Overview
export const AllSizes: Story = {
  render: () => (
    <div className={'flex gap-2 items-center'}>
      <Toggle size={'sm'} tint={'accent'}>
        <span className={'i-tabler-text-size'} />
      </Toggle>
      <Toggle size={'default'} tint={'accent'}>
        <span className={'i-tabler-text-size'} />
      </Toggle>
      <Toggle size={'lg'} tint={'accent'}>
        <span className={'i-tabler-text-size'} />
      </Toggle>
    </div>
  ),
}

// Text Editor Toolbar Example
export const TextEditorToolbar: Story = {
  render: () => (
    <div className={'flex gap-1 p-2 border rounded-lg w-fit'}>
      <Toggle variant={'default'} tint={'accent'}>
        <span className={'i-tabler-bold'} />
      </Toggle>
      <Toggle variant={'default'} tint={'accent'}>
        <span className={'i-tabler-italic'} />
      </Toggle>
      <Toggle variant={'default'} tint={'accent'}>
        <span className={'i-tabler-underline'} />
      </Toggle>
      <Toggle variant={'default'} tint={'accent'}>
        <span className={'i-tabler-strikethrough'} />
      </Toggle>
    </div>
  ),
}

// With Text Content
export const WithText: Story = {
  render: () => (
    <div className={'flex gap-2 items-center'}>
      <Toggle variant={'default'} tint={'accent'}>
        Toggle Me
      </Toggle>
      <Toggle variant={'outline'} tint={'blue'}>
        Click
      </Toggle>
    </div>
  ),
}

// Default Tint Variants
export const DefaultTints: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-2'}>
      <Toggle variant={'default'} tint={'accent'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'red'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'orange'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'amber'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'yellow'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'lime'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'green'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'emerald'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'teal'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'cyan'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'sky'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'blue'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'indigo'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'violet'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'purple'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'fuchsia'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'pink'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'rose'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'slate'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'gray'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'zinc'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'neutral'}>
        <span className={'i-tabler-star'} />
      </Toggle>
      <Toggle variant={'default'} tint={'stone'}>
        <span className={'i-tabler-star'} />
      </Toggle>
    </div>
  ),
}

// Outline Tint Variants
export const OutlineTints: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-2'}>
      <Toggle variant={'outline'} tint={'accent'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'red'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'orange'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'amber'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'yellow'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'lime'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'green'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'emerald'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'teal'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'cyan'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'sky'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'blue'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'indigo'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'violet'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'purple'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'fuchsia'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'pink'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'rose'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'slate'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'gray'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'zinc'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'neutral'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
      <Toggle variant={'outline'} tint={'stone'}>
        <span className={'i-tabler-heart'} />
      </Toggle>
    </div>
  ),
}

// Tint Showcase - Organized by color families
export const TintShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Warm Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle variant={'default'} tint={'red'}>
            <span className={'i-tabler-flame'} />
          </Toggle>
          <Toggle variant={'default'} tint={'orange'}>
            <span className={'i-tabler-flame'} />
          </Toggle>
          <Toggle variant={'default'} tint={'amber'}>
            <span className={'i-tabler-flame'} />
          </Toggle>
          <Toggle variant={'default'} tint={'yellow'}>
            <span className={'i-tabler-flame'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Green Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle variant={'default'} tint={'lime'}>
            <span className={'i-tabler-leaf'} />
          </Toggle>
          <Toggle variant={'default'} tint={'green'}>
            <span className={'i-tabler-leaf'} />
          </Toggle>
          <Toggle variant={'default'} tint={'emerald'}>
            <span className={'i-tabler-leaf'} />
          </Toggle>
          <Toggle variant={'default'} tint={'teal'}>
            <span className={'i-tabler-leaf'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Blue Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle variant={'default'} tint={'cyan'}>
            <span className={'i-tabler-droplet'} />
          </Toggle>
          <Toggle variant={'default'} tint={'sky'}>
            <span className={'i-tabler-droplet'} />
          </Toggle>
          <Toggle variant={'default'} tint={'blue'}>
            <span className={'i-tabler-droplet'} />
          </Toggle>
          <Toggle variant={'default'} tint={'indigo'}>
            <span className={'i-tabler-droplet'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Purple & Pink Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle variant={'default'} tint={'violet'}>
            <span className={'i-tabler-sparkles'} />
          </Toggle>
          <Toggle variant={'default'} tint={'purple'}>
            <span className={'i-tabler-sparkles'} />
          </Toggle>
          <Toggle variant={'default'} tint={'fuchsia'}>
            <span className={'i-tabler-sparkles'} />
          </Toggle>
          <Toggle variant={'default'} tint={'pink'}>
            <span className={'i-tabler-sparkles'} />
          </Toggle>
          <Toggle variant={'default'} tint={'rose'}>
            <span className={'i-tabler-sparkles'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Neutral Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle variant={'default'} tint={'slate'}>
            <span className={'i-tabler-circle'} />
          </Toggle>
          <Toggle variant={'default'} tint={'gray'}>
            <span className={'i-tabler-circle'} />
          </Toggle>
          <Toggle variant={'default'} tint={'zinc'}>
            <span className={'i-tabler-circle'} />
          </Toggle>
          <Toggle variant={'default'} tint={'neutral'}>
            <span className={'i-tabler-circle'} />
          </Toggle>
          <Toggle variant={'default'} tint={'stone'}>
            <span className={'i-tabler-circle'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Outline Variants</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle variant={'outline'} tint={'red'}>
            <span className={'i-tabler-heart'} />
          </Toggle>
          <Toggle variant={'outline'} tint={'blue'}>
            <span className={'i-tabler-heart'} />
          </Toggle>
          <Toggle variant={'outline'} tint={'green'}>
            <span className={'i-tabler-heart'} />
          </Toggle>
          <Toggle variant={'outline'} tint={'purple'}>
            <span className={'i-tabler-heart'} />
          </Toggle>
          <Toggle variant={'outline'} tint={'amber'}>
            <span className={'i-tabler-heart'} />
          </Toggle>
          <Toggle variant={'outline'} tint={'gray'}>
            <span className={'i-tabler-heart'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Different Sizes</h3>
        <div className={'flex flex-wrap gap-2 items-center'}>
          <Toggle variant={'default'} tint={'blue'} size={'sm'}>
            <span className={'i-tabler-star'} />
          </Toggle>
          <Toggle variant={'default'} tint={'blue'} size={'default'}>
            <span className={'i-tabler-star'} />
          </Toggle>
          <Toggle variant={'default'} tint={'blue'} size={'lg'}>
            <span className={'i-tabler-star'} />
          </Toggle>
        </div>
      </div>
    </div>
  ),
}

// Full Showcase
export const FullShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Variants</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle variant={'default'} tint={'accent'}>
            <span className={'i-tabler-bold'} />
          </Toggle>
          <Toggle variant={'outline'} tint={'accent'}>
            <span className={'i-tabler-italic'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Sizes</h3>
        <div className={'flex flex-wrap gap-2 items-center'}>
          <Toggle size={'sm'} tint={'blue'}>
            <span className={'i-tabler-text-size'} />
          </Toggle>
          <Toggle size={'default'} tint={'blue'}>
            <span className={'i-tabler-text-size'} />
          </Toggle>
          <Toggle size={'lg'} tint={'blue'}>
            <span className={'i-tabler-text-size'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>States</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle tint={'green'}>
            <span className={'i-tabler-check'} />
          </Toggle>
          <Toggle tint={'green'} pressed>
            <span className={'i-tabler-check'} />
          </Toggle>
          <Toggle tint={'green'} disabled>
            <span className={'i-tabler-check'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Toolbar Example</h3>
        <div className={'flex gap-1 p-2 border rounded-lg w-fit'}>
          <Toggle variant={'default'} tint={'accent'}>
            <span className={'i-tabler-bold'} />
          </Toggle>
          <Toggle variant={'default'} tint={'accent'}>
            <span className={'i-tabler-italic'} />
          </Toggle>
          <Toggle variant={'default'} tint={'accent'}>
            <span className={'i-tabler-underline'} />
          </Toggle>
          <Toggle variant={'default'} tint={'accent'}>
            <span className={'i-tabler-strikethrough'} />
          </Toggle>
          <div className={'w-px h-6 bg-border mx-1'} />
          <Toggle variant={'default'} tint={'accent'}>
            <span className={'i-tabler-align-left'} />
          </Toggle>
          <Toggle variant={'default'} tint={'accent'}>
            <span className={'i-tabler-align-center'} />
          </Toggle>
          <Toggle variant={'default'} tint={'accent'}>
            <span className={'i-tabler-align-right'} />
          </Toggle>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Color Examples</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Toggle tint={'red'}>
            <span className={'i-tabler-trash'} />
          </Toggle>
          <Toggle tint={'green'}>
            <span className={'i-tabler-check'} />
          </Toggle>
          <Toggle tint={'blue'}>
            <span className={'i-tabler-info-circle'} />
          </Toggle>
          <Toggle tint={'purple'}>
            <span className={'i-tabler-star'} />
          </Toggle>
          <Toggle tint={'amber'}>
            <span className={'i-tabler-alert-triangle'} />
          </Toggle>
        </div>
      </div>
    </div>
  ),
}
