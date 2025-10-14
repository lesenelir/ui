import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'border', 'gradient'],
      description: 'The visual style variant of the badge',
    },
    tint: {
      control: 'select',
      options: [
        'default',
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
      description: 'The color tint of the badge',
    },
    asChild: {
      control: 'boolean',
      description: 'Merges props onto immediate child (Radix Slot)',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variant Stories
export const Default: Story = {
  args: {
    variant: 'solid',
    tint: 'default',
    children: 'Badge',
  },
}

export const Solid: Story = {
  args: {
    variant: 'solid',
    tint: 'blue',
    children: 'Solid',
  },
}

export const Border: Story = {
  args: {
    variant: 'border',
    tint: 'blue',
    children: 'Border',
  },
}

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    tint: 'blue',
    children: 'Gradient',
  },
}

// All Variants Overview
export const AllVariants: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-2 items-center'}>
      <Badge variant={'solid'} tint={'blue'}>
        Solid
      </Badge>
      <Badge variant={'border'} tint={'blue'}>
        Border
      </Badge>
      <Badge variant={'gradient'} tint={'blue'}>
        Gradient
      </Badge>
    </div>
  ),
}

// Status Badges - Common use cases
export const StatusBadges: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-2 items-center'}>
      <Badge variant={'solid'} tint={'green'}>
        Success
      </Badge>
      <Badge variant={'solid'} tint={'blue'}>
        Info
      </Badge>
      <Badge variant={'solid'} tint={'amber'}>
        Warning
      </Badge>
      <Badge variant={'solid'} tint={'red'}>
        Error
      </Badge>
      <Badge variant={'solid'} tint={'gray'}>
        Neutral
      </Badge>
    </div>
  ),
}

// Tint Variants - Solid
export const SolidTints: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-wrap gap-2'}>
        <Badge variant={'solid'} tint={'default'}>
          Default
        </Badge>
        <Badge variant={'solid'} tint={'accent'}>
          Accent
        </Badge>
        <Badge variant={'solid'} tint={'red'}>
          Red
        </Badge>
        <Badge variant={'solid'} tint={'orange'}>
          Orange
        </Badge>
        <Badge variant={'solid'} tint={'amber'}>
          Amber
        </Badge>
        <Badge variant={'solid'} tint={'yellow'}>
          Yellow
        </Badge>
        <Badge variant={'solid'} tint={'lime'}>
          Lime
        </Badge>
        <Badge variant={'solid'} tint={'green'}>
          Green
        </Badge>
        <Badge variant={'solid'} tint={'emerald'}>
          Emerald
        </Badge>
        <Badge variant={'solid'} tint={'teal'}>
          Teal
        </Badge>
        <Badge variant={'solid'} tint={'cyan'}>
          Cyan
        </Badge>
        <Badge variant={'solid'} tint={'sky'}>
          Sky
        </Badge>
        <Badge variant={'solid'} tint={'blue'}>
          Blue
        </Badge>
        <Badge variant={'solid'} tint={'indigo'}>
          Indigo
        </Badge>
        <Badge variant={'solid'} tint={'violet'}>
          Violet
        </Badge>
        <Badge variant={'solid'} tint={'purple'}>
          Purple
        </Badge>
        <Badge variant={'solid'} tint={'fuchsia'}>
          Fuchsia
        </Badge>
        <Badge variant={'solid'} tint={'pink'}>
          Pink
        </Badge>
        <Badge variant={'solid'} tint={'rose'}>
          Rose
        </Badge>
        <Badge variant={'solid'} tint={'slate'}>
          Slate
        </Badge>
        <Badge variant={'solid'} tint={'gray'}>
          Gray
        </Badge>
        <Badge variant={'solid'} tint={'zinc'}>
          Zinc
        </Badge>
        <Badge variant={'solid'} tint={'neutral'}>
          Neutral
        </Badge>
        <Badge variant={'solid'} tint={'stone'}>
          Stone
        </Badge>
      </div>
    </div>
  ),
}

