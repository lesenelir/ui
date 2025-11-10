import { useState } from 'react'

import { Button } from '@lesenelir/ui/button'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './dropdown-menu'

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the dropdown menu',
    },
    onOpenChange: {
      control: false,
      description: 'Event handler called when the open state changes',
    },
    modal: {
      control: 'boolean',
      description:
        'The modality of the dropdown menu. When true, interaction with outside elements will be disabled',
    },
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>Open</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={'w-56'} align={'start'}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem tint={'accent'}>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={'outline'}>With Icons</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <span className={'i-tabler-user'} />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className={'i-tabler-settings'} />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className={'i-tabler-credit-card'} />
          Billing
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className={'i-tabler-help'} />
          Help
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className={'i-tabler-logout'} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithCheckboxItems: Story = {
  render: () => {
    const [showPanel, setShowPanel] = useState(true)
    const [showSidebar, setShowSidebar] = useState(false)
    const [showToolbar, setShowToolbar] = useState(true)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={'outline'}>View options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={'w-56'}>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            <span className={'i-tabler-layout-sidebar'} />
            Side Panel
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
            <span className={'i-tabler-layout-navbar'} />
            Sidebar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
            <span className={'i-tabler-tool'} />
            Toolbar
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithRadioItems: Story = {
  render: () => {
    const [theme, setTheme] = useState('light')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger>Theme: {theme}</DropdownMenuTrigger>
        <DropdownMenuContent className={'w-56'} onCloseAutoFocus={e => e.preventDefault()}>
          <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value={'light'}>
              <span className={'i-tabler-sun'} />
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={'dark'}>
              <span className={'i-tabler-moon'} />
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={'system'}>
              <span className={'i-tabler-device-desktop'} />
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithLabelsAndSeparators: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={'outline'}>Account Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={'w-56'} onCloseAutoFocus={e => e.preventDefault()}>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span className={'i-tabler-user'} />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className={'i-tabler-settings'} />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Workspace</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span className={'i-tabler-users'} />
            Team
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className={'i-tabler-credit-card'} />
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem tint={'rose'}>
          <span className={'i-tabler-logout'} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>Edit</DropdownMenuTrigger>
      <DropdownMenuContent className={'w-56'}>
        <DropdownMenuItem>
          <span className={'i-tabler-copy'} />
          Copy
          <DropdownMenuShortcut>C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className={'i-tabler-cut'} />
          Cut
          <DropdownMenuShortcut>X</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className={'i-tabler-clipboard'} />
          Paste
          <DropdownMenuShortcut>V</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span className={'i-tabler-arrow-forward-up'} />
            Transform
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Uppercase</DropdownMenuItem>
            <DropdownMenuItem>Lowercase</DropdownMenuItem>
            <DropdownMenuItem>Capitalize</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Title Case</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span className={'i-tabler-code'} />
            Format
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>JSON</DropdownMenuItem>
            <DropdownMenuItem>XML</DropdownMenuItem>
            <DropdownMenuItem>YAML</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const InsetItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>Options</DropdownMenuTrigger>
      <DropdownMenuContent className={'w-56'}>
        <DropdownMenuLabel>Normal Label</DropdownMenuLabel>
        <DropdownMenuItem>Normal Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className={'flex items-center gap-2'}>
          <span className={'i-tabler-world size-4'} />
          Inset Label
        </DropdownMenuLabel>
        <DropdownMenuItem inset>Inset Item 1</DropdownMenuItem>
        <DropdownMenuItem inset>Inset Item 2</DropdownMenuItem>
        <DropdownMenuItem inset>Inset Item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const ComplexExample: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true)
    const [emails, setEmails] = useState(false)
    const [status, setStatus] = useState('online')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={'flex items-center gap-2'}>
          <span className={'i-tabler-user-circle'} />
          Account Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent className={'w-64'}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span className={'i-tabler-user'} />
              Profile
              <DropdownMenuShortcut>P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className={'i-tabler-settings'} />
              Settings
              <DropdownMenuShortcut>S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={notifications} onCheckedChange={setNotifications}>
            <span className={'i-tabler-bell'} />
            Push Notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={emails} onCheckedChange={setEmails}>
            <span className={'i-tabler-mail'} />
            Email Updates
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
            <DropdownMenuRadioItem value={'online'}>
              <span className={'i-tabler-circle-filled text-green-500'} />
              Online
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={'away'}>
              <span className={'i-tabler-circle-filled text-yellow-500'} />
              Away
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={'busy'}>
              <span className={'i-tabler-circle-filled text-red-500'} />
              Busy
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator />

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span className={'i-tabler-users'} />
              Team
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <span className={'i-tabler-user-plus'} />
                Invite Members
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className={'i-tabler-users'} />
                Manage Team
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span className={'i-tabler-crown'} />
                Upgrade Plan
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <span className={'i-tabler-help'} />
            Help & Support
          </DropdownMenuItem>

          <DropdownMenuItem tint={'rose'}>
            <span className={'i-tabler-logout'} />
            Log out
            <DropdownMenuShortcut>Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
