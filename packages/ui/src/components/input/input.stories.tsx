import { useState } from 'react'

import { Button } from '@lesenelir/ui/button'
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url', 'file', 'date'],
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
    leftSection: {
      control: false,
      description: 'Content to display on the left side of the input',
    },
    rightSection: {
      control: false,
      description: 'Content to display on the right side of the input',
    },
    leftSectionClassName: {
      control: 'text',
      description: 'Custom className for the left section',
    },
    rightSectionClassName: {
      control: 'text',
      description: 'Custom className for the right section',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
}

export const WithOutlineStyle: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    className: 'focus-within-outline focus-within:ring-0',
  },
}

export const WithDefaultValue: Story = {
  args: {
    type: 'text',
    defaultValue: 'Pre-filled value',
  },
}

// Input with Sections
export const WithLeftIcon: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    leftSection: <span className={'i-tabler-search'} />,
  },
}

export const WithRightIcon: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder={'Enter password'}
        rightSection={
          <Button
            type={'button'}
            variant={'outline'}
            size={'icon-sm'}
            onClick={() => setShowPassword(!showPassword)}
            className={'size-auto min-w-0 min-h-0 border-none hover:bg-transparent'}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <span className={showPassword ? 'i-tabler-eye-off' : 'i-tabler-eye'} />
          </Button>
        }
      />
    )
  },
}

export const WithBothSections: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter amount',
    leftSection: <span className={'text-fg-rev/70 text-sm'}>$</span>,
    rightSection: <span className={'text-fg-rev/70 text-sm'}>USD</span>,
  },
}

export const WithLeftText: Story = {
  args: {
    type: 'text',
    placeholder: 'your-site',
    leftSection: <span className={'text-fg-rev/70 text-sm'}>https://</span>,
  },
}

export const WithRightText: Story = {
  args: {
    type: 'text',
    placeholder: 'username',
    rightSection: <span className={'text-fg-rev/70 text-sm'}>@example.com</span>,
  },
}

// Input Types
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
    leftSection: <span className={'i-tabler-mail'} />,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    leftSection: <span className={'i-tabler-lock'} />,
    rightSection: <span className={'i-tabler-eye'} />,
  },
}

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    leftSection: <span className={'i-tabler-hash'} />,
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    leftSection: <span className={'i-tabler-search'} />,
    rightSection: <span className={'i-tabler-x'} />,
  },
}

export const Tel: Story = {
  args: {
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    leftSection: <span className={'i-tabler-phone'} />,
  },
}

export const Url: Story = {
  args: {
    type: 'url',
    placeholder: 'https://example.com',
    leftSection: <span className={'i-tabler-link'} />,
  },
}

export const File: Story = {
  args: {
    type: 'file',
  },
}

export const DateInput: Story = {
  args: {
    type: 'date',
    leftSection: <span className={'i-tabler-calendar'} />,
  },
}

// State Variants
export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
    leftSection: <span className={'i-tabler-user'} />,
  },
}

export const ReadOnly: Story = {
  args: {
    type: 'text',
    defaultValue: 'Read-only value',
    readOnly: true,
  },
}

export const Invalid: Story = {
  args: {
    type: 'email',
    defaultValue: 'invalid-email',
    placeholder: 'email@example.com',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
    leftSection: <span className={'i-tabler-mail'} />,
  },
}

export const Required: Story = {
  args: {
    type: 'text',
    placeholder: 'Required field',
    required: true,
    leftSection: <span className={'i-tabler-asterisk text-rose-500'} />,
  },
}

// Width Variants
export const Small: Story = {
  args: {
    type: 'text',
    placeholder: 'Small input',
    className: 'w-[200px]',
  },
}

export const Medium: Story = {
  args: {
    type: 'text',
    placeholder: 'Medium input',
    className: 'w-[300px]',
  },
}

export const Large: Story = {
  args: {
    type: 'text',
    placeholder: 'Large input',
    className: 'w-[400px]',
  },
}

export const FullWidth: Story = {
  render: () => (
    <div className={'w-[500px]'}>
      <Input type={'text'} placeholder={'Full width input'} className={'w-full'} />
    </div>
  ),
}

