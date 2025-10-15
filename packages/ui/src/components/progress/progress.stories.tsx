import { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from './progress'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
      description: 'The color tint of the progress indicator',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress value (0-100)',
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    tint: 'accent',
    value: 60,
  },
  render: args => (
    <div className={'w-80'}>
      <Progress {...args} />
    </div>
  ),
}

export const Empty: Story = {
  args: {
    tint: 'accent',
    value: 0,
  },
  render: args => (
    <div className={'w-80'}>
      <Progress {...args} />
    </div>
  ),
}

export const Half: Story = {
  args: {
    tint: 'accent',
    value: 50,
  },
  render: args => (
    <div className={'w-80'}>
      <Progress {...args} />
    </div>
  ),
}

export const Complete: Story = {
  args: {
    tint: 'accent',
    value: 100,
  },
  render: args => (
    <div className={'w-80'}>
      <Progress {...args} />
    </div>
  ),
}

// Progress Variations
export const ProgressVariations: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 w-96'}>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>0% Complete</span>
        <Progress tint={'blue'} value={0} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>25% Complete</span>
        <Progress tint={'blue'} value={25} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>50% Complete</span>
        <Progress tint={'blue'} value={50} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>75% Complete</span>
        <Progress tint={'blue'} value={75} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>100% Complete</span>
        <Progress tint={'blue'} value={100} />
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
            <span className={'text-sm'}>Accent</span>
            <Progress tint={'accent'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Red</span>
            <Progress tint={'red'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Orange</span>
            <Progress tint={'orange'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Amber</span>
            <Progress tint={'amber'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Yellow</span>
            <Progress tint={'yellow'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Lime</span>
            <Progress tint={'lime'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Green</span>
            <Progress tint={'green'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Emerald</span>
            <Progress tint={'emerald'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Teal</span>
            <Progress tint={'teal'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Cyan</span>
            <Progress tint={'cyan'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Sky</span>
            <Progress tint={'sky'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Blue</span>
            <Progress tint={'blue'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Indigo</span>
            <Progress tint={'indigo'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Violet</span>
            <Progress tint={'violet'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Purple</span>
            <Progress tint={'purple'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Fuchsia</span>
            <Progress tint={'fuchsia'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Pink</span>
            <Progress tint={'pink'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Rose</span>
            <Progress tint={'rose'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Slate</span>
            <Progress tint={'slate'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Gray</span>
            <Progress tint={'gray'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Zinc</span>
            <Progress tint={'zinc'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Neutral</span>
            <Progress tint={'neutral'} value={75} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <span className={'text-sm'}>Stone</span>
            <Progress tint={'stone'} value={75} />
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
            <Progress tint={'red'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Orange</span>
            <Progress tint={'orange'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Amber</span>
            <Progress tint={'amber'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Yellow</span>
            <Progress tint={'yellow'} value={75} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Green Colors</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Lime</span>
            <Progress tint={'lime'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Green</span>
            <Progress tint={'green'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Emerald</span>
            <Progress tint={'emerald'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Teal</span>
            <Progress tint={'teal'} value={75} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Blue Colors</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Cyan</span>
            <Progress tint={'cyan'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Sky</span>
            <Progress tint={'sky'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Blue</span>
            <Progress tint={'blue'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Indigo</span>
            <Progress tint={'indigo'} value={75} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Purple & Pink Colors</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Violet</span>
            <Progress tint={'violet'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Purple</span>
            <Progress tint={'purple'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Fuchsia</span>
            <Progress tint={'fuchsia'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Pink</span>
            <Progress tint={'pink'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Rose</span>
            <Progress tint={'rose'} value={75} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Neutral Colors</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Slate</span>
            <Progress tint={'slate'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Gray</span>
            <Progress tint={'gray'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Zinc</span>
            <Progress tint={'zinc'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Neutral</span>
            <Progress tint={'neutral'} value={75} />
          </div>
          <div className={'flex flex-col gap-2 w-80'}>
            <span className={'text-sm'}>Stone</span>
            <Progress tint={'stone'} value={75} />
          </div>
        </div>
      </div>
    </div>
  ),
}

// Animated Progress with Value Label
export const WithValueLabel: Story = {
  render: () => {
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0
          }
          return prev + 1
        })
      }, 100)

      return () => clearInterval(interval)
    }, [])

    return (
      <div className={'flex flex-col gap-2 w-96'}>
        <div className={'flex justify-between text-sm'}>
          <span className={'font-medium'}>Downloading...</span>
          <span className={'text-fg-rev/60'}>{progress}%</span>
        </div>
        <Progress tint={'blue'} value={progress} />
      </div>
    )
  },
}

// Indeterminate (Loading) State
export const Indeterminate: Story = {
  render: () => (
    <div className={'w-80'}>
      <Progress
        value={null}
        tint={'accent'}
        className={
          '[&_[data-slot=progress-indicator]]:w-1/2 [&_[data-slot=progress-indicator]]:animate-progress-indeterminate'
        }
      />
    </div>
  ),
}

export const IndeterminateWithLabel: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 w-96'}>
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>Loading...</span>
        <Progress
          value={null}
          tint={'blue'}
          className={
            '[&_[data-slot=progress-indicator]]:w-1/2 [&_[data-slot=progress-indicator]]:animate-progress-indeterminate'
          }
        />
      </div>

      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>Processing your request</span>
        <Progress
          value={null}
          tint={'purple'}
          className={
            '[&_[data-slot=progress-indicator]]:w-1/2 [&_[data-slot=progress-indicator]]:animate-progress-indeterminate'
          }
        />
      </div>

      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm font-medium'}>Analyzing data</span>
        <Progress
          value={null}
          tint={'green'}
          className={
            '[&_[data-slot=progress-indicator]]:w-1/2 [&_[data-slot=progress-indicator]]:animate-progress-indeterminate'
          }
        />
      </div>
    </div>
  ),
}
