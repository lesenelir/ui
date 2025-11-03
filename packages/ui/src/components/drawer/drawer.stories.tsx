import { useState } from 'react'

import { Button } from '@lesenelir/ui/button'
import { Input } from '@lesenelir/ui/input'
import { Label } from '@lesenelir/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

import { useMediaQuery } from '../../hooks'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={'outline'}>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a basic drawer example.</DrawerDescription>
        </DrawerHeader>
        <div className={'p-4'}>
          <p className={'text-sm'}>
            This is the main content area of the drawer. You can place any content here.
          </p>
        </div>
        <DrawerFooter>
          <Button>Save Changes</Button>
          <DrawerClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const FromRight: Story = {
  render: () => (
    <Drawer direction={'right'}>
      <DrawerTrigger asChild>
        <Button variant={'outline'}>Open From Right</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>Configure your preferences</DrawerDescription>
        </DrawerHeader>
        <div className={'p-4 space-y-4'}>
          <div className={'space-y-2'}>
            <h4 className={'font-medium text-sm'}>Appearance</h4>
            <p className={'text-sm text-fg-rev/50'}>Customize how the app looks on your device.</p>
          </div>
          <div className={'space-y-2'}>
            <h4 className={'font-medium text-sm'}>Notifications</h4>
            <p className={'text-sm text-fg-rev/50'}>Manage how you receive notifications.</p>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant={'outline'}>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const FromLeft: Story = {
  render: () => (
    <Drawer direction={'left'}>
      <DrawerTrigger asChild>
        <Button variant={'outline'}>Open From Left</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription>Browse through the menu</DrawerDescription>
        </DrawerHeader>
        <div className={'p-4'}>
          <nav className={'space-y-1'}>
            <a href={'/'} className={'block px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}>
              Dashboard
            </a>
            <a href={'/'} className={'block px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}>
              Projects
            </a>
            <a href={'/'} className={'block px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}>
              Team
            </a>
            <a href={'/'} className={'block px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}>
              Settings
            </a>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  ),
}

export const FromTop: Story = {
  render: () => (
    <Drawer direction={'top'}>
      <DrawerTrigger asChild>
        <Button variant={'outline'}>Open From Top</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>You have 3 unread messages</DrawerDescription>
        </DrawerHeader>
        <div className={'p-4 space-y-3'}>
          <div className={'p-3 rounded-md bg-fg-rev/5'}>
            <p className={'text-sm font-medium'}>New message from John</p>
            <p className={'text-xs text-fg-rev/50 mt-1'}>2 minutes ago</p>
          </div>
          <div className={'p-3 rounded-md bg-fg-rev/5'}>
            <p className={'text-sm font-medium'}>Your report is ready</p>
            <p className={'text-xs text-fg-rev/50 mt-1'}>1 hour ago</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={'outline'}>Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>Make changes to your profile here.</DrawerDescription>
        </DrawerHeader>
        <div className={'p-4 space-y-4'}>
          <div className={'space-y-2'}>
            <Label htmlFor={'name'}>Name</Label>
            <Input id={'name'} placeholder={'Enter your name'} />
          </div>
          <div className={'space-y-2'}>
            <Label htmlFor={'email'}>Email</Label>
            <Input id={'email'} type={'email'} placeholder={'Enter your email'} />
          </div>
          <div className={'space-y-2'}>
            <Label htmlFor={'bio'}>Bio</Label>
            <Input id={'bio'} placeholder={'Tell us about yourself'} />
          </div>
        </div>
        <DrawerFooter>
          <Button>Save Changes</Button>
          <DrawerClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Drawer direction={'bottom'}>
      <DrawerTrigger asChild>
        <Button variant={'outline'}>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Complete Your Action</DrawerTitle>
          <DrawerDescription>Review the details before proceeding.</DrawerDescription>
        </DrawerHeader>
        <div className={'p-4 flex-1'}>
          <div className={'space-y-3'}>
            <div>
              <p className={'text-sm font-medium'}>Project Name</p>
              <p className={'text-sm text-fg-rev/50'}>UI Component Library</p>
            </div>
            <div>
              <p className={'text-sm font-medium'}>Status</p>
              <p className={'text-sm text-fg-rev/50'}>In Progress</p>
            </div>
            <div>
              <p className={'text-sm font-medium'}>Due Date</p>
              <p className={'text-sm text-fg-rev/50'}>December 31, 2025</p>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Confirm</Button>
          <DrawerClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Drawer direction={'right'}>
      <DrawerTrigger asChild>
        <Button variant={'outline'}>View Terms</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Terms and Conditions</DrawerTitle>
          <DrawerDescription>Please read carefully</DrawerDescription>
        </DrawerHeader>
        <div className={'p-4 overflow-y-auto flex-1'}>
          <div className={'space-y-4 text-sm'}>
            <div>
              <h3 className={'font-semibold mb-2'}>1. Introduction</h3>
              <p className={'text-fg-rev/70'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </div>
            <div>
              <h3 className={'font-semibold mb-2'}>2. Use License</h3>
              <p className={'text-fg-rev/70'}>
                Permission is granted to temporarily download one copy of the materials on our
                website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title.
              </p>
            </div>
            <div>
              <h3 className={'font-semibold mb-2'}>3. Disclaimer</h3>
              <p className={'text-fg-rev/70'}>
                The materials on our website are provided on an 'as is' basis. We make no
                warranties, expressed or implied, and hereby disclaim and negate all other
                warranties including, without limitation, implied warranties.
              </p>
            </div>
            <div>
              <h3 className={'font-semibold mb-2'}>4. Limitations</h3>
              <p className={'text-fg-rev/70'}>
                In no event shall we or our suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials.
              </p>
            </div>
            <div>
              <h3 className={'font-semibold mb-2'}>5. Accuracy of Materials</h3>
              <p className={'text-fg-rev/70'}>
                The materials appearing on our website could include technical, typographical, or
                photographic errors. We do not warrant that any of the materials on our website are
                accurate, complete, or current.
              </p>
            </div>
            <div>
              <h3 className={'font-semibold mb-2'}>6. Links</h3>
              <p className={'text-fg-rev/70'}>
                We have not reviewed all of the sites linked to our website and are not responsible
                for the contents of any such linked site. The inclusion of any link does not imply
                endorsement by us of the site.
              </p>
            </div>
            <div>
              <h3 className={'font-semibold mb-2'}>7. Modifications</h3>
              <p className={'text-fg-rev/70'}>
                We may revise these terms of service for our website at any time without notice. By
                using this website you are agreeing to be bound by the then current version of these
                terms of service.
              </p>
            </div>
            <div>
              <h3 className={'font-semibold mb-2'}>8. Governing Law</h3>
              <p className={'text-fg-rev/70'}>
                These terms and conditions are governed by and construed in accordance with the laws
                and you irrevocably submit to the exclusive jurisdiction of the courts in that
                location.
              </p>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Accept</Button>
          <DrawerClose asChild>
            <Button variant={'outline'}>Decline</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const MobileNavigation: Story = {
  render: () => (
    <Drawer direction={'left'}>
      <DrawerTrigger asChild>
        <Button variant={'outline'} size={'icon'}>
          <span className={'i-tabler-menu-2'} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>Navigate through the app</DrawerDescription>
        </DrawerHeader>
        <div className={'p-4 flex-1'}>
          <nav className={'space-y-1'}>
            <a
              href={'/'}
              className={'flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}
            >
              <span className={'i-tabler-home'} />
              <span>Home</span>
            </a>
            <a
              href={'/'}
              className={'flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}
            >
              <span className={'i-tabler-folder'} />
              <span>Projects</span>
            </a>
            <a
              href={'/'}
              className={'flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}
            >
              <span className={'i-tabler-users'} />
              <span>Team</span>
            </a>
            <a
              href={'/'}
              className={'flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}
            >
              <span className={'i-tabler-calendar'} />
              <span>Calendar</span>
            </a>
            <a
              href={'/'}
              className={'flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-fg-rev/5'}
            >
              <span className={'i-tabler-settings'} />
              <span>Settings</span>
            </a>
          </nav>
        </div>
        <DrawerFooter>
          <Button variant={'outline'} className={'w-full justify-start'}>
            <span className={'i-tabler-logout mr-2'} />
            Logout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const Responsive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery('(min-width: 640px)')

    function ProfileForm({ className }: { className?: string }) {
      return (
        <form className={className}>
          <div className={'grid items-start gap-4 p-4'}>
            <div className={'grid gap-2'}>
              <Label htmlFor={'email'}>Email</Label>
              <Input type={'email'} id={'email'} defaultValue={'user@example.com'} />
            </div>
            <div className={'grid gap-2'}>
              <Label htmlFor={'username'}>Username</Label>
              <Input id={'username'} defaultValue={'@username'} />
            </div>
            <div className={'grid gap-2'}>
              <Label htmlFor={'name'}>Name</Label>
              <Input id={'name'} defaultValue={'Your Name'} />
            </div>
          </div>
        </form>
      )
    }

    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant={'outline'}>Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className={'sm:max-w-[425px]'}>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'outline'}>Cancel</Button>
              </DialogClose>
              <Button>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant={'outline'}>Edit Profile</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className={'text-left'}>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DrawerDescription>
          </DrawerHeader>
          <ProfileForm className={'px-4'} />
          <DrawerFooter className={'pt-2'}>
            <Button>Save Changes</Button>
            <DrawerClose asChild>
              <Button variant={'outline'}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}
