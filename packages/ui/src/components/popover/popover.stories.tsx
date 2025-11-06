import { Button } from '@lesenelir/ui/button'
import type { Meta, StoryObj } from '@storybook/react'

import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from './popover'

const meta = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'The open state of the popover when it is initially rendered',
    },
    open: {
      control: 'boolean',
      description: 'The controlled open state of the popover',
    },
    onOpenChange: {
      control: false,
      description: 'Event handler called when the open state changes',
    },
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'outline'}>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className={'w-80 p-4'}>
        <div className={'flex flex-col gap-2'}>
          <h4 className={'font-medium leading-none'}>Popover Title</h4>
          <p className={'text-sm text-muted-foreground'}>
            This is a popover component built with Radix UI primitives.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div className={'grid grid-cols-2 gap-8'}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'}>Top</Button>
        </PopoverTrigger>
        <PopoverContent side={'top'} className={'w-48 p-3'}>
          <p className={'text-sm'}>Top position</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'}>Right</Button>
        </PopoverTrigger>
        <PopoverContent side={'right'} className={'w-48 p-3'}>
          <p className={'text-sm'}>Right position</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'}>Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side={'bottom'} className={'w-48 p-3'}>
          <p className={'text-sm'}>Bottom position</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'}>Left</Button>
        </PopoverTrigger>
        <PopoverContent side={'left'} className={'w-48 p-3'}>
          <p className={'text-sm'}>Left position</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const AllAligns: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-8'}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'}>Start</Button>
        </PopoverTrigger>
        <PopoverContent align={'start'} className={'w-64 p-3'}>
          <p className={'text-sm'}>Start aligned</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'}>Center</Button>
        </PopoverTrigger>
        <PopoverContent align={'center'} className={'w-64 p-3'}>
          <p className={'text-sm'}>Center aligned</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'}>End</Button>
        </PopoverTrigger>
        <PopoverContent align={'end'} className={'w-64 p-3'}>
          <p className={'text-sm'}>End aligned</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'outline'}>Rich Content</Button>
      </PopoverTrigger>
      <PopoverContent className={'w-96 p-5'}>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2'}>
            <h3 className={'text-base font-semibold'}>Account Settings</h3>
            <p className={'text-sm text-muted-foreground'}>
              Manage your account preferences and settings.
            </p>
          </div>
          <div className={'flex flex-col gap-3'}>
            <div className={'flex items-center justify-between'}>
              <span className={'text-sm font-medium'}>Email Notifications</span>
              <span className={'text-sm text-muted-foreground'}>Enabled</span>
            </div>
            <div className={'flex items-center justify-between'}>
              <span className={'text-sm font-medium'}>Two-Factor Auth</span>
              <span className={'text-sm text-muted-foreground'}>Disabled</span>
            </div>
            <div className={'flex items-center justify-between'}>
              <span className={'text-sm font-medium'}>API Access</span>
              <span className={'text-sm text-muted-foreground'}>Active</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const InteractiveContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'outline'}>Interactive Content</Button>
      </PopoverTrigger>
      <PopoverContent className={'w-80 p-4'}>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2'}>
            <h4 className={'font-medium leading-none'}>Quick Actions</h4>
            <p className={'text-sm text-muted-foreground'}>Choose an action to perform</p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <Button variant={'outline'} size={'sm'}>
              Edit Profile
            </Button>
            <Button variant={'outline'} size={'sm'}>
              View Settings
            </Button>
            <Button variant={'outline'} size={'sm'}>
              Sign Out
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const FullShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-8 p-4'}>
      <div className={'flex flex-col gap-3'}>
        <h3 className={'text-lg font-semibold'}>Positions</h3>
        <div className={'flex flex-wrap gap-3'}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Top
              </Button>
            </PopoverTrigger>
            <PopoverContent side={'top'} className={'w-48 p-3'}>
              <p className={'text-sm'}>Top position</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Right
              </Button>
            </PopoverTrigger>
            <PopoverContent side={'right'} className={'w-48 p-3'}>
              <p className={'text-sm'}>Right position</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Bottom
              </Button>
            </PopoverTrigger>
            <PopoverContent side={'bottom'} className={'w-48 p-3'}>
              <p className={'text-sm'}>Bottom position</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Left
              </Button>
            </PopoverTrigger>
            <PopoverContent side={'left'} className={'w-48 p-3'}>
              <p className={'text-sm'}>Left position</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className={'flex flex-col gap-3'}>
        <h3 className={'text-lg font-semibold'}>Alignments</h3>
        <div className={'flex flex-wrap gap-3'}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Start
              </Button>
            </PopoverTrigger>
            <PopoverContent align={'start'} className={'w-64 p-3'}>
              <p className={'text-sm'}>Start aligned</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Center
              </Button>
            </PopoverTrigger>
            <PopoverContent align={'center'} className={'w-64 p-3'}>
              <p className={'text-sm'}>Center aligned</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                End
              </Button>
            </PopoverTrigger>
            <PopoverContent align={'end'} className={'w-64 p-3'}>
              <p className={'text-sm'}>End aligned</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className={'flex flex-col gap-3'}>
        <h3 className={'text-lg font-semibold'}>Content Variations</h3>
        <div className={'flex flex-wrap gap-3'}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Simple
              </Button>
            </PopoverTrigger>
            <PopoverContent className={'w-60 p-3'}>
              <p className={'text-sm'}>Simple text content</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Rich
              </Button>
            </PopoverTrigger>
            <PopoverContent className={'w-80 p-4'}>
              <div className={'flex flex-col gap-2'}>
                <h4 className={'font-medium'}>Rich Content</h4>
                <p className={'text-sm text-muted-foreground'}>
                  With multiple elements and styling
                </p>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'sm'}>
                Interactive
              </Button>
            </PopoverTrigger>
            <PopoverContent className={'w-72 p-4'}>
              <div className={'flex flex-col gap-3'}>
                <h4 className={'text-sm font-medium'}>Actions</h4>
                <div className={'flex gap-2'}>
                  <Button size={'sm'} variant={'outline'}>
                    Action 1
                  </Button>
                  <Button size={'sm'} variant={'outline'}>
                    Action 2
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  ),
}
