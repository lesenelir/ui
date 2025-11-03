import { Button } from '@lesenelir/ui/button'
import { Input } from '@lesenelir/ui/input'
import { Label } from '@lesenelir/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the dialog is open',
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a basic dialog example with a title and description.
          </DialogDescription>
        </DialogHeader>
        <div className={'p-4'}>
          <p className={'text-sm'}>Dialog content goes here.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
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
            <div className={'space-y-2'}>
              <Label htmlFor={'bio'}>Bio</Label>
              <Input id={'bio'} placeholder={'Tell us about yourself'} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>Show Dialog with Actions</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Complete Your Action</DialogTitle>
          <DialogDescription>
            This dialog demonstrates a full structure with header, content, and footer sections.
          </DialogDescription>
        </DialogHeader>
        <div className={'p-4'}>
          <p className={'text-sm mb-4'}>Review the information below and choose an action.</p>
          <div className={'rounded-md border p-3 text-sm'}>
            <p className={'font-medium mb-1'}>Important Information</p>
            <p className={'text-fg-muted'}>
              This action cannot be undone. Please review carefully before proceeding.
            </p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>Open Without Close Button</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No Close Button</DialogTitle>
          <DialogDescription>
            This dialog doesn't have a close button in the corner. You must use the action buttons
            below.
          </DialogDescription>
        </DialogHeader>
        <div className={'p-4'}>
          <p className={'text-sm'}>
            This pattern is useful when you want to force users to make an explicit choice.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Close</Button>
          </DialogClose>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'default'} tint={'red'}>
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className={'p-4'}>
          <div className={'rounded-md bg-destructive/10 text-sm text-destructive'}>
            <p className={'font-medium mb-1'}>Warning</p>
            <p>All of your data will be permanently removed. This action is irreversible.</p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DialogClose>
          <Button variant={'default'} tint={'red'}>
            Delete Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>View Terms of Service</Button>
      </DialogTrigger>
      <DialogContent className={'max-h-[80vh]'}>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read our terms of service carefully before proceeding.
          </DialogDescription>
        </DialogHeader>
        <div className={'p-4 space-y-4 overflow-y-auto max-h-[50vh]'}>
          <div>
            <h3 className={'font-semibold mb-2'}>1. Acceptance of Terms</h3>
            <p className={'text-sm text-fg-muted'}>
              By accessing and using this service, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </div>
          <div>
            <h3 className={'font-semibold mb-2'}>2. Use License</h3>
            <p className={'text-sm text-fg-muted mb-2'}>
              Permission is granted to temporarily download one copy of the materials on our website
              for personal, non-commercial transitory viewing only.
            </p>
            <ul className={'list-disc list-inside space-y-1 text-sm text-fg-muted'}>
              <li>This is the grant of a license, not a transfer of title</li>
              <li>You may not modify or copy the materials</li>
              <li>You may not use the materials for any commercial purpose</li>
              <li>You may not attempt to decompile or reverse engineer any software</li>
            </ul>
          </div>
          <div>
            <h3 className={'font-semibold mb-2'}>3. Disclaimer</h3>
            <p className={'text-sm text-fg-muted'}>
              The materials on our website are provided on an 'as is' basis. We make no warranties,
              expressed or implied, and hereby disclaim and negate all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property.
            </p>
          </div>
          <div>
            <h3 className={'font-semibold mb-2'}>4. Limitations</h3>
            <p className={'text-sm text-fg-muted'}>
              In no event shall we or our suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on our website.
            </p>
          </div>
          <div>
            <h3 className={'font-semibold mb-2'}>5. Privacy Policy</h3>
            <p className={'text-sm text-fg-muted'}>
              Your use of our website is also governed by our Privacy Policy. Please review our
              Privacy Policy, which also governs the site and informs users of our data collection
              practices.
            </p>
          </div>
          <div>
            <h3 className={'font-semibold mb-2'}>6. Revisions</h3>
            <p className={'text-sm text-fg-muted'}>
              The materials appearing on our website could include technical, typographical, or
              photographic errors. We do not warrant that any of the materials on its website are
              accurate, complete or current.
            </p>
          </div>
          <div>
            <h3 className={'font-semibold mb-2'}>7. Governing Law</h3>
            <p className={'text-sm text-fg-muted'}>
              These terms and conditions are governed by and construed in accordance with the laws
              and you irrevocably submit to the exclusive jurisdiction of the courts in that
              location.
            </p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Decline</Button>
          </DialogClose>
          <Button>Accept Terms</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>Open Custom Dialog</Button>
      </DialogTrigger>
      <DialogContent className={'sm:max-w-md'}>
        <DialogHeader>
          <DialogTitle>Share this link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <div className={'p-4'}>
          <div className={'flex items-center gap-2'}>
            <Input readOnly value={'https://ui.lesenelir.me/share/abc123'} />
            <Button size={'sm'} className={'shrink-0'}>
              Copy
            </Button>
          </div>
        </div>
        <DialogFooter className={'sm:justify-start'}>
          <DialogClose asChild>
            <Button variant={'outline'}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const AlertStyle: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>Show Alert</Button>
      </DialogTrigger>
      <DialogContent className={'sm:max-w-sm'}>
        <DialogHeader>
          <DialogTitle className={'flex items-center gap-2'}>
            <span className={'i-tabler-alert-circle text-warning'} />
            Warning
          </DialogTitle>
          <DialogDescription>Your session is about to expire due to inactivity.</DialogDescription>
        </DialogHeader>
        <div className={'p-4'}>
          <p className={'text-sm'}>
            You will be automatically logged out in 5 minutes. Would you like to continue your
            session?
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Logout</Button>
          </DialogClose>
          <Button>Continue Session</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
