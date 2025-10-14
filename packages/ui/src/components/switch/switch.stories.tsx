import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './switch'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
      description: 'The color tint of the switch when checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the switch',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    tint: 'accent',
  },
}

export const Checked: Story = {
  args: {
    tint: 'accent',
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    tint: 'accent',
    checked: false,
  },
}

export const Disabled: Story = {
  args: {
    tint: 'accent',
    disabled: true,
  },
}

// State Variations
export const StateVariations: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center gap-2'}>
        <Switch tint={'blue'} checked={false} />
        <span className={'text-sm'}>Unchecked</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Switch tint={'blue'} checked={true} />
        <span className={'text-sm'}>Checked</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Switch tint={'blue'} disabled checked={false} />
        <span className={'text-sm'}>Disabled Unchecked</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Switch tint={'blue'} disabled checked={true} />
        <span className={'text-sm'}>Disabled Checked</span>
      </div>
    </div>
  ),
}

// With Labels
export const WithLabels: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center justify-between gap-4 w-64'}>
        <label htmlFor={'notifications'} className={'text-sm font-medium cursor-pointer'}>
          Enable notifications
        </label>
        <Switch id={'notifications'} tint={'blue'} defaultChecked />
      </div>
      <div className={'flex items-center justify-between gap-4 w-64'}>
        <label htmlFor={'marketing'} className={'text-sm font-medium cursor-pointer'}>
          Marketing emails
        </label>
        <Switch id={'marketing'} tint={'green'} />
      </div>
      <div className={'flex items-center justify-between gap-4 w-64'}>
        <label htmlFor={'analytics'} className={'text-sm font-medium cursor-pointer'}>
          Analytics tracking
        </label>
        <Switch id={'analytics'} tint={'purple'} defaultChecked />
      </div>
    </div>
  ),
}

// All Tints Showcase
export const AllTints: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>All Color Tints</h3>
        <div className={'grid grid-cols-4 gap-4'}>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'accent'} defaultChecked />
            <span className={'text-sm'}>Accent</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'red'} defaultChecked />
            <span className={'text-sm'}>Red</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'orange'} defaultChecked />
            <span className={'text-sm'}>Orange</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'amber'} defaultChecked />
            <span className={'text-sm'}>Amber</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'yellow'} defaultChecked />
            <span className={'text-sm'}>Yellow</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'lime'} defaultChecked />
            <span className={'text-sm'}>Lime</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'green'} defaultChecked />
            <span className={'text-sm'}>Green</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'emerald'} defaultChecked />
            <span className={'text-sm'}>Emerald</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'teal'} defaultChecked />
            <span className={'text-sm'}>Teal</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'cyan'} defaultChecked />
            <span className={'text-sm'}>Cyan</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'sky'} defaultChecked />
            <span className={'text-sm'}>Sky</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'blue'} defaultChecked />
            <span className={'text-sm'}>Blue</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'indigo'} defaultChecked />
            <span className={'text-sm'}>Indigo</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'violet'} defaultChecked />
            <span className={'text-sm'}>Violet</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'purple'} defaultChecked />
            <span className={'text-sm'}>Purple</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'fuchsia'} defaultChecked />
            <span className={'text-sm'}>Fuchsia</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'pink'} defaultChecked />
            <span className={'text-sm'}>Pink</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'rose'} defaultChecked />
            <span className={'text-sm'}>Rose</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'slate'} defaultChecked />
            <span className={'text-sm'}>Slate</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'gray'} defaultChecked />
            <span className={'text-sm'}>Gray</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'zinc'} defaultChecked />
            <span className={'text-sm'}>Zinc</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'neutral'} defaultChecked />
            <span className={'text-sm'}>Neutral</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'stone'} defaultChecked />
            <span className={'text-sm'}>Stone</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

// Tint Groups
export const TintGroups: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Warm Colors</h3>
        <div className={'flex flex-wrap gap-4'}>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'red'} defaultChecked />
            <span className={'text-sm'}>Red</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'orange'} defaultChecked />
            <span className={'text-sm'}>Orange</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'amber'} defaultChecked />
            <span className={'text-sm'}>Amber</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'yellow'} defaultChecked />
            <span className={'text-sm'}>Yellow</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Green Colors</h3>
        <div className={'flex flex-wrap gap-4'}>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'lime'} defaultChecked />
            <span className={'text-sm'}>Lime</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'green'} defaultChecked />
            <span className={'text-sm'}>Green</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'emerald'} defaultChecked />
            <span className={'text-sm'}>Emerald</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'teal'} defaultChecked />
            <span className={'text-sm'}>Teal</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Blue Colors</h3>
        <div className={'flex flex-wrap gap-4'}>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'cyan'} defaultChecked />
            <span className={'text-sm'}>Cyan</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'sky'} defaultChecked />
            <span className={'text-sm'}>Sky</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'blue'} defaultChecked />
            <span className={'text-sm'}>Blue</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'indigo'} defaultChecked />
            <span className={'text-sm'}>Indigo</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Purple & Pink Colors</h3>
        <div className={'flex flex-wrap gap-4'}>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'violet'} defaultChecked />
            <span className={'text-sm'}>Violet</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'purple'} defaultChecked />
            <span className={'text-sm'}>Purple</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'fuchsia'} defaultChecked />
            <span className={'text-sm'}>Fuchsia</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'pink'} defaultChecked />
            <span className={'text-sm'}>Pink</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'rose'} defaultChecked />
            <span className={'text-sm'}>Rose</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Neutral Colors</h3>
        <div className={'flex flex-wrap gap-4'}>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'slate'} defaultChecked />
            <span className={'text-sm'}>Slate</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'gray'} defaultChecked />
            <span className={'text-sm'}>Gray</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'zinc'} defaultChecked />
            <span className={'text-sm'}>Zinc</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'neutral'} defaultChecked />
            <span className={'text-sm'}>Neutral</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <Switch tint={'stone'} defaultChecked />
            <span className={'text-sm'}>Stone</span>
          </div>
        </div>
      </div>
    </div>
  ),
}
