import { Label } from '@lesenelir/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue={'comfortable'}>
      <div className={'flex items-center gap-3'}>
        <RadioGroupItem value={'default'} id={'r1'} />
        <Label htmlFor={'r1'} className={'cursor-pointer'}>
          Default
        </Label>
      </div>
      <div className={'flex items-center gap-3'}>
        <RadioGroupItem value={'comfortable'} id={'r2'} />
        <Label htmlFor={'r2'} className={'cursor-pointer'}>
          Comfortable
        </Label>
      </div>
      <div className={'flex items-center gap-3'}>
        <RadioGroupItem value={'compact'} id={'r3'} />
        <Label htmlFor={'r3'} className={'cursor-pointer'}>
          Compact
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue={'option1'} disabled>
      <div className={'flex items-center gap-3'}>
        <RadioGroupItem value={'option1'} id={'d1'} />
        <Label htmlFor={'d1'} className={'cursor-pointer'}>
          Option 1
        </Label>
      </div>
      <div className={'flex items-center gap-3'}>
        <RadioGroupItem value={'option2'} id={'d2'} />
        <Label htmlFor={'d2'} className={'cursor-pointer'}>
          Option 2
        </Label>
      </div>
      <div className={'flex items-center gap-3'}>
        <RadioGroupItem value={'option3'} id={'d3'} />
        <Label htmlFor={'d3'} className={'cursor-pointer'}>
          Option 3
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const Invalid: Story = {
  render: () => (
    <RadioGroup defaultValue={'option1'}>
      <div className={'flex items-center gap-3'}>
        <RadioGroupItem value={'option1'} id={'i1'} aria-invalid={true} />
        <Label htmlFor={'i1'} className={'cursor-pointer'}>
          Invalid Option
        </Label>
      </div>
      <div className={'flex items-center gap-3'}>
        <RadioGroupItem value={'option2'} id={'i2'} aria-invalid={true} />
        <Label htmlFor={'i2'} className={'cursor-pointer'}>
          Another Invalid Option
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const WithoutLabel: Story = {
  render: () => (
    <RadioGroup defaultValue={'option2'} className={'flex gap-4'}>
      <RadioGroupItem value={'option1'} />
      <RadioGroupItem value={'option2'} />
      <RadioGroupItem value={'option3'} />
    </RadioGroup>
  ),
}