// Tint Variants - Border
export const BorderTints: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-wrap gap-2'}>
        <Badge variant={'border'} tint={'default'}>
          Default
        </Badge>
        <Badge variant={'border'} tint={'accent'}>
          Accent
        </Badge>
        <Badge variant={'border'} tint={'red'}>
          Red
        </Badge>
        <Badge variant={'border'} tint={'orange'}>
          Orange
        </Badge>
        <Badge variant={'border'} tint={'amber'}>
          Amber
        </Badge>
        <Badge variant={'border'} tint={'yellow'}>
          Yellow
        </Badge>
        <Badge variant={'border'} tint={'lime'}>
          Lime
        </Badge>
        <Badge variant={'border'} tint={'green'}>
          Green
        </Badge>
        <Badge variant={'border'} tint={'emerald'}>
          Emerald
        </Badge>
        <Badge variant={'border'} tint={'teal'}>
          Teal
        </Badge>
        <Badge variant={'border'} tint={'cyan'}>
          Cyan
        </Badge>
        <Badge variant={'border'} tint={'sky'}>
          Sky
        </Badge>
        <Badge variant={'border'} tint={'blue'}>
          Blue
        </Badge>
        <Badge variant={'border'} tint={'indigo'}>
          Indigo
        </Badge>
        <Badge variant={'border'} tint={'violet'}>
          Violet
        </Badge>
        <Badge variant={'border'} tint={'purple'}>
          Purple
        </Badge>
        <Badge variant={'border'} tint={'fuchsia'}>
          Fuchsia
        </Badge>
        <Badge variant={'border'} tint={'pink'}>
          Pink
        </Badge>
        <Badge variant={'border'} tint={'rose'}>
          Rose
        </Badge>
        <Badge variant={'border'} tint={'slate'}>
          Slate
        </Badge>
        <Badge variant={'border'} tint={'gray'}>
          Gray
        </Badge>
        <Badge variant={'border'} tint={'zinc'}>
          Zinc
        </Badge>
        <Badge variant={'border'} tint={'neutral'}>
          Neutral
        </Badge>
        <Badge variant={'border'} tint={'stone'}>
          Stone
        </Badge>
      </div>
    </div>
  ),
}

// Tint Variants - Gradient
export const GradientTints: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-wrap gap-2'}>
        <Badge variant={'gradient'} tint={'accent'}>
          Accent
        </Badge>
        <Badge variant={'gradient'} tint={'red'}>
          Red
        </Badge>
        <Badge variant={'gradient'} tint={'orange'}>
          Orange
        </Badge>
        <Badge variant={'gradient'} tint={'amber'}>
          Amber
        </Badge>
        <Badge variant={'gradient'} tint={'yellow'}>
          Yellow
        </Badge>
        <Badge variant={'gradient'} tint={'lime'}>
          Lime
        </Badge>
        <Badge variant={'gradient'} tint={'green'}>
          Green
        </Badge>
        <Badge variant={'gradient'} tint={'emerald'}>
          Emerald
        </Badge>
        <Badge variant={'gradient'} tint={'teal'}>
          Teal
        </Badge>
        <Badge variant={'gradient'} tint={'cyan'}>
          Cyan
        </Badge>
        <Badge variant={'gradient'} tint={'sky'}>
          Sky
        </Badge>
        <Badge variant={'gradient'} tint={'blue'}>
          Blue
        </Badge>
        <Badge variant={'gradient'} tint={'indigo'}>
          Indigo
        </Badge>
        <Badge variant={'gradient'} tint={'violet'}>
          Violet
        </Badge>
        <Badge variant={'gradient'} tint={'purple'}>
          Purple
        </Badge>
        <Badge variant={'gradient'} tint={'fuchsia'}>
          Fuchsia
        </Badge>
        <Badge variant={'gradient'} tint={'pink'}>
          Pink
        </Badge>
        <Badge variant={'gradient'} tint={'rose'}>
          Rose
        </Badge>
        <Badge variant={'gradient'} tint={'slate'}>
          Slate
        </Badge>
        <Badge variant={'gradient'} tint={'gray'}>
          Gray
        </Badge>
        <Badge variant={'gradient'} tint={'zinc'}>
          Zinc
        </Badge>
        <Badge variant={'gradient'} tint={'neutral'}>
          Neutral
        </Badge>
        <Badge variant={'gradient'} tint={'stone'}>
          Stone
        </Badge>
      </div>
    </div>
  ),
}

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-wrap gap-2 items-center'}>
        <Badge variant={'solid'} tint={'green'}>
          <span className={'i-tabler-check'} />
          Success
        </Badge>
        <Badge variant={'solid'} tint={'blue'}>
          <span className={'i-tabler-info-circle'} />
          Info
        </Badge>
        <Badge variant={'solid'} tint={'amber'}>
          <span className={'i-tabler-alert-triangle'} />
          Warning
        </Badge>
        <Badge variant={'solid'} tint={'red'}>
          <span className={'i-tabler-x'} />
          Error
        </Badge>
      </div>
      <div className={'flex flex-wrap gap-2 items-center'}>
        <Badge variant={'border'} tint={'purple'}>
          <span className={'i-tabler-star'} />
          Featured
        </Badge>
        <Badge variant={'border'} tint={'blue'}>
          <span className={'i-tabler-tag'} />
          Tag
        </Badge>
        <Badge variant={'gradient'} tint={'pink'}>
          <span className={'i-tabler-heart'} />
          Favorite
        </Badge>
      </div>
    </div>
  ),
}

