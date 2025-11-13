import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'

const meta = {
  title: 'UI/Select',
  component: Select,
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
    onValueChange: {
      control: false,
      description: 'Event handler called when the value changes',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className={'w-[180px]'}>
        <SelectValue placeholder={'Select a fruit'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value={'apple'}>Apple</SelectItem>
          <SelectItem value={'banana'}>Banana</SelectItem>
          <SelectItem value={'blueberry'}>Blueberry</SelectItem>
          <SelectItem value={'grapes'}>Grapes</SelectItem>
          <SelectItem value={'pineapple'}>Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('apple')

    return (
      <div className={'flex flex-col gap-4'}>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className={'w-[180px]'}>
            <SelectValue placeholder={'Select a fruit'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'apple'}>Apple</SelectItem>
            <SelectItem value={'banana'}>Banana</SelectItem>
            <SelectItem value={'orange'}>Orange</SelectItem>
            <SelectItem value={'grape'}>Grape</SelectItem>
          </SelectContent>
        </Select>
        <div className={'text-sm text-muted-foreground'}>Selected value: {value}</div>
      </div>
    )
  },
}

export const WithIcons: Story = {
  render: () => (
    <Select>
      <SelectTrigger className={'w-[200px]'}>
        <SelectValue placeholder={'Select a framework'} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={'react'}>
          <span className={'i-tabler-brand-react'} />
          React
        </SelectItem>
        <SelectItem value={'vue'}>
          <span className={'i-tabler-brand-vue'} />
          Vue
        </SelectItem>
        <SelectItem value={'angular'}>
          <span className={'i-tabler-brand-angular'} />
          Angular
        </SelectItem>
        <SelectItem value={'svelte'}>
          <span className={'i-tabler-brand-svelte'} />
          Svelte
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithSeparators: Story = {
  render: () => (
    <Select>
      <SelectTrigger className={'w-[200px]'}>
        <SelectValue placeholder={'Select an option'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Popular</SelectLabel>
          <SelectItem value={'option1'}>Option 1</SelectItem>
          <SelectItem value={'option2'}>Option 2</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Others</SelectLabel>
          <SelectItem value={'option3'}>Option 3</SelectItem>
          <SelectItem value={'option4'}>Option 4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const MultipleGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className={'w-[220px]'}>
        <SelectValue placeholder={'Select a programming language'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frontend</SelectLabel>
          <SelectItem value={'javascript'}>JavaScript</SelectItem>
          <SelectItem value={'typescript'}>TypeScript</SelectItem>
          <SelectItem value={'html'}>HTML</SelectItem>
          <SelectItem value={'css'}>CSS</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Backend</SelectLabel>
          <SelectItem value={'python'}>Python</SelectItem>
          <SelectItem value={'java'}>Java</SelectItem>
          <SelectItem value={'go'}>Go</SelectItem>
          <SelectItem value={'rust'}>Rust</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Database</SelectLabel>
          <SelectItem value={'sql'}>SQL</SelectItem>
          <SelectItem value={'mongodb'}>MongoDB</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const ScrollableList: Story = {
  render: () => (
    <Select>
      <SelectTrigger className={'w-[200px]'}>
        <SelectValue placeholder={'Select a country'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value={'est'}>Eastern Standard Time (EST)</SelectItem>
          <SelectItem value={'cst'}>Central Standard Time (CST)</SelectItem>
          <SelectItem value={'mst'}>Mountain Standard Time (MST)</SelectItem>
          <SelectItem value={'pst'}>Pacific Standard Time (PST)</SelectItem>
          <SelectItem value={'akst'}>Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value={'hst'}>Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value={'gmt'}>Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value={'cet'}>Central European Time (CET)</SelectItem>
          <SelectItem value={'eet'}>Eastern European Time (EET)</SelectItem>
          <SelectItem value={'west'}>Western European Summer Time (WEST)</SelectItem>
          <SelectItem value={'cat'}>Central Africa Time (CAT)</SelectItem>
          <SelectItem value={'eat'}>East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value={'msk'}>Moscow Time (MSK)</SelectItem>
          <SelectItem value={'ist'}>India Standard Time (IST)</SelectItem>
          <SelectItem value={'cst_china'}>China Standard Time (CST)</SelectItem>
          <SelectItem value={'jst'}>Japan Standard Time (JST)</SelectItem>
          <SelectItem value={'kst'}>Korea Standard Time (KST)</SelectItem>
          <SelectItem value={'ist_indonesia'}>Indonesia Central Standard Time (WITA)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value={'awst'}>Australian Western Standard Time (AWST)</SelectItem>
          <SelectItem value={'acst'}>Australian Central Standard Time (ACST)</SelectItem>
          <SelectItem value={'aest'}>Australian Eastern Standard Time (AEST)</SelectItem>
          <SelectItem value={'nzst'}>New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value={'fjt'}>Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value={'art'}>Argentina Time (ART)</SelectItem>
          <SelectItem value={'bot'}>Bolivia Time (BOT)</SelectItem>
          <SelectItem value={'brt'}>Brasilia Time (BRT)</SelectItem>
          <SelectItem value={'clt'}>Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className={'w-[180px]'}>
        <SelectValue placeholder={'Select a fruit'} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={'apple'}>Apple</SelectItem>
        <SelectItem value={'banana'}>Banana</SelectItem>
        <SelectItem value={'orange'}>Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const DisabledItem: Story = {
  render: () => (
    <Select>
      <SelectTrigger className={'w-[180px]'}>
        <SelectValue placeholder={'Select an option'} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={'available1'}>Available Option 1</SelectItem>
        <SelectItem value={'unavailable'} disabled>
          Unavailable Option
        </SelectItem>
        <SelectItem value={'available2'}>Available Option 2</SelectItem>
        <SelectItem value={'soldout'} disabled>
          Sold Out
        </SelectItem>
        <SelectItem value={'available3'}>Available Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className={'flex flex-col gap-2'}>
      <label htmlFor={'invalid-select'} className={'text-sm font-medium'}>
        Required Field
      </label>
      <Select>
        <SelectTrigger id={'invalid-select'} aria-invalid={true} className={'w-[200px]'}>
          <SelectValue placeholder={'Please select an option'} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={'option1'}>Option 1</SelectItem>
          <SelectItem value={'option2'}>Option 2</SelectItem>
          <SelectItem value={'option3'}>Option 3</SelectItem>
        </SelectContent>
      </Select>
      <p className={'text-xs text-rose-500'}>This field is required</p>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className={'flex flex-col gap-6'}>
      <div>
        <h3 className={'mb-3 text-sm font-medium text-muted-foreground'}>Small</h3>
        <Select>
          <SelectTrigger size={'sm'} className={'w-[160px]'}>
            <SelectValue placeholder={'Small select'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'1'}>Option 1</SelectItem>
            <SelectItem value={'2'}>Option 2</SelectItem>
            <SelectItem value={'3'}>Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className={'mb-3 text-sm font-medium text-muted-foreground'}>Default</h3>
        <Select>
          <SelectTrigger size={'default'} className={'w-[180px]'}>
            <SelectValue placeholder={'Default select'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'1'}>Option 1</SelectItem>
            <SelectItem value={'2'}>Option 2</SelectItem>
            <SelectItem value={'3'}>Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const AllTints: Story = {
  render: () => (
    <div className={'flex flex-col gap-6'}>
      <div>
        <h3 className={'mb-3 text-sm font-medium text-muted-foreground'}>Default Tint</h3>
        <Select defaultValue={'2'}>
          <SelectTrigger className={'w-[180px]'}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'1'} tint={'default'}>
              Option 1
            </SelectItem>
            <SelectItem value={'2'} tint={'default'}>
              Option 2 (Selected)
            </SelectItem>
            <SelectItem value={'3'} tint={'default'}>
              Option 3
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className={'mb-3 text-sm font-medium text-muted-foreground'}>Accent Tint</h3>
        <Select defaultValue={'2'}>
          <SelectTrigger className={'w-[180px]'}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'1'} tint={'accent'}>
              Option 1
            </SelectItem>
            <SelectItem value={'2'} tint={'accent'}>
              Option 2 (Selected)
            </SelectItem>
            <SelectItem value={'3'} tint={'accent'}>
              Option 3
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className={'mb-3 text-sm font-medium text-muted-foreground'}>Rose Tint</h3>
        <Select defaultValue={'2'}>
          <SelectTrigger className={'w-[180px]'}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'1'} tint={'rose'}>
              Option 1
            </SelectItem>
            <SelectItem value={'2'} tint={'rose'}>
              Option 2 (Selected)
            </SelectItem>
            <SelectItem value={'3'} tint={'rose'}>
              Option 3
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}
