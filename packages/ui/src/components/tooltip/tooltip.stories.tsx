import { Button } from '@lesenelir/ui/button'
import { Kbd, KbdGroup } from '@lesenelir/ui/kbd'
import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    delayDuration: {
      control: 'number',
      description: 'The delay duration before showing the tooltip (in ms)',
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

// Basic Tooltip Stories
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent showArrow={true}>
        <p>Tooltip with arrow</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithoutArrow: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent showArrow={false}>
        <p>Tooltip without arrow</p>
      </TooltipContent>
    </Tooltip>
  ),
}

// Side Positions
export const TopPosition: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Top</Button>
      </TooltipTrigger>
      <TooltipContent side={'top'}>
        <p>Tooltip on top</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const RightPosition: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Right</Button>
      </TooltipTrigger>
      <TooltipContent side={'right'}>
        <p>Tooltip on right</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const BottomPosition: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Bottom</Button>
      </TooltipTrigger>
      <TooltipContent side={'bottom'}>
        <p>Tooltip on bottom</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const LeftPosition: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Left</Button>
      </TooltipTrigger>
      <TooltipContent side={'left'}>
        <p>Tooltip on left</p>
      </TooltipContent>
    </Tooltip>
  ),
}

// All Positions Overview
export const AllPositions: Story = {
  render: () => (
    <div className={'flex flex-col gap-8 items-center'}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>Top</Button>
        </TooltipTrigger>
        <TooltipContent side={'top'}>
          <p>Top tooltip</p>
        </TooltipContent>
      </Tooltip>

      <div className={'flex gap-8 items-center'}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'outline'}>Left</Button>
          </TooltipTrigger>
          <TooltipContent side={'left'}>
            <p>Left tooltip</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'outline'}>Right</Button>
          </TooltipTrigger>
          <TooltipContent side={'right'}>
            <p>Right tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side={'bottom'}>
          <p>Bottom tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

// Side Offset Variations
export const NoOffset: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>No offset</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={0}>
        <p>Tooltip with no offset</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const SmallOffset: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Small offset</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={5}>
        <p>Tooltip with 5px offset</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const LargeOffset: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Large offset</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={20}>
        <p>Tooltip with 20px offset</p>
      </TooltipContent>
    </Tooltip>
  ),
}

// Content Variations
export const ShortContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Short</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Hi!</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Long content</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a longer tooltip that contains more information about the element</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const MultilineContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Multiline</Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className={'flex flex-col gap-1'}>
          <p className={'font-semibold'}>Tooltip Title</p>
          <p className={'text-xs opacity-80'}>This tooltip has multiple lines of content</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
}

// Interactive Examples
export const OnButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover for info</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Click to perform action</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const OnIconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size={'icon'} variant={'outline'}>
          <span className={'i-tabler-settings'} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Settings</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const OnText: Story = {
  render: () => (
    <div className={'flex items-center gap-2'}>
      <span>Hover over the</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={'underline decoration-dashed cursor-help'}>underlined text</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip on text</p>
        </TooltipContent>
      </Tooltip>
      <span>for more info</span>
    </div>
  ),
}

// Custom Delay
export const CustomDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={1000}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>Slow (1000ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip appears after 1 second</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const FastDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>Fast (0ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip appears immediately</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

// Rich Content
export const RichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={'outline'}>Rich content</Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className={'flex flex-col gap-2 text-ac'}>
          <div className={'flex items-center gap-2'}>
            <span className={'i-tabler-info-circle'} />
            <span className={'font-semibold'}>Information</span>
          </div>
          <p className={'text-xs'}>This tooltip contains rich formatted content</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithKbdComponent: Story = {
  render: () => (
    <div className={'flex flex-wrap gap-4'}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>
            <span className={'i-tabler-search'} />
            Search
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Quick search</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>
            <span className={'i-tabler-copy'} />
            Copy
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Copy</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>
            <span className={'i-tabler-clipboard'} />
            Paste
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Paste</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <span className={'i-tabler-arrow-back'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Undo</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <span className={'i-tabler-arrow-forward'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Redo</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <span className={'i-tabler-device-floppy'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Save</span>
            <Kbd>⌘S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'outline'}>
            <span className={'i-tabler-terminal'} />
            Terminal
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Toggle terminal</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>`</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <span className={'i-tabler-command'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className={'flex items-center gap-2'}>
            <span>Command palette</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

// Full Showcase
export const FullShowcase: Story = {
  render: () => (
    <TooltipProvider>
      <div className={'flex flex-col gap-8 p-8'}>
        <div>
          <h3 className={'text-lg font-semibold mb-3'}>Arrow Variants</h3>
          <div className={'flex gap-2'}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>With Arrow</Button>
              </TooltipTrigger>
              <TooltipContent showArrow={true}>
                <p>Has arrow</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Without Arrow</Button>
              </TooltipTrigger>
              <TooltipContent showArrow={false}>
                <p>No arrow</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div>
          <h3 className={'text-lg font-semibold mb-3'}>Positions</h3>
          <div className={'flex gap-2'}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Top</Button>
              </TooltipTrigger>
              <TooltipContent side={'top'}>
                <p>Top tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Right</Button>
              </TooltipTrigger>
              <TooltipContent side={'right'}>
                <p>Right tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side={'bottom'}>
                <p>Bottom tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Left</Button>
              </TooltipTrigger>
              <TooltipContent side={'left'}>
                <p>Left tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div>
          <h3 className={'text-lg font-semibold mb-3'}>Icon Buttons with Tooltips</h3>
          <div className={'flex gap-2'}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'outline'}>
                  <span className={'i-tabler-heart'} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Favorite</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'outline'}>
                  <span className={'i-tabler-star'} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Star</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'outline'}>
                  <span className={'i-tabler-bookmark'} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Bookmark</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'outline'}>
                  <span className={'i-tabler-download'} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div>
          <h3 className={'text-lg font-semibold mb-3'}>Content Variations</h3>
          <div className={'flex gap-2'}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Short</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Hi!</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Long</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This tooltip contains a longer description</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Rich</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className={'flex flex-col gap-1'}>
                  <p className={'font-semibold'}>Title</p>
                  <p className={'text-xs opacity-80'}>Description text</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div>
          <h3 className={'text-lg font-semibold mb-3'}>Offset Variations</h3>
          <div className={'flex gap-2'}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>No offset (0px)</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={0}>
                <p>0px offset</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Small (5px)</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={5}>
                <p>5px offset</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'outline'}>Large (20px)</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={20}>
                <p>20px offset</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  ),
}
