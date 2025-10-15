import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './skeleton'

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom className for styling the skeleton',
    },
    ref: {
      control: false,
      description: 'Forwarded ref to the root element',
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  render: () => (
    <div className={'w-80'}>
      <Skeleton />
    </div>
  ),
}

// Shape Variants
export const Circle: Story = {
  render: () => (
    <div className={'flex gap-3 items-center'}>
      <Skeleton className={'size-8 rounded-full'} />
      <Skeleton className={'size-10 rounded-full'} />
      <Skeleton className={'size-12 rounded-full'} />
      <Skeleton className={'size-16 rounded-full'} />
    </div>
  ),
}

// Text Line Skeletons
export const MultiLines: Story = {
  render: () => (
    <div className={'w-96 flex flex-col gap-2'}>
      <Skeleton className={'h-4 w-full bg-loading-500'} />
      <Skeleton className={'h-4 w-full bg-loading-400'} />
      <Skeleton className={'h-4 w-full bg-loading-300'} />
      <Skeleton className={'h-4 w-full bg-loading-200'} />
      <Skeleton className={'h-4 w-full bg-loading-100'} />
      <Skeleton className={'h-4 w-full bg-loading-50'} />
    </div>
  ),
}

// Use Cases
export const CardLoading: Story = {
  render: () => (
    <div className={'w-[350px] rounded-lg border p-4'}>
      <div className={'flex flex-col gap-3'}>
        <div className={'flex items-center gap-3'}>
          <Skeleton className={'size-12 rounded-full'} />
          <div className={'flex-1 space-y-2'}>
            <Skeleton className={'h-4 w-24'} />
            <Skeleton className={'h-3 w-32'} />
          </div>
        </div>
        <Skeleton className={'h-32 w-full rounded-md'} />
        <div className={'space-y-2'}>
          <Skeleton className={'h-4 w-full'} />
          <Skeleton className={'h-4 w-full'} />
          <Skeleton className={'h-4 w-3/4'} />
        </div>
      </div>
    </div>
  ),
}

export const ListLoading: Story = {
  render: () => (
    <div className={'w-[400px] space-y-3'}>
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className={'flex items-center gap-3 p-3 rounded-lg border'}>
          <Skeleton className={'size-10 rounded-full'} />
          <div className={'flex-1 space-y-2'}>
            <Skeleton className={'h-4 w-3/4'} />
            <Skeleton className={'h-3 w-1/2'} />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const BlogPostLoading: Story = {
  render: () => (
    <div className={'w-[600px] space-y-4'}>
      <Skeleton className={'h-64 w-full rounded-lg'} />
      <Skeleton className={'h-8 w-3/4'} />
      <div className={'flex items-center gap-3'}>
        <Skeleton className={'size-8 rounded-full'} />
        <Skeleton className={'h-4 w-32'} />
        <Skeleton className={'h-4 w-24'} />
      </div>
      <div className={'space-y-2 mt-6'}>
        <Skeleton className={'h-4 w-full'} />
        <Skeleton className={'h-4 w-full'} />
        <Skeleton className={'h-4 w-full'} />
        <Skeleton className={'h-4 w-11/12'} />
        <Skeleton className={'h-4 w-4/5'} />
      </div>
      <div className={'space-y-2 mt-4'}>
        <Skeleton className={'h-4 w-full'} />
        <Skeleton className={'h-4 w-full'} />
        <Skeleton className={'h-4 w-3/4'} />
      </div>
    </div>
  ),
}

// Comment Loading
export const CommentLoading: Story = {
  render: () => (
    <div className={'w-[600px] space-y-4'}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className={'flex gap-3'}>
          <Skeleton className={'size-10 rounded-full flex-shrink-0'} />
          <div className={'flex-1 space-y-2'}>
            <div className={'flex items-center gap-2'}>
              <Skeleton className={'h-4 w-24'} />
              <Skeleton className={'h-3 w-16'} />
            </div>
            <Skeleton className={'h-4 w-full'} />
            <Skeleton className={'h-4 w-5/6'} />
            <div className={'flex gap-3 mt-2'}>
              <Skeleton className={'h-3 w-12'} />
              <Skeleton className={'h-3 w-12'} />
              <Skeleton className={'h-3 w-12'} />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
}
