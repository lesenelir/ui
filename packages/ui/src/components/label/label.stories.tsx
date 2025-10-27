import { Card, CardContent, CardHeader, CardTitle } from '@lesenelir/ui/card'
import { Input } from '@lesenelir/ui/input'
import { Switch } from '@lesenelir/ui/switch'
import { Textarea } from '@lesenelir/ui/textarea'
import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './label'

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the label',
    },
    children: {
      control: 'text',
      description: 'The content of the label',
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    children: 'Label Text',
  },
}

export const WithIcon: Story = {
  render: () => (
    <Label>
      <span className={'i-tabler-user'} />
      Username
    </Label>
  ),
}

export const WithRequiredIndicator: Story = {
  render: () => (
    <Label>
      Email
      <span className={'text-rose-500'}>*</span>
    </Label>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div data-disabled={true} className={'group'}>
      <Label>Disabled Label</Label>
    </div>
  ),
}

// With Form Controls
export const WithInput: Story = {
  render: () => (
    <div className={'flex flex-col gap-2 w-[300px]'}>
      <Label htmlFor={'username'}>Username</Label>
      <Input id={'username'} type={'text'} placeholder={'Enter username'} />
    </div>
  ),
}

export const WithInputAndIcon: Story = {
  render: () => (
    <div className={'flex flex-col gap-2 w-[300px]'}>
      <Label htmlFor={'email'}>
        <span className={'i-tabler-mail'} />
        Email Address
      </Label>
      <Input id={'email'} type={'email'} placeholder={'email@example.com'} />
    </div>
  ),
}

export const WithInputRequired: Story = {
  render: () => (
    <div className={'flex flex-col gap-2 w-[300px]'}>
      <Label htmlFor={'password'}>
        <span className={'i-tabler-lock'} />
        Password
        <span className={'text-rose-500'}>*</span>
      </Label>
      <Input id={'password'} type={'password'} placeholder={'Enter password'} required />
    </div>
  ),
}

export const WithSwitch: Story = {
  render: () => (
    <div className={'flex items-center justify-between w-[300px]'}>
      <Label htmlFor={'notifications'}>
        <span className={'i-tabler-bell'} />
        Enable Notifications
      </Label>
      <Switch id={'notifications'} tint={'blue'} />
    </div>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <div className={'flex flex-col gap-2 w-[300px]'}>
      <Label htmlFor={'bio'}>
        <span className={'i-tabler-file-text'} />
        Biography
      </Label>
      <Textarea id={'bio'} placeholder={'Tell us about yourself...'} rows={4} />
    </div>
  ),
}

// State Variations
export const StateVariations: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 w-[300px]'}>
      <div className={'flex flex-col gap-2'}>
        <div className={'text-sm font-semibold'}>Normal</div>
        <Label htmlFor={'normal'}>Normal Label</Label>
        <Input id={'normal'} type={'text'} placeholder={'Normal input'} />
      </div>

      <div className={'flex flex-col gap-2'}>
        <div className={'text-sm font-semibold'}>Disabled (via group)</div>
        <div data-disabled={true} className={'group'}>
          <Label htmlFor={'disabled-group'}>Disabled Label</Label>
          <Input id={'disabled-group'} type={'text'} placeholder={'Disabled input'} disabled />
        </div>
      </div>

      {/* Important use case */}
      <div className={'flex flex-col gap-2'}>
        <div className={'text-sm font-semibold'}>Peer Disabled</div>
        <Label htmlFor={'peer-disabled'} className={'peer-disabled:cursor-not-allowed'}>
          Peer Disabled Label
        </Label>
        <Input
          id={'peer-disabled'}
          type={'text'}
          placeholder={'Disabled input'}
          disabled
          className={'peer'}
        />
      </div>
    </div>
  ),
}

// Icon Variations
export const IconVariations: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <Label>
        <span className={'i-tabler-user'} />
        Username
      </Label>
      <Label>
        <span className={'i-tabler-mail'} />
        Email
      </Label>
      <Label>
        <span className={'i-tabler-lock'} />
        Password
      </Label>
      <Label>
        <span className={'i-tabler-phone'} />
        Phone Number
      </Label>
      <Label>
        <span className={'i-tabler-calendar'} />
        Date of Birth
      </Label>
      <Label>
        <span className={'i-tabler-map-pin'} />
        Location
      </Label>
    </div>
  ),
}

