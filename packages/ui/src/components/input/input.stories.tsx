import { useState } from 'react'

import { Button } from '@lesenelir/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@lesenelir/ui/card'
import { Label } from '@lesenelir/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'search',
        'tel',
        'url',
        'file',
        'date',
        'datetime-local',
        'time',
        'week',
        'month',
        'color',
        'range',
      ],
      description: 'The HTML input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the input read-only',
    },
    required: {
      control: 'boolean',
      description: 'Makes the input required',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Shows invalid state with rose-500 border and ring',
    },
    defaultValue: {
      control: 'text',
      description: 'Default value for the input',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
}

export const Password: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
      <div className={'relative w-[300px]'}>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder={'Enter password'}
          className={'pr-10'}
        />
        <Button
          type={'button'}
          variant={'outline'}
          size={'icon-sm'}
          onClick={() => setShowPassword(!showPassword)}
          className={
            'absolute right-1 top-1/2 -translate-y-1/2 size-7 min-w-0 min-h-0 border-none hover:bg-fg-rev/10'
          }
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <span className={showPassword ? 'i-tabler-eye-off' : 'i-tabler-eye'} />
        </Button>
      </div>
    )
  },
}

export const AllTypes: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Text</div>
        <Input type={'text'} placeholder={'Text input'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Email</div>
        <Input type={'email'} placeholder={'email@example.com'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Password</div>
        <Input type={'password'} placeholder={'Password'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Search</div>
        <Input type={'search'} placeholder={'Search...'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Tel</div>
        <Input type={'tel'} placeholder={'+1 (555) 000-0000'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>URL</div>
        <Input type={'url'} placeholder={'https://example.com'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Number</div>
        <Input type={'number'} placeholder={'123'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Date</div>
        <Input type={'date'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Date &amp; Time</div>
        <Input type={'datetime-local'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Week</div>
        <Input type={'week'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Month</div>
        <Input type={'month'} />
      </div>

      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Time</div>
        <Input type={'time'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Color</div>
        <Input type={'color'} defaultValue={'#3b82f6'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Range</div>
        <Input type={'range'} min={0} max={100} defaultValue={'50'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>File</div>
        <Input type={'file'} />
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Normal</div>
        <Input type={'text'} placeholder={'Normal input'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>With Default Value</div>
        <Input type={'text'} defaultValue={'Input with value'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Focused (click to focus)</div>
        <Input type={'text'} placeholder={'Click to see focus ring'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Disabled</div>
        <Input type={'text'} placeholder={'Disabled input'} disabled />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Read Only</div>
        <Input type={'text'} defaultValue={'Read-only value'} readOnly />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Invalid</div>
        <Input type={'email'} defaultValue={'invalid-email'} aria-invalid />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Required</div>
        <Input type={'text'} placeholder={'Required field'} required />
      </div>
    </div>
  ),
}

export const WithWidths: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 items-start'}>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Small (200px)</div>
        <Input type={'text'} placeholder={'Small input'} className={'w-[200px]'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Medium (300px)</div>
        <Input type={'text'} placeholder={'Medium input'} className={'w-[300px]'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Large (400px)</div>
        <Input type={'text'} placeholder={'Large input'} className={'w-[400px]'} />
      </div>
      <div className={'w-[500px]'}>
        <div className={'text-sm font-medium mb-1.5 text-fg-rev/80'}>Full Width</div>
        <Input type={'text'} placeholder={'Full width input'} className={'w-full'} />
      </div>
    </div>
  ),
}

export const ContactForm: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'name'} className={'text-sm font-medium'}>
              Name
            </Label>
            <Input id={'name'} type={'text'} placeholder={'Your name'} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'contact-email'} className={'text-sm font-medium'}>
              Email
            </Label>
            <Input id={'contact-email'} type={'email'} placeholder={'email@example.com'} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'phone'} className={'text-sm font-medium'}>
              Phone
            </Label>
            <Input id={'phone'} type={'tel'} placeholder={'+1 (555) 000-0000'} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'website'} className={'text-sm font-medium'}>
              Website
            </Label>
            <Input id={'website'} type={'url'} placeholder={'https://example.com'} />
          </div>
          <Button className={'w-full'}>Submit</Button>
        </form>
      </CardContent>
    </Card>
  ),
}

export const PaymentForm: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'amount'} className={'text-sm font-medium'}>
              Amount
            </Label>
            <Input id={'amount'} type={'number'} placeholder={'0.00'} min={0} step={'0.01'} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <Label htmlFor={'card'} className={'text-sm font-medium'}>
              Card Number
            </Label>
            <Input id={'card'} type={'text'} placeholder={'1234 5678 9012 3456'} maxLength={19} />
          </div>
          <div className={'grid grid-cols-2 gap-4'}>
            <div className={'flex flex-col gap-2'}>
              <Label htmlFor={'expiry'} className={'text-sm font-medium'}>
                Expiry
              </Label>
              <Input id={'expiry'} type={'text'} placeholder={'MM/YY'} maxLength={5} />
            </div>
            <div className={'flex flex-col gap-2'}>
              <Label htmlFor={'cvv'} className={'text-sm font-medium'}>
                CVV
              </Label>
              <Input id={'cvv'} type={'text'} placeholder={'123'} maxLength={4} />
            </div>
          </div>
          <Button className={'w-full'}>Pay Now</Button>
        </form>
      </CardContent>
    </Card>
  ),
}

export const SearchBar: Story = {
  render: () => (
    <div className={'w-[500px] flex flex-col gap-4'}>
      <div className={'relative'}>
        <span
          className={
            'absolute left-3 top-1/2 -translate-y-1/2 i-tabler-search text-fg-rev/50 pointer-events-none'
          }
        />
        <Input type={'search'} placeholder={'Search documentation...'} className={'pl-10 pr-16'} />
        <kbd
          className={
            'absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 text-xs border rounded bg-bg/50 text-fg-rev/50 pointer-events-none'
          }
        >
          ⌘K
        </kbd>
      </div>
    </div>
  ),
}

export const RegistrationForm: Story = {
  render: () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const passwordsMatch = password === confirmPassword || confirmPassword === ''
    const emailValid = email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    return (
      <Card className={'w-[400px]'}>
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className={'flex flex-col gap-4'}>
            <div className={'flex flex-col gap-2'}>
              <Label htmlFor={'reg-username'} className={'text-sm font-medium'}>
                Username <span className={'text-rose-500'}>*</span>
              </Label>
              <Input id={'reg-username'} type={'text'} placeholder={'username'} required />
            </div>
            <div className={'flex flex-col gap-2'}>
              <Label htmlFor={'reg-email'} className={'text-sm font-medium'}>
                Email <span className={'text-rose-500'}>*</span>
              </Label>
              <Input
                id={'reg-email'}
                type={'email'}
                placeholder={'email@example.com'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-invalid={!emailValid}
                required
              />
              {!emailValid && (
                <span className={'text-xs text-rose-500'}>Please enter a valid email address</span>
              )}
            </div>
            <div className={'flex flex-col gap-2'}>
              <Label htmlFor={'reg-password'} className={'text-sm font-medium'}>
                Password <span className={'text-rose-500'}>*</span>
              </Label>
              <Input
                id={'reg-password'}
                type={'password'}
                placeholder={'Enter password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={'flex flex-col gap-2'}>
              <Label htmlFor={'reg-confirm'} className={'text-sm font-medium'}>
                Confirm Password <span className={'text-rose-500'}>*</span>
              </Label>
              <Input
                id={'reg-confirm'}
                type={'password'}
                placeholder={'Confirm password'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                aria-invalid={!passwordsMatch}
                required
              />
              {!passwordsMatch && (
                <span className={'text-xs text-rose-500'}>Passwords do not match</span>
              )}
            </div>
            <div className={'flex flex-col gap-2'}>
              <Label htmlFor={'reg-dob'} className={'text-sm font-medium'}>
                Date of Birth
              </Label>
              <Input id={'reg-dob'} type={'date'} />
            </div>
            <Button className={'w-full'}>Create Account</Button>
          </form>
        </CardContent>
      </Card>
    )
  },
}

export const WithHelpText: Story = {
  render: () => (
    <div className={'w-[400px] flex flex-col gap-4'}>
      <div className={'flex flex-col gap-2'}>
        <Label htmlFor={'help-1'}>Username</Label>
        <Input id={'help-1'} type={'text'} placeholder={'username'} />
        <span className={'text-xs text-fg-rev/60'}>
          Your username must be 3-20 characters long and contain only letters, numbers, and
          underscores.
        </span>
      </div>
      <div className={'flex flex-col gap-2'}>
        <Label htmlFor={'help-2'}>Password</Label>
        <Input id={'help-2'} type={'password'} placeholder={'Enter password'} />
        <span className={'text-xs text-fg-rev/60'}>
          Use at least 8 characters with a mix of uppercase, lowercase, numbers, and symbols.
        </span>
      </div>
      <div className={'flex flex-col gap-2'}>
        <Label htmlFor={'help-3'}>API Key</Label>
        <Input id={'help-3'} type={'text'} placeholder={'sk_live_...'} readOnly />
        <span className={'text-xs text-fg-rev/60'}>
          Your API key is read-only. Contact support to regenerate.
        </span>
      </div>
    </div>
  ),
}
