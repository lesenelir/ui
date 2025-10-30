import { useState } from 'react'

import { Label } from '@lesenelir/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider'

const meta = {
  title: 'UI/Slider',
  component: Slider,
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
      description: 'The color tint of the slider',
    },
    min: {
      control: { type: 'number' },
      description: 'The minimum value',
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the slider',
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    tint: 'default',
    defaultValue: [50],
    min: 0,
    max: 100,
  },
  render: args => (
    <div className={'w-80'}>
      <Slider {...args} />
    </div>
  ),
}

export const Range: Story = {
  args: {
    tint: 'default',
    defaultValue: [25, 75],
    min: 0,
    max: 100,
  },
  render: args => (
    <div className={'w-80'}>
      <Slider {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    tint: 'default',
    defaultValue: [50],
    disabled: true,
  },
  render: args => (
    <div className={'w-80'}>
      <Slider {...args} />
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    tint: 'default',
    defaultValue: [50],
    orientation: 'vertical',
  },
  render: args => (
    <div className={'h-60'}>
      <Slider {...args} />
    </div>
  ),
}

// Slider Variations
export const SliderVariations: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 w-96'}>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>0%</span>
        <Slider tint={'blue'} defaultValue={[0]} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>25%</span>
        <Slider tint={'blue'} defaultValue={[25]} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>50%</span>
        <Slider tint={'blue'} defaultValue={[50]} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>75%</span>
        <Slider tint={'blue'} defaultValue={[75]} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>100%</span>
        <Slider tint={'blue'} defaultValue={[100]} />
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
        <div className={'grid grid-cols-2 gap-6'}>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Default</span>
            <Slider tint={'default'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Accent</span>
            <Slider tint={'accent'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Red</span>
            <Slider tint={'red'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Orange</span>
            <Slider tint={'orange'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Amber</span>
            <Slider tint={'amber'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Yellow</span>
            <Slider tint={'yellow'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Lime</span>
            <Slider tint={'lime'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Green</span>
            <Slider tint={'green'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Emerald</span>
            <Slider tint={'emerald'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Teal</span>
            <Slider tint={'teal'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Cyan</span>
            <Slider tint={'cyan'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Sky</span>
            <Slider tint={'sky'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Blue</span>
            <Slider tint={'blue'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Indigo</span>
            <Slider tint={'indigo'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Violet</span>
            <Slider tint={'violet'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Purple</span>
            <Slider tint={'purple'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Fuchsia</span>
            <Slider tint={'fuchsia'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Pink</span>
            <Slider tint={'pink'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Rose</span>
            <Slider tint={'rose'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Slate</span>
            <Slider tint={'slate'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Gray</span>
            <Slider tint={'gray'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Zinc</span>
            <Slider tint={'zinc'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Neutral</span>
            <Slider tint={'neutral'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Stone</span>
            <Slider tint={'stone'} defaultValue={[60]} />
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
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Red</span>
            <Slider tint={'red'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Orange</span>
            <Slider tint={'orange'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Amber</span>
            <Slider tint={'amber'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Yellow</span>
            <Slider tint={'yellow'} defaultValue={[60]} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Green Colors</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Lime</span>
            <Slider tint={'lime'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Green</span>
            <Slider tint={'green'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Emerald</span>
            <Slider tint={'emerald'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Teal</span>
            <Slider tint={'teal'} defaultValue={[60]} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Blue Colors</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Cyan</span>
            <Slider tint={'cyan'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Sky</span>
            <Slider tint={'sky'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Blue</span>
            <Slider tint={'blue'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Indigo</span>
            <Slider tint={'indigo'} defaultValue={[60]} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Purple & Pink Colors</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Violet</span>
            <Slider tint={'violet'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Purple</span>
            <Slider tint={'purple'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Fuchsia</span>
            <Slider tint={'fuchsia'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Pink</span>
            <Slider tint={'pink'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Rose</span>
            <Slider tint={'rose'} defaultValue={[60]} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Neutral Colors</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Slate</span>
            <Slider tint={'slate'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Gray</span>
            <Slider tint={'gray'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Zinc</span>
            <Slider tint={'zinc'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Neutral</span>
            <Slider tint={'neutral'} defaultValue={[60]} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Stone</span>
            <Slider tint={'stone'} defaultValue={[60]} />
          </div>
        </div>
      </div>
    </div>
  ),
}

// With Labels
export const WithLabels: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 w-96'}>
      <div className={'flex flex-col gap-2'}>
        <Label htmlFor={'volume'} className={'cursor-pointer'}>
          Volume
        </Label>
        <Slider id={'volume'} tint={'blue'} defaultValue={[70]} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <Label htmlFor={'brightness'} className={'cursor-pointer'}>
          Brightness
        </Label>
        <Slider id={'brightness'} tint={'amber'} defaultValue={[80]} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <Label htmlFor={'temperature'} className={'cursor-pointer'}>
          Temperature
        </Label>
        <Slider id={'temperature'} tint={'red'} defaultValue={[22]} min={15} max={30} />
      </div>
    </div>
  ),
}

// Range Slider (Price Range)
export const RangeSlider: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 w-96'}>
      <div className={'flex flex-col gap-2'}>
        <div className={'flex justify-between text-sm'}>
          <span className={'font-medium'}>Price Range</span>
          <span className={'text-fg-rev/60'}>$0 - $1000</span>
        </div>
        <Slider tint={'green'} defaultValue={[200, 800]} min={0} max={1000} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <div className={'flex justify-between text-sm'}>
          <span className={'font-medium'}>Age Range</span>
          <span className={'text-fg-rev/60'}>18 - 65</span>
        </div>
        <Slider tint={'purple'} defaultValue={[25, 45]} min={18} max={65} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <div className={'flex justify-between text-sm'}>
          <span className={'font-medium'}>Time Range</span>
          <span className={'text-fg-rev/60'}>9:00 AM - 5:00 PM</span>
        </div>
        <Slider tint={'blue'} defaultValue={[9, 17]} min={0} max={24} />
      </div>
    </div>
  ),
}

// Interactive Slider with Value Display
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([50])

    return (
      <div className={'flex flex-col gap-2 w-96'}>
        <div className={'flex justify-between text-sm'}>
          <span className={'font-medium'}>Interactive Slider</span>
          <span className={'text-fg-rev/60'}>{value[0]}%</span>
        </div>
        <Slider tint={'blue'} value={value} onValueChange={setValue} />
      </div>
    )
  },
}

// Interactive Range Slider
export const InteractiveRange: Story = {
  render: () => {
    const [range, setRange] = useState<number[]>([25, 75])

    return (
      <div className={'flex flex-col gap-2 w-96'}>
        <div className={'flex justify-between text-sm'}>
          <span className={'font-medium'}>Interactive Range</span>
          <span className={'text-fg-rev/60'}>
            {range[0]} - {range[1]}
          </span>
        </div>
        <Slider tint={'purple'} value={range} onValueChange={setRange} />
      </div>
    )
  },
}

// Disabled State Variations
export const DisabledStates: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 w-96'}>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>Disabled - Single Value</span>
        <Slider tint={'blue'} defaultValue={[60]} disabled />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>Disabled - Range</span>
        <Slider tint={'purple'} defaultValue={[30, 70]} disabled />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>Enabled - Comparison</span>
        <Slider tint={'green'} defaultValue={[60]} />
      </div>
    </div>
  ),
}
