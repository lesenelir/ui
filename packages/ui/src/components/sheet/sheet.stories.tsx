import { Button } from '@lesenelir/ui/button'
import { Input } from '@lesenelir/ui/input'
import { Label } from '@lesenelir/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the sheet is open',
    },
  },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const RightSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'}>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side={'right'}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>This is a sheet that slides in from the right side.</SheetDescription>
        </SheetHeader>
        <div className={'p-4'}>
          <p className={'text-sm'}>Sheet content goes here.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'}>Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
          <SheetDescription>This sheet slides in from the left side.</SheetDescription>
        </SheetHeader>
        <div className={'p-4'}>
          <p className={'text-sm'}>Content appears from the left.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'}>Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side={'top'}>
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
          <SheetDescription>This sheet slides down from the top.</SheetDescription>
        </SheetHeader>
        <div className={'p-4'}>
          <p className={'text-sm'}>Content slides down from the top of the screen.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'}>Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side={'bottom'}>
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>This sheet slides up from the bottom.</SheetDescription>
        </SheetHeader>
        <div className={'p-4'}>
          <p className={'text-sm'}>Content slides up from the bottom of the screen.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const WithHeaderMainAndFooter: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'}>Open Sheet with Footer</Button>
      </SheetTrigger>
      <SheetContent side={'right'}>
        {/* sheet content header */}
        <SheetHeader>
          <SheetTitle>Complete Sheet Example</SheetTitle>
          <SheetDescription>
            This sheet demonstrates the full structure with header, content, and footer sections.
          </SheetDescription>
        </SheetHeader>
        {/* sheet content main */}
        <div className={'flex-1 p-4'}>
          <p className={'text-sm mb-4'}>
            The sheet content area is scrollable when content exceeds the available height.
          </p>
          <p className={'text-sm mb-4'}>
            You can place any content here including forms, lists, or other components.
          </p>
          <p className={'text-sm'}>The footer will stay at the bottom of the sheet.</p>
        </div>
        {/* sheet content footer */}
        <SheetFooter>
          <SheetClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </SheetClose>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const WithContentMain: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'}>View Details</Button>
      </SheetTrigger>
      <SheetContent side={'right'}>
        <SheetHeader>
          <SheetTitle>Account Settings</SheetTitle>
          <SheetDescription>
            Make changes to your account settings here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className={'p-4'}>
          <div className={'space-y-4'}>
            <div className={'space-y-2'}>
              <Label htmlFor={'name'}>Name</Label>
              <Input id={'name'} placeholder={'Enter your name'} />
            </div>
            <div className={'space-y-2'}>
              <Label htmlFor={'email'}>Email</Label>
              <Input id={'email'} type={'email'} placeholder={'Enter your email'} />
            </div>
          </div>
        </div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Notifications: Story = {
  render: () => {
    const notifications = [
      { id: 1, title: 'New message', message: 'You have a new message from John', time: '2m ago' },
      {
        id: 2,
        title: 'Update available',
        message: 'A new version of the app is available',
        time: '1h ago',
      },
      {
        id: 3,
        title: 'Meeting reminder',
        message: 'Team meeting starts in 30 minutes',
        time: '3h ago',
      },
    ]

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'}>
            <span className={'i-tabler-bell'} />
            Notifications
          </Button>
        </SheetTrigger>
        <SheetContent side={'right'}>
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>
              You have {notifications.length} unread notifications.
            </SheetDescription>
          </SheetHeader>
          <div className={'p-4 space-y-4'}>
            {notifications.map(notification => (
              <div key={notification.id} className={'border-b pb-4 last:border-b-0'}>
                <div className={'flex items-start justify-between mb-1'}>
                  <h4 className={'font-medium text-sm'}>{notification.title}</h4>
                  <span className={'text-xs text-fg-rev/50'}>{notification.time}</span>
                </div>
                <p className={'text-sm text-fg-rev/70'}>{notification.message}</p>
              </div>
            ))}
          </div>
          <SheetFooter>
            <Button variant={'outline'}>Mark all as read</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
}

export const MobileNavigation: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'} size={'icon'}>
          <span className={'i-tabler-menu-2'} />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse through different sections of the app.</SheetDescription>
        </SheetHeader>
        <nav className={'p-4'}>
          <ul className={'space-y-2'}>
            <li>
              <a href={'/'} className={'flex items-center gap-3 py-2 rounded-md hover:bg-fg-rev/5'}>
                <span className={'i-tabler-home'} />
                <span className={'text-sm font-medium'}>Home</span>
              </a>
            </li>
            <li>
              <a href={'/'} className={'flex items-center gap-3 py-2 rounded-md hover:bg-fg-rev/5'}>
                <span className={'i-tabler-user'} />
                <span className={'text-sm font-medium'}>Profile</span>
              </a>
            </li>
            <li>
              <a href={'/'} className={'flex items-center gap-3 py-2 rounded-md hover:bg-fg-rev/5'}>
                <span className={'i-tabler-settings'} />
                <span className={'text-sm font-medium'}>Settings</span>
              </a>
            </li>
            <li>
              <a href={'/'} className={'flex items-center gap-3 py-2 rounded-md hover:bg-fg-rev/5'}>
                <span className={'i-tabler-bell'} />
                <span className={'text-sm font-medium'}>Notifications</span>
              </a>
            </li>
            <li>
              <a href={'/'} className={'flex items-center gap-3 py-2 rounded-md hover:bg-fg-rev/5'}>
                <span className={'i-tabler-help'} />
                <span className={'text-sm font-medium'}>Help</span>
              </a>
            </li>
          </ul>
        </nav>
        <SheetFooter>
          <Button variant={'outline'} className={'w-full'}>
            <span className={'i-tabler-logout'} />
            Logout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
