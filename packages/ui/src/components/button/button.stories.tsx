import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'accentOutline', 'accentSolid', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'The size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    asChild: {
      control: 'boolean',
      description: 'Merges props onto immediate child (Radix Slot)',
    },
    leftSection: {
      control: false,
      description: 'Content to display on the left side of the button',
    },
    rightSection: {
      control: false,
      description: 'Content to display on the right side of the button',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variant Stories
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button',
  },
}

export const AccentOutline: Story = {
  args: {
    variant: 'accentOutline',
    size: 'default',
    children: 'Accent Outline',
  },
}

export const AccentSolid: Story = {
  args: {
    variant: 'accentSolid',
    size: 'default',
    children: 'Accent Solid',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button',
  },
}

// Size Variants
export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Button',
  },
}

// Icon Buttons
export const Icon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    children: <span className={'i-tabler-plus'} />,
  },
}

export const IconSmall: Story = {
  args: {
    variant: 'outline',
    size: 'icon-sm',
    children: <span className={'i-tabler-settings'} />,
  },
}

export const IconLarge: Story = {
  args: {
    variant: 'accentSolid',
    size: 'icon-lg',
    children: <span className={'i-tabler-heart'} />,
  },
}

// State Stories
export const Loading: Story = {
  args: {
    variant: 'default',
    size: 'default',
    isLoading: true,
    children: 'Loading',
  },
}

export const LoadingWithText: Story = {
  args: {
    variant: 'accentSolid',
    size: 'default',
    isLoading: true,
    children: 'Processing',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    children: 'Disabled Button',
  },
}

// Buttons with Sections
export const WithLeftIcon: Story = {
  args: {
    variant: 'default',
    size: 'default',
    leftSection: <span className={'i-tabler-download'} />,
    children: 'Download',
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    rightSection: <span className={'i-tabler-arrow-right'} />,
    children: 'Next',
  },
}

export const WithBothIcons: Story = {
  args: {
    variant: 'accentOutline',
    size: 'default',
    leftSection: <span className={'i-tabler-send'} />,
    rightSection: <span className={'i-tabler-check'} />,
    children: 'Send Message',
  },
}

export const WithLeftIconLoading: Story = {
  args: {
    variant: 'accentSolid',
    size: 'default',
    leftSection: <span className={'i-tabler-cloud-upload'} />,
    isLoading: true,
    children: 'Uploading',
  },
}

// AsChild Usage
export const AsChildLink: Story = {
  args: {
    variant: 'default',
    size: 'default',
    asChild: true,
    children: (
      <a href={'https://github.com'} target={'_blank'} rel={'noreferrer'}>
        GitHub
      </a>
    ),
  },
}

// Combination Stories
export const AllVariants: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex gap-2 items-center'}>
        <Button variant={'default'}>Default</Button>
        <Button variant={'outline'}>Outline</Button>
        <Button variant={'accentOutline'}>Accent Outline</Button>
        <Button variant={'accentSolid'}>Accent Solid</Button>
        <Button variant={'link'}>Link</Button>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex gap-2 items-center'}>
        <Button size={'sm'}>Small</Button>
        <Button size={'default'}>Default</Button>
        <Button size={'lg'}>Large</Button>
      </div>
      <div className={'flex gap-2 items-center'}>
        <Button size={'icon-sm'}>
          <span className={'i-tabler-star'} />
        </Button>
        <Button size={'icon'}>
          <span className={'i-tabler-star'} />
        </Button>
        <Button size={'icon-lg'}>
          <span className={'i-tabler-star'} />
        </Button>
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex gap-2 items-center'}>
        <Button>Normal</Button>
        <Button isLoading>Loading</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className={'flex gap-2 items-center'}>
        <Button variant={'outline'}>Normal</Button>
        <Button variant={'outline'} isLoading>
          Loading
        </Button>
        <Button variant={'outline'} disabled>
          Disabled
        </Button>
      </div>
      <div className={'flex gap-2 items-center'}>
        <Button variant={'accentSolid'}>Normal</Button>
        <Button variant={'accentSolid'} isLoading>
          Loading
        </Button>
        <Button variant={'accentSolid'} disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex gap-2 items-center'}>
        <Button leftSection={<span className={'i-tabler-search'} />}>Search</Button>
        <Button variant={'outline'} rightSection={<span className={'i-tabler-external-link'} />}>
          Open Link
        </Button>
        <Button variant={'accentSolid'} leftSection={<span className={'i-tabler-plus'} />}>
          Add New
        </Button>
      </div>
      <div className={'flex gap-2 items-center'}>
        <Button variant={'accentOutline'} leftSection={<span className={'i-tabler-trash'} />}>
          Delete
        </Button>
        <Button
          variant={'outline'}
          leftSection={<span className={'i-tabler-edit'} />}
          rightSection={<span className={'i-tabler-check'} />}
        >
          Edit & Save
        </Button>
        <Button
          variant={'accentSolid'}
          leftSection={<span className={'i-tabler-upload'} />}
          isLoading
        >
          Uploading
        </Button>
      </div>
    </div>
  ),
}

export const FullShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Variants</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Button variant={'default'}>Default</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'accentOutline'}>Accent Outline</Button>
          <Button variant={'accentSolid'}>Accent Solid</Button>
          <Button variant={'link'}>Link</Button>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Sizes</h3>
        <div className={'flex flex-wrap gap-2 items-center'}>
          <Button size={'sm'}>Small</Button>
          <Button size={'default'}>Default</Button>
          <Button size={'lg'}>Large</Button>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Icon Buttons</h3>
        <div className={'flex flex-wrap gap-2 items-center'}>
          <Button size={'icon-sm'}>
            <span className={'i-tabler-heart'} />
          </Button>
          <Button size={'icon'}>
            <span className={'i-tabler-heart'} />
          </Button>
          <Button size={'icon-lg'}>
            <span className={'i-tabler-heart'} />
          </Button>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>With Icons</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Button leftSection={<span className={'i-tabler-download'} />}>Download</Button>
          <Button variant={'outline'} rightSection={<span className={'i-tabler-arrow-right'} />}>
            Next
          </Button>
          <Button variant={'accentSolid'} leftSection={<span className={'i-tabler-plus'} />}>
            Add New
          </Button>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>States</h3>
        <div className={'flex flex-wrap gap-2'}>
          <Button>Normal</Button>
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
}
