import { Card, CardContent, CardHeader, CardTitle } from '@lesenelir/ui/card'
import { Label } from '@lesenelir/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the checkbox',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
  },
}

// State Variations
export const StateVariations: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center gap-2'}>
        <Checkbox checked={false} />
        <span className={'text-sm'}>Unchecked</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Checkbox checked={true} />
        <span className={'text-sm'}>Checked</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Checkbox disabled checked={false} />
        <span className={'text-sm'}>Disabled Unchecked</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Checkbox disabled checked={true} />
        <span className={'text-sm'}>Disabled Checked</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Checkbox aria-invalid={true} checked={false} />
        <span className={'text-sm'}>Invalid Unchecked</span>
      </div>
      <div className={'flex items-center gap-2'}>
        <Checkbox aria-invalid={true} checked={true} />
        <span className={'text-sm'}>Invalid Checked</span>
      </div>
    </div>
  ),
}

// With Labels
export const WithLabels: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center gap-2'}>
        <Checkbox id={'terms'} defaultChecked />
        <Label htmlFor={'terms'} className={'cursor-pointer'}>
          Accept terms and conditions
        </Label>
      </div>
      <div className={'flex items-center gap-2'}>
        <Checkbox id={'newsletter'} />
        <Label htmlFor={'newsletter'} className={'cursor-pointer'}>
          Subscribe to newsletter
        </Label>
      </div>
      <div className={'flex items-center gap-2'}>
        <Checkbox id={'updates'} defaultChecked />
        <Label htmlFor={'updates'} className={'cursor-pointer'}>
          Receive product updates
        </Label>
      </div>
    </div>
  ),
}

// Form Example
export const FormExample: Story = {
  render: () => (
    <Card className={'w-96'}>
      <CardHeader>
        <CardTitle>Privacy Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={'flex flex-col gap-3'}>
          <div className={'flex items-start gap-2'}>
            <Checkbox id={'analytics'} defaultChecked className={'mt-0.5'} />
            <div className={'flex flex-col gap-1'}>
              <Label htmlFor={'analytics'} className={'cursor-pointer'}>
                Analytics Cookies
              </Label>
              <p className={'text-xs text-fg/60'}>
                Help us improve our service by collecting usage data
              </p>
            </div>
          </div>
          <div className={'flex items-start gap-2'}>
            <Checkbox id={'marketing'} className={'mt-0.5'} />
            <div className={'flex flex-col gap-1'}>
              <Label htmlFor={'marketing'} className={'cursor-pointer'}>
                Marketing Cookies
              </Label>
              <p className={'text-xs text-fg/60'}>Receive personalized ads and recommendations</p>
            </div>
          </div>
          <div className={'flex items-start gap-2'}>
            <Checkbox id={'required'} defaultChecked disabled className={'mt-0.5'} />
            <div className={'flex flex-col gap-1'}>
              <Label htmlFor={'required'} className={'cursor-pointer'}>
                Required Cookies
              </Label>
              <p className={'text-xs text-fg/60'}>Essential for the website to function properly</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}
