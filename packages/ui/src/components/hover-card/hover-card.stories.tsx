import { Button } from '@lesenelir/ui/button'
import type { Meta, StoryObj } from '@storybook/react'

import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

const meta = {
  title: 'UI/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the hover card when it is initially rendered. Use when you do not need to control its open state.',
    },
    open: {
      control: 'boolean',
      description:
        'The controlled open state of the hover card. Must be used in conjunction with onOpenChange.',
    },
    onOpenChange: {
      description: 'Event handler called when the open state of the hover card changes.',
    },
    openDelay: {
      control: 'number',
      description:
        'The duration from when the mouse enters the trigger until the hover card opens (in milliseconds).',
      table: {
        defaultValue: { summary: '500' },
      },
    },
    closeDelay: {
      control: 'number',
      description:
        'The duration from when the mouse leaves the trigger until the hover card closes (in milliseconds).',
      table: {
        defaultValue: { summary: '300' },
      },
    },
  },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className={'hover:underline hover:text-ac cursor-pointer text-sm'}>
        Hover over me
      </HoverCardTrigger>
      <HoverCardContent>
        <p className={'text-sm'}>This is a hover card with simple content.</p>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div className={'grid grid-cols-2 gap-12 p-12'}>
      <div className={'flex justify-center items-center'}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant={'outline'}>Top</Button>
          </HoverCardTrigger>
          <HoverCardContent side={'top'}>
            <p className={'text-sm'}>Content on top</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className={'flex justify-center items-center'}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant={'outline'}>Right</Button>
          </HoverCardTrigger>
          <HoverCardContent side={'right'}>
            <p className={'text-sm'}>Content on right</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className={'flex justify-center items-center'}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant={'outline'}>Bottom</Button>
          </HoverCardTrigger>
          <HoverCardContent side={'bottom'}>
            <p className={'text-sm'}>Content on bottom</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className={'flex justify-center items-center'}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant={'outline'}>Left</Button>
          </HoverCardTrigger>
          <HoverCardContent side={'left'}>
            <p className={'text-sm'}>Content on left</p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
}

export const AllAligns: Story = {
  render: () => (
    <div className={'flex gap-12 p-12 items-center justify-center'}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant={'outline'}>Start Align</Button>
        </HoverCardTrigger>
        <HoverCardContent align={'start'}>
          <p className={'text-sm'}>Aligned to start</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant={'outline'}>Center Align</Button>
        </HoverCardTrigger>
        <HoverCardContent align={'center'}>
          <p className={'text-sm'}>Centered (default)</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant={'outline'}>End Align</Button>
        </HoverCardTrigger>
        <HoverCardContent align={'end'}>
          <p className={'text-sm'}>Aligned to end</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}

export const AllOffsets: Story = {
  render: () => (
    <div className={'flex gap-12 p-12 items-center justify-center'}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant={'outline'}>No Offset</Button>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={0}>
          <p className={'text-sm'}>No offset (0px)</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant={'outline'}>Small Offset</Button>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={8}>
          <p className={'text-sm'}>Small offset (8px)</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant={'outline'}>Large Offset</Button>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={20}>
          <p className={'text-sm'}>Large offset (20px)</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant={'link'}>@username</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className={'flex gap-3'}>
          <div className={'size-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500'} />
          <div className={'flex-1 space-y-1'}>
            <h4 className={'text-sm font-semibold'}>Lesenelir Zhou</h4>
            <p className={'text-xs text-fg-rev/70'}>@lesenelir</p>
            <p className={'text-sm text-fg-rev/80 mt-2'}>
              Software engineer passionate about building great user experiences.
            </p>
            <div className={'flex gap-4 mt-2 text-xs text-fg-rev/60'}>
              <span>
                <strong>1.2k</strong> Followers
              </span>
              <span>
                <strong>324</strong> Following
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const ProductInfo: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant={'outline'}>View Product</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className={'space-y-3'}>
          <div className={'w-full h-32 rounded bg-gradient-to-br from-pink-300 to-orange-300'} />
          <div>
            <h4 className={'text-sm font-semibold'}>Premium Wireless Headphones</h4>
            <p className={'text-xs text-fg-rev/70 mt-1'}>High-quality audio experience</p>
          </div>
          <div className={'flex items-center justify-between'}>
            <span className={'text-lg font-bold'}>$299.99</span>
            <div className={'flex items-center gap-1 text-xs'}>
              <span className={'i-tabler-star-filled text-yellow-500'} />
              <span>4.8 (234)</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const OnText: Story = {
  render: () => (
    <div className={'text-sm'}>
      Hover over{' '}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href={'/'} className={'text-blue-500 underline hover:no-underline cursor-help'}>
            this link
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className={'text-sm'}>Additional information appears here</p>
        </HoverCardContent>
      </HoverCard>{' '}
      to see more details.
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant={'outline'}>Long Content</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className={'space-y-2'}>
          <h4 className={'text-sm font-semibold'}>Extended Information</h4>
          <p className={'text-sm text-fg-rev/80'}>
            This hover card contains a longer amount of content to demonstrate how the component
            handles multiple paragraphs and extended text.
          </p>
          <p className={'text-sm text-fg-rev/80'}>
            The card maintains its width but allows the height to adjust based on the content
            length. This ensures readability while keeping the layout consistent.
          </p>
          <p className={'text-xs text-fg-rev/60 mt-3'}>Last updated: 2 hours ago</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
