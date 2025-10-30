import type { Meta, StoryObj } from '@storybook/react'

import { Separator } from './separator'

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative (not announced by screen readers)',
    },
    className: {
      control: 'text',
      description: 'Custom className for styling the separator',
    },
    ref: {
      control: false,
      description: 'Forwarded ref to the root element',
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: args => (
    <div className={'w-96'}>
      <Separator {...args} />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className={'flex h-12 items-center gap-4'}>
      <div className={'text-sm'}>Left content</div>
      <Separator orientation={'vertical'} />
      <div className={'text-sm'}>Right content</div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className={'w-64 space-y-0'}>
      <div className={'py-3 text-sm'}>Dashboard</div>
      <Separator />
      <div className={'py-3 text-sm'}>Projects</div>
      <Separator />
      <div className={'py-3 text-sm'}>Team</div>
      <Separator />
      <div className={'py-3 text-sm'}>Settings</div>
    </div>
  ),
}

export const CustomColor: Story = {
  render: () => (
    <div className={'w-96 space-y-6'}>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>Default (bg-fg-rev/20)</p>
        <Separator />
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>Red</p>
        <Separator className={'bg-red-500'} />
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>Blue</p>
        <Separator className={'bg-blue-500'} />
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>Green</p>
        <Separator className={'bg-green-500'} />
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>Orange</p>
        <Separator className={'bg-orange-500'} />
      </div>
    </div>
  ),
}

export const CustomThickness: Story = {
  render: () => (
    <div className={'w-96 space-y-6'}>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>Default (1px)</p>
        <Separator />
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>2px</p>
        <Separator className={'h-0.5'} />
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>4px</p>
        <Separator className={'h-1'} />
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-2'}>8px</p>
        <Separator className={'h-2'} />
      </div>
    </div>
  ),
}

export const CustomSpacing: Story = {
  render: () => (
    <div className={'max-w-md space-y-8'}>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-4'}>Tight spacing (my-2)</p>
        <div className={'space-y-2'}>
          <div className={'text-sm'}>Item 1</div>
          <Separator className={'my-2'} />
          <div className={'text-sm'}>Item 2</div>
          <Separator className={'my-2'} />
          <div className={'text-sm'}>Item 3</div>
        </div>
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-4'}>Normal spacing (my-4)</p>
        <div>
          <div className={'text-sm'}>Item 1</div>
          <Separator className={'my-4'} />
          <div className={'text-sm'}>Item 2</div>
          <Separator className={'my-4'} />
          <div className={'text-sm'}>Item 3</div>
        </div>
      </div>
      <div>
        <p className={'text-xs text-fg-rev/60 mb-4'}>Wide spacing (my-8)</p>
        <div>
          <div className={'text-sm'}>Item 1</div>
          <Separator className={'my-8'} />
          <div className={'text-sm'}>Item 2</div>
        </div>
      </div>
    </div>
  ),
}

export const FullShowcase: Story = {
  render: () => (
    <div className={'max-w-4xl space-y-12 p-8'}>
      {/* Orientations */}
      <section>
        <h2 className={'text-xl font-bold mb-6'}>Orientations</h2>
        <div className={'space-y-8'}>
          <div>
            <h3 className={'text-sm font-semibold mb-4 text-fg-rev/70'}>Horizontal</h3>
            <div className={'w-96'}>
              <Separator orientation={'horizontal'} />
            </div>
          </div>
          <div>
            <h3 className={'text-sm font-semibold mb-4 text-fg-rev/70'}>Vertical</h3>
            <div className={'flex h-12 items-center gap-4'}>
              <div className={'text-sm'}>Left</div>
              <Separator orientation={'vertical'} />
              <div className={'text-sm'}>Right</div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Use Cases */}
      <section>
        <h2 className={'text-xl font-bold mb-6'}>Use Cases</h2>
        <div className={'space-y-8'}>
          <div>
            <h3 className={'text-sm font-semibold mb-4 text-fg-rev/70'}>Content Sections</h3>
            <div className={'max-w-md space-y-4'}>
              <div>
                <p className={'text-sm font-medium mb-1'}>Introduction</p>
                <p className={'text-xs text-fg-rev/60'}>Opening paragraph with context</p>
              </div>
              <Separator />
              <div>
                <p className={'text-sm font-medium mb-1'}>Main Content</p>
                <p className={'text-xs text-fg-rev/60'}>The primary information</p>
              </div>
              <Separator />
              <div>
                <p className={'text-sm font-medium mb-1'}>Conclusion</p>
                <p className={'text-xs text-fg-rev/60'}>Summary and final thoughts</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className={'text-sm font-semibold mb-4 text-fg-rev/70'}>List Items</h3>
            <div className={'w-64 border border-fg-rev/10 rounded-lg overflow-hidden'}>
              <div className={'px-4 py-3 text-sm hover:bg-bg-rev/5'}>Settings</div>
              <Separator />
              <div className={'px-4 py-3 text-sm hover:bg-bg-rev/5'}>Profile</div>
              <Separator />
              <div className={'px-4 py-3 text-sm hover:bg-bg-rev/5'}>Billing</div>
              <Separator />
              <div className={'px-4 py-3 text-sm hover:bg-bg-rev/5'}>Notifications</div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Customization */}
      <section>
        <h2 className={'text-xl font-bold mb-6'}>Customization</h2>
        <div className={'space-y-8'}>
          <div>
            <h3 className={'text-sm font-semibold mb-4 text-fg-rev/70'}>Colors</h3>
            <div className={'w-96 space-y-4'}>
              <div>
                <p className={'text-xs text-fg-rev/50 mb-2'}>Default</p>
                <Separator />
              </div>
              <div>
                <p className={'text-xs text-fg-rev/50 mb-2'}>Blue</p>
                <Separator className={'bg-blue-500'} />
              </div>
              <div>
                <p className={'text-xs text-fg-rev/50 mb-2'}>Green</p>
                <Separator className={'bg-green-500'} />
              </div>
              <div>
                <p className={'text-xs text-fg-rev/50 mb-2'}>Red</p>
                <Separator className={'bg-red-500'} />
              </div>
            </div>
          </div>

          <div>
            <h3 className={'text-sm font-semibold mb-4 text-fg-rev/70'}>Thickness</h3>
            <div className={'w-96 space-y-4'}>
              <div>
                <p className={'text-xs text-fg-rev/50 mb-2'}>Thin (1px)</p>
                <Separator />
              </div>
              <div>
                <p className={'text-xs text-fg-rev/50 mb-2'}>Medium (2px)</p>
                <Separator className={'h-0.5'} />
              </div>
              <div>
                <p className={'text-xs text-fg-rev/50 mb-2'}>Thick (4px)</p>
                <Separator className={'h-1'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}