// Showcase Stories
export const AllTypes: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <Input type={'text'} placeholder={'Text input'} />
      <Input
        type={'email'}
        placeholder={'email@example.com'}
        leftSection={<span className={'i-tabler-mail'} />}
      />
      <Input
        type={'password'}
        placeholder={'Password'}
        leftSection={<span className={'i-tabler-lock'} />}
      />
      <Input
        type={'search'}
        placeholder={'Search...'}
        leftSection={<span className={'i-tabler-search'} />}
      />
      <Input
        type={'tel'}
        placeholder={'+1 (555) 000-0000'}
        leftSection={<span className={'i-tabler-phone'} />}
      />
      <Input
        type={'url'}
        placeholder={'https://example.com'}
        leftSection={<span className={'i-tabler-link'} />}
      />
      <Input
        type={'number'}
        placeholder={'123'}
        leftSection={<span className={'i-tabler-hash'} />}
      />
      <Input type={'date'} leftSection={<span className={'i-tabler-calendar'} />} />
      <Input type={'file'} />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <div>
        <div className={'text-sm font-medium mb-2'}>Normal</div>
        <Input type={'text'} placeholder={'Normal input'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-2'}>With Value</div>
        <Input type={'text'} defaultValue={'Input with value'} />
      </div>
      <div>
        <div className={'text-sm font-medium mb-2'}>Disabled</div>
        <Input type={'text'} placeholder={'Disabled input'} disabled />
      </div>
      <div>
        <div className={'text-sm font-medium mb-2'}>Read Only</div>
        <Input type={'text'} defaultValue={'Read-only value'} readOnly />
      </div>
      <div>
        <div className={'text-sm font-medium mb-2'}>Invalid</div>
        <Input
          type={'email'}
          defaultValue={'invalid-email'}
          pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'}
        />
      </div>
    </div>
  ),
}

export const WithSections: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <Input
        type={'search'}
        placeholder={'Search...'}
        leftSection={<span className={'i-tabler-search'} />}
      />
      <Input
        type={'text'}
        placeholder={'Username'}
        leftSection={<span className={'i-tabler-user'} />}
      />
      <Input
        type={'email'}
        placeholder={'Email'}
        leftSection={<span className={'i-tabler-mail'} />}
        rightSection={<span className={'i-tabler-check text-green-500'} />}
      />
      <Input
        type={'text'}
        placeholder={'Amount'}
        leftSection={<span className={'text-fg-rev/70 text-sm'}>$</span>}
        rightSection={<span className={'text-fg-rev/70 text-sm'}>USD</span>}
      />
      <Input
        type={'text'}
        placeholder={'your-site'}
        leftSection={<span className={'text-fg-rev/70 text-sm'}>https://</span>}
        rightSection={<span className={'text-fg-rev/70 text-sm'}>.com</span>}
      />
    </div>
  ),
}

export const WithWidths: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 items-start'}>
      <Input type={'text'} placeholder={'Small (200px)'} className={'w-[200px]'} />
      <Input type={'text'} placeholder={'Medium (300px)'} className={'w-[300px]'} />
      <Input type={'text'} placeholder={'Large (400px)'} className={'w-[400px]'} />
      <div className={'w-[500px]'}>
        <Input type={'text'} placeholder={'Full width'} className={'w-full'} />
      </div>
    </div>
  ),
}

