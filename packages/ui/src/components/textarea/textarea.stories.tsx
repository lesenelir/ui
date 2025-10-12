import { useState } from 'react'

import { Button } from '@lesenelir/ui/button'
import { Input } from '@lesenelir/ui/input'
import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea',
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the textarea read-only',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
    },
    cols: {
      control: 'number',
      description: 'Number of visible text columns',
    },
    required: {
      control: 'boolean',
      description: 'Makes the textarea required',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum length of the text',
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
}

export const WithOutlineStyle: Story = {
  args: {
    placeholder: 'Enter your text here...',
    className: 'focus-within-outline focus-within:ring-0',
  },
}

export const ResizeNone: Story = {
  args: {
    placeholder: 'This textarea cannot be resized',
    className: 'resize-none',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'This is some pre-filled content in the textarea.\n\nYou can edit this text.',
  },
}

// Row Variants
export const WithRows: Story = {
  args: {
    placeholder: 'This textarea has 5 rows',
    rows: 5,
  },
}

// State Variants
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 'This is read-only content that cannot be edited.',
    readOnly: true,
  },
}

export const Invalid: Story = {
  args: {
    defaultValue: 'This content is invalid',
    placeholder: 'Enter valid text...',
    'aria-invalid': true,
  },
}

export const MaxLength: Story = {
  render: () => {
    const [value, setValue] = useState<string>('')
    const maxLength = 200

    return (
      <div className={'flex flex-col gap-2 w-[400px]'}>
        <Textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={'Enter your message (max 200 characters)...'}
          maxLength={maxLength}
          rows={5}
        />
        <div className={'text-sm text-fg-rev/70 text-right'}>
          {value.length} / {maxLength}
        </div>
      </div>
    )
  },
}

// Form Examples
export const FeedbackForm: Story = {
  render: () => {
    const [feedback, setFeedback] = useState<string>('')
    const maxLength = 500

    return (
      <div className={'w-[500px] flex flex-col gap-4 p-6 border rounded-lg'}>
        <div>
          <h2 className={'text-xl font-semibold mb-2'}>Share Your Feedback</h2>
          <p className={'text-sm text-fg-rev/70'}>
            We'd love to hear your thoughts on how we can improve.
          </p>
        </div>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'feedback'} className={'text-sm font-medium'}>
            Your Feedback
          </label>
          <Textarea
            id={'feedback'}
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder={'Tell us what you think...'}
            rows={6}
            maxLength={maxLength}
            required
          />
          <div className={'text-sm text-fg-rev/70 text-right'}>
            {feedback.length} / {maxLength} characters
          </div>
        </div>
        <div className={'flex gap-2 justify-end'}>
          <Button type={'button'} variant={'outline'} className={'text-sm'}>
            Cancel
          </Button>
          <Button
            type={'submit'}
            variant={'default'}
            tint={'accent'}
            className={'text-sm'}
            disabled={feedback.trim().length === 0}
          >
            Submit Feedback
          </Button>
        </div>
      </div>
    )
  },
}

export const MultiFieldForm: Story = {
  render: () => (
    <div className={'w-[500px] flex flex-col gap-4 p-6 border rounded-lg'}>
      <div>
        <h2 className={'text-xl font-semibold mb-4'}>Create New Post</h2>
      </div>
      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'title'} className={'text-sm font-medium'}>
          Title <span className={'text-rose-500'}>*</span>
        </label>
        <Input
          id={'title'}
          type={'text'}
          placeholder={'Enter post title'}
          className={'w-full'}
          required
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'excerpt'} className={'text-sm font-medium'}>
          Excerpt
        </label>
        <Textarea
          id={'excerpt'}
          placeholder={'Brief summary of your post...'}
          rows={3}
          className={'w-full'}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'content'} className={'text-sm font-medium'}>
          Content <span className={'text-rose-500'}>*</span>
        </label>
        <Textarea
          id={'content'}
          placeholder={'Write your post content...'}
          rows={8}
          className={'w-full'}
          required
        />
      </div>
      <div className={'flex gap-2 justify-end'}>
        <Button type={'button'} variant={'outline'} className={'text-sm'}>
          Save Draft
        </Button>
        <Button type={'submit'} variant={'default'} tint={'accent'} className={'text-sm'}>
          Publish
        </Button>
      </div>
    </div>
  ),
}