// Form Examples
export const LoginForm: Story = {
  render: () => (
    <Card className={'w-[350px]'}>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>

      <CardContent className={'flex flex-col gap-4'}>
        <div className={'flex flex-col gap-2'}>
          <Label htmlFor={'login-email'}>
            <span className={'i-tabler-mail'} />
            Email
            <span className={'text-rose-500'}>*</span>
          </Label>
          <Input id={'login-email'} type={'email'} placeholder={'email@example.com'} required />
        </div>

        <div className={'flex flex-col gap-2'}>
          <Label htmlFor={'login-password'}>
            <span className={'i-tabler-lock'} />
            Password
            <span className={'text-rose-500'}>*</span>
          </Label>
          <Input id={'login-password'} type={'password'} placeholder={'Enter password'} required />
        </div>

        <div className={'flex items-center justify-between'}>
          <Label htmlFor={'remember'} className={'cursor-pointer'}>
            <Switch id={'remember'} tint={'accent'} />
            Remember me
          </Label>
        </div>
      </CardContent>
    </Card>
  ),
}

export const ProfileForm: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
      </CardHeader>

      <CardContent className={'flex flex-col gap-4'}>
        <div className={'flex flex-col gap-2'}>
          <Label htmlFor={'profile-name'}>
            <span className={'i-tabler-user'} />
            Full Name
            <span className={'text-rose-500'}>*</span>
          </Label>
          <Input id={'profile-name'} type={'text'} placeholder={'John Doe'} required />
        </div>

        <div className={'flex flex-col gap-2'}>
          <Label htmlFor={'profile-email'}>
            <span className={'i-tabler-mail'} />
            Email Address
          </Label>
          <Input id={'profile-email'} type={'email'} placeholder={'john@example.com'} />
        </div>

        <div className={'flex flex-col gap-2'}>
          <Label htmlFor={'profile-phone'}>
            <span className={'i-tabler-phone'} />
            Phone Number
          </Label>
          <Input id={'profile-phone'} type={'tel'} placeholder={'+1 (555) 000-0000'} />
        </div>

        <div className={'flex flex-col gap-2'}>
          <Label htmlFor={'profile-bio'}>
            <span className={'i-tabler-file-text'} />
            Biography
          </Label>
          <Textarea id={'profile-bio'} placeholder={'Tell us about yourself...'} rows={4} />
        </div>
      </CardContent>
    </Card>
  ),
}

// Showcase
export const FullShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8 w-[600px]'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Basic Labels</h3>
        <div className={'flex flex-col gap-3'}>
          <Label>Simple Label</Label>
          <Label>
            <span className={'i-tabler-user'} />
            Label with Icon
          </Label>
          <Label>
            Required Field
            <span className={'text-rose-500'}>*</span>
          </Label>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>With Input Fields</h3>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'showcase-username'}>
              <span className={'i-tabler-user'} />
              Username
            </Label>
            <Input id={'showcase-username'} type={'text'} placeholder={'Enter username'} />
          </div>

          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'showcase-email'}>
              <span className={'i-tabler-mail'} />
              Email
              <span className={'text-rose-500'}>*</span>
            </Label>
            <Input
              id={'showcase-email'}
              type={'email'}
              placeholder={'email@example.com'}
              required
            />
          </div>

          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'showcase-password'}>
              <span className={'i-tabler-lock'} />
              Password
            </Label>
            <Input id={'showcase-password'} type={'password'} placeholder={'Enter password'} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>With Switches</h3>
        <div className={'flex flex-col gap-3'}>
          <div className={'flex items-center justify-between'}>
            <Label htmlFor={'showcase-switch-1'}>
              <span className={'i-tabler-bell'} />
              Notifications
            </Label>
            <Switch id={'showcase-switch-1'} tint={'blue'} defaultChecked />
          </div>

          <div className={'flex items-center justify-between'}>
            <Label htmlFor={'showcase-switch-2'}>
              <span className={'i-tabler-moon'} />
              Dark Mode
            </Label>
            <Switch id={'showcase-switch-2'} tint={'purple'} />
          </div>

          <div className={'flex items-center justify-between'}>
            <Label htmlFor={'showcase-switch-3'}>
              <span className={'i-tabler-shield-lock'} />
              Two-Factor Auth
            </Label>
            <Switch id={'showcase-switch-3'} tint={'green'} defaultChecked />
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>States</h3>
        <div className={'flex flex-col gap-3'}>
          <Label>Normal Label</Label>
          <div data-disabled={true} className={'group'}>
            <Label>Disabled Label</Label>
          </div>
          <div>
            <Label htmlFor={'peer-example'} className={'peer-disabled:cursor-not-allowed'}>
              Peer Disabled Label
            </Label>
            <Input
              id={'peer-example'}
              type={'text'}
              disabled
              className={'peer mt-2'}
              placeholder={'Disabled input'}
            />
          </div>
        </div>
      </div>
    </div>
  ),
}
