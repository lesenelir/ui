import type { Meta, StoryObj } from '@storybook/react'

import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'The visual style variant of the toggle group',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the toggle group',
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
      description: 'The color tint of the toggle group',
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether multiple items can be selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire toggle group is disabled',
    },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variant Stories
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    tint: 'accent',
    type: 'single',
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value={'bold'}>
        <span className={'i-tabler-bold'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'italic'}>
        <span className={'i-tabler-italic'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'underline'}>
        <span className={'i-tabler-underline'} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    tint: 'accent',
    type: 'single',
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value={'left'}>
        <span className={'i-tabler-align-left'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'center'}>
        <span className={'i-tabler-align-center'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'right'}>
        <span className={'i-tabler-align-right'} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// Type Stories
export const SingleSelection: Story = {
  args: { type: 'single' },
  render: () => (
    <ToggleGroup type={'single'} defaultValue={'center'} tint={'blue'}>
      <ToggleGroupItem value={'left'}>
        <span className={'i-tabler-align-left'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'center'}>
        <span className={'i-tabler-align-center'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'right'}>
        <span className={'i-tabler-align-right'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'justify'}>
        <span className={'i-tabler-align-justified'} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const MultipleSelection: Story = {
  args: { type: 'multiple' },
  render: () => (
    <ToggleGroup type={'multiple'} defaultValue={['bold', 'italic']} tint={'accent'}>
      <ToggleGroupItem value={'bold'}>
        <span className={'i-tabler-bold'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'italic'}>
        <span className={'i-tabler-italic'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'underline'}>
        <span className={'i-tabler-underline'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'strikethrough'}>
        <span className={'i-tabler-strikethrough'} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// State Stories
export const Disabled: Story = {
  args: { type: 'single' },
  render: () => (
    <ToggleGroup type={'single'} disabled tint={'accent'}>
      <ToggleGroupItem value={'bold'}>
        <span className={'i-tabler-bold'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'italic'}>
        <span className={'i-tabler-italic'} />
      </ToggleGroupItem>
      <ToggleGroupItem value={'underline'}>
        <span className={'i-tabler-underline'} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const WithDefaultValue: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center gap-2'}>
        <ToggleGroup type={'single'} defaultValue={'center'} tint={'blue'}>
          <ToggleGroupItem value={'left'}>Left</ToggleGroupItem>
          <ToggleGroupItem value={'center'}>Center</ToggleGroupItem>
          <ToggleGroupItem value={'right'}>Right</ToggleGroupItem>
        </ToggleGroup>
        <span className={'text-sm'}>Single (defaultValue: 'center')</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <ToggleGroup type={'multiple'} defaultValue={['bold', 'underline']} tint={'green'}>
          <ToggleGroupItem value={'bold'}>
            <span className={'i-tabler-bold'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'italic'}>
            <span className={'i-tabler-italic'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'underline'}>
            <span className={'i-tabler-underline'} />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className={'text-sm'}>Multiple (defaultValue: ['bold', 'underline'])</span>
      </div>
    </div>
  ),
}

// All Variants Overview
export const AllVariants: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center gap-4'}>
        <ToggleGroup variant={'default'} tint={'accent'} type={'single'}>
          <ToggleGroupItem value={'1'}>
            <span className={'i-tabler-list'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'2'}>
            <span className={'i-tabler-layout-grid'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'3'}>
            <span className={'i-tabler-layout-kanban'} />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className={'text-sm'}>Default</span>
      </div>
      <div className={'flex items-center gap-4'}>
        <ToggleGroup variant={'outline'} tint={'accent'} type={'single'}>
          <ToggleGroupItem value={'1'}>
            <span className={'i-tabler-list'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'2'}>
            <span className={'i-tabler-layout-grid'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'3'}>
            <span className={'i-tabler-layout-kanban'} />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className={'text-sm'}>Outline</span>
      </div>
    </div>
  ),
}

// All Sizes Overview
export const AllSizes: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-col gap-4 items-start'}>
      <div className={'flex items-center gap-4'}>
        <ToggleGroup size={'sm'} tint={'accent'} type={'single'}>
          <ToggleGroupItem value={'1'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'2'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'3'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className={'text-sm'}>Small</span>
      </div>
      <div className={'flex items-center gap-4'}>
        <ToggleGroup size={'default'} tint={'accent'} type={'single'}>
          <ToggleGroupItem value={'1'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'2'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'3'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className={'text-sm'}>Default</span>
      </div>
      <div className={'flex items-center gap-4'}>
        <ToggleGroup size={'lg'} tint={'accent'} type={'single'}>
          <ToggleGroupItem value={'1'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'2'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'3'}>
            <span className={'i-tabler-text-size'} />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className={'text-sm'}>Large</span>
      </div>
    </div>
  ),
}

// Real-world Examples
export const TextAlignmentToolbar: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div>
        <p className={'text-sm text-gray-600 mb-2'}>Text Alignment</p>
        <ToggleGroup type={'single'} defaultValue={'left'} variant={'outline'} tint={'accent'}>
          <ToggleGroupItem value={'left'}>
            <span className={'i-tabler-align-left'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'center'}>
            <span className={'i-tabler-align-center'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'right'}>
            <span className={'i-tabler-align-right'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'justify'}>
            <span className={'i-tabler-align-justified'} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const TextFormattingToolbar: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'p-4 border rounded-lg w-fit'}>
      <div className={'flex gap-4'}>
        <ToggleGroup type={'multiple'} variant={'default'} tint={'accent'}>
          <ToggleGroupItem value={'bold'}>
            <span className={'i-tabler-bold'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'italic'}>
            <span className={'i-tabler-italic'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'underline'}>
            <span className={'i-tabler-underline'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'strikethrough'}>
            <span className={'i-tabler-strikethrough'} />
          </ToggleGroupItem>
        </ToggleGroup>
        <div className={'w-px h-6 bg-border'} />
        <ToggleGroup type={'single'} variant={'default'} tint={'accent'}>
          <ToggleGroupItem value={'left'}>
            <span className={'i-tabler-align-left'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'center'}>
            <span className={'i-tabler-align-center'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'right'}>
            <span className={'i-tabler-align-right'} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const ViewModeSwitcher: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div>
        <p className={'text-sm text-gray-600 mb-2'}>View Mode</p>
        <ToggleGroup type={'single'} defaultValue={'grid'} variant={'outline'} tint={'blue'}>
          <ToggleGroupItem value={'list'}>
            <span className={'i-tabler-list'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'grid'}>
            <span className={'i-tabler-layout-grid'} />
          </ToggleGroupItem>
          <ToggleGroupItem value={'kanban'}>
            <span className={'i-tabler-layout-kanban'} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const FilterOptions: Story = {
  args: { type: 'multiple' },
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div>
        <p className={'text-sm text-gray-600 mb-2'}>Filter by Status</p>
        <ToggleGroup type={'multiple'} defaultValue={['active']} tint={'green'}>
          <ToggleGroupItem value={'active'}>Active</ToggleGroupItem>
          <ToggleGroupItem value={'pending'}>Pending</ToggleGroupItem>
          <ToggleGroupItem value={'completed'}>Completed</ToggleGroupItem>
          <ToggleGroupItem value={'archived'}>Archived</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

// Default Tint Variants
export const DefaultTints: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-wrap gap-4'}>
      <ToggleGroup variant={'default'} tint={'accent'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'red'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'orange'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'amber'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'yellow'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'lime'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'green'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'emerald'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'teal'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'cyan'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'sky'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'blue'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'indigo'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'violet'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'purple'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'fuchsia'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'pink'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'rose'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'slate'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'gray'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'zinc'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'neutral'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'default'} tint={'stone'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}

// Outline Tint Variants
export const OutlineTints: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-wrap gap-4'}>
      <ToggleGroup variant={'outline'} tint={'accent'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'red'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'orange'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'amber'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'yellow'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'lime'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'green'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'emerald'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'teal'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'cyan'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'sky'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'blue'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'indigo'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'violet'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'purple'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'fuchsia'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'pink'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'rose'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'slate'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'gray'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'zinc'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'neutral'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant={'outline'} tint={'stone'} type={'single'} defaultValue={'2'}>
        <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
        <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
        <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}

// Tint Showcase - Organized by color families
export const TintShowcase: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Warm Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup variant={'default'} tint={'red'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'orange'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'amber'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'yellow'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Green Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup variant={'default'} tint={'lime'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'green'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'emerald'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'teal'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Blue Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup variant={'default'} tint={'cyan'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'sky'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'blue'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'indigo'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Purple & Pink Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup variant={'default'} tint={'violet'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'purple'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'fuchsia'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'pink'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'rose'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Default - Neutral Colors</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup variant={'default'} tint={'slate'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'gray'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'zinc'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'neutral'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'default'} tint={'stone'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>1</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>2</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Outline Variants</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup variant={'outline'} tint={'red'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'outline'} tint={'blue'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'outline'} tint={'green'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'outline'} tint={'purple'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-heart'} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Different Sizes</h3>
        <div className={'flex flex-wrap gap-2 items-center'}>
          <ToggleGroup
            variant={'default'}
            tint={'blue'}
            size={'sm'}
            type={'single'}
            defaultValue={'2'}
          >
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup
            variant={'default'}
            tint={'blue'}
            size={'default'}
            type={'single'}
            defaultValue={'2'}
          >
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup
            variant={'default'}
            tint={'blue'}
            size={'lg'}
            type={'single'}
            defaultValue={'2'}
          >
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  ),
}

// Full Showcase
export const FullShowcase: Story = {
  args: { type: 'single' },
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Variants</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup variant={'default'} tint={'accent'} type={'single'}>
            <ToggleGroupItem value={'bold'}>
              <span className={'i-tabler-bold'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'italic'}>
              <span className={'i-tabler-italic'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'underline'}>
              <span className={'i-tabler-underline'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant={'outline'} tint={'accent'} type={'single'}>
            <ToggleGroupItem value={'left'}>
              <span className={'i-tabler-align-left'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'center'}>
              <span className={'i-tabler-align-center'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'right'}>
              <span className={'i-tabler-align-right'} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Sizes</h3>
        <div className={'flex flex-wrap gap-2 items-center'}>
          <ToggleGroup size={'sm'} tint={'blue'} type={'single'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup size={'default'} tint={'blue'} type={'single'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup size={'lg'} tint={'blue'} type={'single'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'3'}>
              <span className={'i-tabler-text-size'} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Selection Types</h3>
        <div className={'flex flex-wrap gap-4'}>
          <div>
            <p className={'text-sm text-gray-600 mb-2'}>Single Selection</p>
            <ToggleGroup type={'single'} defaultValue={'center'} tint={'green'}>
              <ToggleGroupItem value={'left'}>Left</ToggleGroupItem>
              <ToggleGroupItem value={'center'}>Center</ToggleGroupItem>
              <ToggleGroupItem value={'right'}>Right</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <p className={'text-sm text-gray-600 mb-2'}>Multiple Selection</p>
            <ToggleGroup type={'multiple'} defaultValue={['bold', 'italic']} tint={'purple'}>
              <ToggleGroupItem value={'bold'}>
                <span className={'i-tabler-bold'} />
              </ToggleGroupItem>
              <ToggleGroupItem value={'italic'}>
                <span className={'i-tabler-italic'} />
              </ToggleGroupItem>
              <ToggleGroupItem value={'underline'}>
                <span className={'i-tabler-underline'} />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>States</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup tint={'green'} type={'single'}>
            <ToggleGroupItem value={'1'}>Normal</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>Normal</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>Normal</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup tint={'green'} type={'single'} disabled>
            <ToggleGroupItem value={'1'}>Disabled</ToggleGroupItem>
            <ToggleGroupItem value={'2'}>Disabled</ToggleGroupItem>
            <ToggleGroupItem value={'3'}>Disabled</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Toolbar Example</h3>
        <div className={'flex gap-2 p-2 border rounded-lg w-fit'}>
          <ToggleGroup type={'multiple'} variant={'default'} tint={'accent'}>
            <ToggleGroupItem value={'bold'}>
              <span className={'i-tabler-bold'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'italic'}>
              <span className={'i-tabler-italic'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'underline'}>
              <span className={'i-tabler-underline'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <div className={'w-px h-6 bg-border'} />
          <ToggleGroup type={'single'} variant={'default'} tint={'accent'}>
            <ToggleGroupItem value={'left'}>
              <span className={'i-tabler-align-left'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'center'}>
              <span className={'i-tabler-align-center'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'right'}>
              <span className={'i-tabler-align-right'} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Color Examples</h3>
        <div className={'flex flex-wrap gap-2'}>
          <ToggleGroup tint={'red'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-trash'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-trash'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup tint={'green'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-check'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-check'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup tint={'blue'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-info-circle'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-info-circle'} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup tint={'purple'} type={'single'} defaultValue={'2'}>
            <ToggleGroupItem value={'1'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
            <ToggleGroupItem value={'2'}>
              <span className={'i-tabler-star'} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  ),
}
