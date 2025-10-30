import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './spinner'

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['circle', 'radial', 'quarter'],
      description: 'The spinner animation variant',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for customization',
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Circle: Story = {
  args: {
    variant: 'circle',
  },
}

export const Radial: Story = {
  args: {
    variant: 'radial',
  },
}

export const Quarter: Story = {
  args: {
    variant: 'quarter',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className={'flex flex-col gap-8 items-center'}>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Circle</span>
        <Spinner variant={'circle'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Radial</span>
        <Spinner variant={'radial'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Quarter</span>
        <Spinner variant={'quarter'} />
      </div>
    </div>
  ),
}

export const SizeVariations: Story = {
  render: () => (
    <div className={'flex flex-col gap-8 items-center'}>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Small</span>
        <Spinner variant={'circle'} className={'text-sm'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Default</span>
        <Spinner variant={'circle'} className={'text-base'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Large</span>
        <Spinner variant={'circle'} className={'text-2xl'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Extra Large</span>
        <Spinner variant={'circle'} className={'text-4xl'} />
      </div>
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-8 items-center justify-center'}>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Default</span>
        <Spinner variant={'circle'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Blue</span>
        <Spinner variant={'circle'} className={'text-blue-500'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Green</span>
        <Spinner variant={'circle'} className={'text-green-500'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Red</span>
        <Spinner variant={'circle'} className={'text-red-500'} />
      </div>
      <div className={'flex flex-col gap-2 items-center'}>
        <span className={'text-sm font-medium'}>Purple</span>
        <Spinner variant={'circle'} className={'text-purple-500'} />
      </div>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className={'flex flex-col gap-6'}>
      <div className={'flex items-center gap-2'}>
        <Spinner variant={'circle'} className={'text-sm'} />
        <span className={'text-sm'}>Loading...</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Spinner variant={'radial'} className={'text-sm'} />
        <span className={'text-sm'}>Processing your request...</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Spinner variant={'quarter'} className={'text-sm'} />
        <span className={'text-sm'}>Please wait...</span>
      </div>
      <div className={'flex flex-col gap-3 p-4 border rounded-lg w-64'}>
        <h3 className={'font-medium'}>Uploading files</h3>
        <div className={'flex items-center gap-2'}>
          <Spinner variant={'circle'} className={'text-sm text-blue-500'} />
          <span className={'text-sm text-gray-600'}>3 of 10 files uploaded</span>
        </div>
      </div>
    </div>
  ),
}