// Count Badges
export const CountBadges: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-wrap gap-2 items-center'}>
        <Badge variant={'solid'} tint={'red'}>
          99+
        </Badge>
        <Badge variant={'solid'} tint={'blue'}>
          5
        </Badge>
        <Badge variant={'border'} tint={'green'}>
          New
        </Badge>
        <Badge variant={'gradient'} tint={'purple'}>
          Pro
        </Badge>
      </div>
    </div>
  ),
}

// Tint Showcase - Organized by color families
export const TintShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Solid - Warm Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Badge variant={'solid'} tint={'red'}>
            Red
          </Badge>
          <Badge variant={'solid'} tint={'orange'}>
            Orange
          </Badge>
          <Badge variant={'solid'} tint={'amber'}>
            Amber
          </Badge>
          <Badge variant={'solid'} tint={'yellow'}>
            Yellow
          </Badge>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Solid - Green Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Badge variant={'solid'} tint={'lime'}>
            Lime
          </Badge>
          <Badge variant={'solid'} tint={'green'}>
            Green
          </Badge>
          <Badge variant={'solid'} tint={'emerald'}>
            Emerald
          </Badge>
          <Badge variant={'solid'} tint={'teal'}>
            Teal
          </Badge>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Solid - Blue Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Badge variant={'solid'} tint={'cyan'}>
            Cyan
          </Badge>
          <Badge variant={'solid'} tint={'sky'}>
            Sky
          </Badge>
          <Badge variant={'solid'} tint={'blue'}>
            Blue
          </Badge>
          <Badge variant={'solid'} tint={'indigo'}>
            Indigo
          </Badge>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Solid - Purple & Pink Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Badge variant={'solid'} tint={'violet'}>
            Violet
          </Badge>
          <Badge variant={'solid'} tint={'purple'}>
            Purple
          </Badge>
          <Badge variant={'solid'} tint={'fuchsia'}>
            Fuchsia
          </Badge>
          <Badge variant={'solid'} tint={'pink'}>
            Pink
          </Badge>
          <Badge variant={'solid'} tint={'rose'}>
            Rose
          </Badge>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Border Variants</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Badge variant={'border'} tint={'red'}>
            Red
          </Badge>
          <Badge variant={'border'} tint={'blue'}>
            Blue
          </Badge>
          <Badge variant={'border'} tint={'green'}>
            Green
          </Badge>
          <Badge variant={'border'} tint={'purple'}>
            Purple
          </Badge>
          <Badge variant={'border'} tint={'amber'}>
            Amber
          </Badge>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Gradient Variants</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Badge variant={'gradient'} tint={'red'}>
            Red
          </Badge>
          <Badge variant={'gradient'} tint={'blue'}>
            Blue
          </Badge>
          <Badge variant={'gradient'} tint={'green'}>
            Green
          </Badge>
          <Badge variant={'gradient'} tint={'purple'}>
            Purple
          </Badge>
          <Badge variant={'gradient'} tint={'pink'}>
            Pink
          </Badge>
        </div>
      </div>
    </div>
  ),
}

// AsChild Usage
export const AsChildUsage: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-2'}>
      <Badge variant={'solid'} tint={'blue'} asChild>
        <a href={'https://lesenelir.me'} target={'_blank'} rel={'noreferrer'}>
          Link Badge
        </a>
      </Badge>
      <Badge variant={'border'} tint={'purple'} asChild>
        <button type={'button'}>Button Badge</button>
      </Badge>
    </div>
  ),
}
