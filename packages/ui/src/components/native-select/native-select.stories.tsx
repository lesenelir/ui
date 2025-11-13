import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from './native-select'

const meta = {
  title: 'UI/NativeSelect',
  component: NativeSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
    value: {
      control: 'text',
      description: 'The controlled value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    onChange: {
      control: false,
      description: 'Event handler called when the value changes',
    },
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value={''} disabled>
        Select a fruit
      </NativeSelectOption>
      <NativeSelectOption value={'apple'}>Apple</NativeSelectOption>
      <NativeSelectOption value={'banana'}>Banana</NativeSelectOption>
      <NativeSelectOption value={'blueberry'}>Blueberry</NativeSelectOption>
      <NativeSelectOption value={'grapes'}>Grapes</NativeSelectOption>
      <NativeSelectOption value={'pineapple'}>Pineapple</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithOptGroups: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value={''} disabled>
        Select a fruit
      </NativeSelectOption>
      <NativeSelectOptGroup label={'Tropical'}>
        <NativeSelectOption value={'pineapple'}>Pineapple</NativeSelectOption>
        <NativeSelectOption value={'mango'}>Mango</NativeSelectOption>
        <NativeSelectOption value={'papaya'}>Papaya</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label={'Berries'}>
        <NativeSelectOption value={'strawberry'}>Strawberry</NativeSelectOption>
        <NativeSelectOption value={'blueberry'}>Blueberry</NativeSelectOption>
        <NativeSelectOption value={'raspberry'}>Raspberry</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const MultipleGroups: Story = {
  render: () => (
    <NativeSelect className={'w-[220px]'}>
      <NativeSelectOption value={''} disabled>
        Select a programming language
      </NativeSelectOption>
      <NativeSelectOptGroup label={'Frontend'}>
        <NativeSelectOption value={'javascript'}>JavaScript</NativeSelectOption>
        <NativeSelectOption value={'typescript'}>TypeScript</NativeSelectOption>
        <NativeSelectOption value={'html'}>HTML</NativeSelectOption>
        <NativeSelectOption value={'css'}>CSS</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label={'Backend'}>
        <NativeSelectOption value={'python'}>Python</NativeSelectOption>
        <NativeSelectOption value={'java'}>Java</NativeSelectOption>
        <NativeSelectOption value={'go'}>Go</NativeSelectOption>
        <NativeSelectOption value={'rust'}>Rust</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label={'Database'}>
        <NativeSelectOption value={'sql'}>SQL</NativeSelectOption>
        <NativeSelectOption value={'mongodb'}>MongoDB</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const ScrollableList: Story = {
  render: () => (
    <NativeSelect className={'w-[280px]'}>
      <NativeSelectOption value={''} disabled>
        Select a timezone
      </NativeSelectOption>
      <NativeSelectOptGroup label={'North America'}>
        <NativeSelectOption value={'est'}>Eastern Standard Time (EST)</NativeSelectOption>
        <NativeSelectOption value={'cst'}>Central Standard Time (CST)</NativeSelectOption>
        <NativeSelectOption value={'mst'}>Mountain Standard Time (MST)</NativeSelectOption>
        <NativeSelectOption value={'pst'}>Pacific Standard Time (PST)</NativeSelectOption>
        <NativeSelectOption value={'akst'}>Alaska Standard Time (AKST)</NativeSelectOption>
        <NativeSelectOption value={'hst'}>Hawaii Standard Time (HST)</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label={'Europe & Africa'}>
        <NativeSelectOption value={'gmt'}>Greenwich Mean Time (GMT)</NativeSelectOption>
        <NativeSelectOption value={'cet'}>Central European Time (CET)</NativeSelectOption>
        <NativeSelectOption value={'eet'}>Eastern European Time (EET)</NativeSelectOption>
        <NativeSelectOption value={'west'}>Western European Summer Time (WEST)</NativeSelectOption>
        <NativeSelectOption value={'cat'}>Central Africa Time (CAT)</NativeSelectOption>
        <NativeSelectOption value={'eat'}>East Africa Time (EAT)</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label={'Asia'}>
        <NativeSelectOption value={'msk'}>Moscow Time (MSK)</NativeSelectOption>
        <NativeSelectOption value={'ist'}>India Standard Time (IST)</NativeSelectOption>
        <NativeSelectOption value={'cst_china'}>China Standard Time (CST)</NativeSelectOption>
        <NativeSelectOption value={'jst'}>Japan Standard Time (JST)</NativeSelectOption>
        <NativeSelectOption value={'kst'}>Korea Standard Time (KST)</NativeSelectOption>
        <NativeSelectOption value={'ist_indonesia'}>
          Indonesia Central Standard Time (WITA)
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label={'Australia & Pacific'}>
        <NativeSelectOption value={'awst'}>
          Australian Western Standard Time (AWST)
        </NativeSelectOption>
        <NativeSelectOption value={'acst'}>
          Australian Central Standard Time (ACST)
        </NativeSelectOption>
        <NativeSelectOption value={'aest'}>
          Australian Eastern Standard Time (AEST)
        </NativeSelectOption>
        <NativeSelectOption value={'nzst'}>New Zealand Standard Time (NZST)</NativeSelectOption>
        <NativeSelectOption value={'fjt'}>Fiji Time (FJT)</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label={'South America'}>
        <NativeSelectOption value={'art'}>Argentina Time (ART)</NativeSelectOption>
        <NativeSelectOption value={'bot'}>Bolivia Time (BOT)</NativeSelectOption>
        <NativeSelectOption value={'brt'}>Brasilia Time (BRT)</NativeSelectOption>
        <NativeSelectOption value={'clt'}>Chile Standard Time (CLT)</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('apple')

    return (
      <div className={'flex flex-col gap-4'}>
        <NativeSelect
          value={value}
          onChange={e => setValue(e.target.value)}
          className={'w-[180px]'}
        >
          <NativeSelectOption value={'apple'}>Apple</NativeSelectOption>
          <NativeSelectOption value={'banana'}>Banana</NativeSelectOption>
          <NativeSelectOption value={'orange'}>Orange</NativeSelectOption>
          <NativeSelectOption value={'grape'}>Grape</NativeSelectOption>
        </NativeSelect>
        <div className={'text-sm text-muted-foreground'}>Selected value: {value}</div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled className={'w-[180px]'}>
      <NativeSelectOption value={''} disabled>
        Select a fruit
      </NativeSelectOption>
      <NativeSelectOption value={'apple'}>Apple</NativeSelectOption>
      <NativeSelectOption value={'banana'}>Banana</NativeSelectOption>
      <NativeSelectOption value={'orange'}>Orange</NativeSelectOption>
    </NativeSelect>
  ),
}

export const DisabledOptions: Story = {
  render: () => (
    <NativeSelect className={'w-[180px]'}>
      <NativeSelectOption value={''} disabled>
        Select an option
      </NativeSelectOption>
      <NativeSelectOption value={'available1'}>Available Option 1</NativeSelectOption>
      <NativeSelectOption value={'unavailable'} disabled>
        Unavailable Option
      </NativeSelectOption>
      <NativeSelectOption value={'available2'}>Available Option 2</NativeSelectOption>
      <NativeSelectOption value={'soldout'} disabled>
        Sold Out
      </NativeSelectOption>
      <NativeSelectOption value={'available3'}>Available Option 3</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className={'flex flex-col gap-2'}>
      <label htmlFor={'invalid-native-select'} className={'text-sm font-medium'}>
        Required Field
      </label>
      <NativeSelect id={'invalid-native-select'} aria-invalid={true} className={'w-[200px]'}>
        <NativeSelectOption value={''} disabled>
          Please select an option
        </NativeSelectOption>
        <NativeSelectOption value={'option1'}>Option 1</NativeSelectOption>
        <NativeSelectOption value={'option2'}>Option 2</NativeSelectOption>
        <NativeSelectOption value={'option3'}>Option 3</NativeSelectOption>
      </NativeSelect>
      <p className={'text-xs text-rose-500'}>This field is required</p>
    </div>
  ),
}