export const FullShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8 w-[600px]'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Basic Inputs</h3>
        <div className={'flex flex-col gap-2'}>
          <Input type={'text'} placeholder={'Text input'} />
          <Input type={'text'} placeholder={'With value'} defaultValue={'Example value'} />
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Input Types</h3>
        <div className={'flex flex-col gap-2'}>
          <Input
            type={'email'}
            placeholder={'email@example.com'}
            leftSection={<span className={'i-tabler-mail'} />}
          />
          <Input
            type={'password'}
            placeholder={'Password'}
            leftSection={<span className={'i-tabler-lock'} />}
          />
          <Input
            type={'search'}
            placeholder={'Search...'}
            leftSection={<span className={'i-tabler-search'} />}
          />
          <Input
            type={'tel'}
            placeholder={'+1 (555) 000-0000'}
            leftSection={<span className={'i-tabler-phone'} />}
          />
          <Input type={'date'} leftSection={<span className={'i-tabler-calendar'} />} />
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>With Sections</h3>
        <div className={'flex flex-col gap-2'}>
          <Input
            type={'text'}
            placeholder={'Username'}
            leftSection={<span className={'i-tabler-user'} />}
          />
          <Input
            type={'text'}
            placeholder={'Password'}
            leftSection={<span className={'i-tabler-lock'} />}
            rightSection={<span className={'i-tabler-eye'} />}
          />
          <Input
            type={'text'}
            placeholder={'Amount'}
            leftSection={<span className={'text-fg-rev/70 text-sm'}>$</span>}
            rightSection={<span className={'text-fg-rev/70 text-sm'}>USD</span>}
          />
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>States</h3>
        <div className={'flex flex-col gap-2'}>
          <Input type={'text'} placeholder={'Normal'} />
          <Input type={'text'} placeholder={'Disabled'} disabled />
          <Input type={'text'} defaultValue={'Read-only'} readOnly />
          <Input
            type={'email'}
            defaultValue={'invalid-email'}
            pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'}
          />
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Widths</h3>
        <div className={'flex flex-col gap-2 items-start'}>
          <Input type={'text'} placeholder={'Small'} className={'w-[200px]'} />
          <Input type={'text'} placeholder={'Medium'} className={'w-[300px]'} />
          <Input type={'text'} placeholder={'Large'} className={'w-[400px]'} />
          <Input type={'text'} placeholder={'Full width'} className={'w-full'} />
        </div>
      </div>
    </div>
  ),
}

// Form Examples
export const LoginForm: Story = {
  render: () => (
    <div className={'w-[350px] flex flex-col gap-4 p-6 border rounded-lg'}>
      <div>
        <h2 className={'text-xl font-semibold mb-4'}>Login</h2>
      </div>
      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'email'} className={'text-sm font-medium'}>
          Email
        </label>
        <Input
          id={'email'}
          type={'email'}
          placeholder={'email@example.com'}
          leftSection={<span className={'i-tabler-mail'} />}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'password'} className={'text-sm font-medium'}>
          Password
        </label>
        <Input
          id={'password'}
          type={'password'}
          placeholder={'Enter password'}
          leftSection={<span className={'i-tabler-lock'} />}
          rightSection={<span className={'i-tabler-eye'} />}
        />
      </div>
    </div>
  ),
}

export const SearchForm: Story = {
  render: () => (
    <div className={'w-[500px] flex flex-col gap-4'}>
      <Input
        type={'search'}
        placeholder={'Search documentation...'}
        leftSection={<span className={'i-tabler-search'} />}
        rightSection={<span className={'text-fg-rev/50 text-xs'}>K</span>}
        className={'w-full'}
      />
    </div>
  ),
}

export const PaymentForm: Story = {
  render: () => (
    <div className={'w-[400px] flex flex-col gap-4 p-6 border rounded-lg'}>
      <div>
        <h2 className={'text-xl font-semibold mb-4'}>Payment Details</h2>
      </div>
      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'amount'} className={'text-sm font-medium'}>
          Amount
        </label>
        <Input
          id={'amount'}
          type={'number'}
          placeholder={'0.00'}
          leftSection={<span className={'text-fg-rev/70 text-sm'}>$</span>}
          rightSection={<span className={'text-fg-rev/70 text-sm'}>USD</span>}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'card'} className={'text-sm font-medium'}>
          Card Number
        </label>
        <Input
          id={'card'}
          type={'text'}
          placeholder={'1234 5678 9012 3456'}
          leftSection={<span className={'i-tabler-credit-card'} />}
        />
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'expiry'} className={'text-sm font-medium'}>
            Expiry
          </label>
          <Input id={'expiry'} type={'text'} placeholder={'MM/YY'} />
        </div>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'cvv'} className={'text-sm font-medium'}>
            CVV
          </label>
          <Input id={'cvv'} type={'text'} placeholder={'123'} />
        </div>
      </div>
    </div>
  ),
}
