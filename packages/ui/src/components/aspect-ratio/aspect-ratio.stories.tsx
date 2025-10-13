import { Button } from '@lesenelir/ui/button'
import type { Meta, StoryObj } from '@storybook/react'

import { AspectRatio } from './aspect-ratio'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The desired aspect ratio (width / height)',
    },
    className: {
      control: 'text',
      description: 'Custom className for styling the aspect ratio container',
    },
    ref: {
      control: false,
      description: 'Forwarded ref to the root element',
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

// Aspect Ratio Only need define width or height, the other dimension is calculated automatically.

// Basic Variants
export const Default: Story = {
  render: () => (
    <div className={'w-[500px] p-8'}>
      <AspectRatio ratio={16 / 9} className={'overflow-hidden rounded-md border'}>
        <img
          src={
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60'
          }
          alt={'16:9'}
          className={'size-full object-cover'}
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className={'w-[300px]'}>
      <h3 className={'text-sm font-medium mb-2 text-fg-rev/60'}>Square (1:1)</h3>
      <AspectRatio ratio={1} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60'
          }
          alt={'Mountain landscape'}
          className={'size-full object-cover'}
        />
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  render: () => (
    <div className={'w-[300px]'}>
      <h3 className={'text-sm font-medium mb-2 text-fg-rev/60'}>Portrait (3:4)</h3>
      <AspectRatio ratio={3 / 4} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60'
          }
          alt={'Portrait'}
          className={'size-full object-cover'}
        />
      </AspectRatio>
    </div>
  ),
}

export const CustomRatio: Story = {
  render: () => (
    <div className={'w-[500px]'}>
      <h3 className={'text-sm font-medium mb-2 text-fg-rev/60'}>
        Custom Ratio (2.35:1) - Commonly used in cinematic presentations
      </h3>
      <AspectRatio ratio={2.35} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=60'
          }
          alt={'Cinematic landscape'}
          className={'size-full object-cover'}
        />
      </AspectRatio>
    </div>
  ),
}

export const VideoPlaceholder: Story = {
  render: () => (
    <div className={'w-[500px]'}>
      <h3 className={'text-sm font-medium mb-2 text-fg-rev/60'}>Video Player Placeholder (16:9)</h3>
      <AspectRatio ratio={16 / 9} className={'overflow-hidden rounded-lg border-2 border-dashed'}>
        <div className={'flex size-full items-center justify-center bg-fg-rev/5'}>
          <div className={'flex flex-col items-center gap-2'}>
            <span className={'i-tabler-player-play text-4xl text-fg-rev/40'} />
            <span className={'text-sm text-fg-rev/60'}>Video Player (16:9)</span>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
}

export const WithOverlay: Story = {
  render: () => (
    <div className={'w-[500px]'}>
      <AspectRatio ratio={16 / 9} className={'overflow-hidden rounded-lg relative group'}>
        <img
          src={
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60'
          }
          alt={'with overlay'}
          className={'size-full object-cover'}
        />
        <div
          className={
            'absolute inset-0 bg-fg-rev/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'
          }
        >
          <Button type={'button'} variant={'outline'} className={'bg-fg hover:bg-fg/90'}>
            View Details
          </Button>
        </div>
      </AspectRatio>
    </div>
  ),
}

// Use Case Stories
export const ImageGallery: Story = {
  render: () => (
    <div className={'grid grid-cols-3 gap-4 w-[600px]'}>
      <AspectRatio ratio={1} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=60'
          }
          alt={'Gallery 1'}
          className={'size-full object-cover hover:scale-105 transition-transform'}
        />
      </AspectRatio>
      <AspectRatio ratio={1} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&auto=format&fit=crop&q=60'
          }
          alt={'Gallery 2'}
          className={'size-full object-cover hover:scale-105 transition-transform'}
        />
      </AspectRatio>
      <AspectRatio ratio={1} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=400&auto=format&fit=crop&q=60'
          }
          alt={'Gallery 3'}
          className={'size-full object-cover hover:scale-105 transition-transform'}
        />
      </AspectRatio>
      <AspectRatio ratio={1} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&auto=format&fit=crop&q=60'
          }
          alt={'Gallery 4'}
          className={'size-full object-cover hover:scale-105 transition-transform'}
        />
      </AspectRatio>
      <AspectRatio ratio={1} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&fit=crop&q=60'
          }
          alt={'Gallery 5'}
          className={'size-full object-cover hover:scale-105 transition-transform'}
        />
      </AspectRatio>
      <AspectRatio ratio={1} className={'overflow-hidden rounded-md'}>
        <img
          src={
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&auto=format&fit=crop&q=60'
          }
          alt={'Gallery 6'}
          className={'size-full object-cover hover:scale-105 transition-transform'}
        />
      </AspectRatio>
    </div>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <div className={'w-[300px] rounded-lg border overflow-hidden'}>
      <AspectRatio ratio={4 / 3} className={'overflow-hidden'}>
        <img
          src={
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60'
          }
          alt={'Product'}
          className={'size-full object-cover'}
        />
      </AspectRatio>
      <div className={'p-4'}>
        <h3 className={'text-base font-semibold mb-1'}>Premium Watch</h3>
        <p className={'text-sm text-fg-rev/60 mb-2'}>Elegant timepiece with modern design</p>
        <div className={'flex items-center justify-between'}>
          <span className={'text-lg font-bold'}>$299.00</span>
          <Button type={'button'} variant={'default'} className={'px-3 py-1.5 text-sm'}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  ),
}

// Comparison Showcase
export const AllRatios: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8 w-[700px]'}>
      <div>
        <h3 className={'text-sm font-medium mb-2 text-fg-rev/60'}>16:9 (Widescreen)</h3>
        <AspectRatio ratio={16 / 9} className={'overflow-hidden rounded-md border'}>
          <img
            src={
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60'
            }
            alt={'16:9'}
            className={'size-full object-cover'}
          />
        </AspectRatio>
      </div>

      <div>
        <h3 className={'text-sm font-medium mb-2 text-fg-rev/60'}>4:3 (Standard)</h3>
        <AspectRatio ratio={4 / 3} className={'overflow-hidden rounded-md border'}>
          <img
            src={
              'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=60'
            }
            alt={'4:3'}
            className={'size-full object-cover'}
          />
        </AspectRatio>
      </div>

      <div>
        <h3 className={'text-sm font-medium mb-2 text-fg-rev/60'}>1:1 (Square)</h3>
        <AspectRatio ratio={1} className={'overflow-hidden rounded-md border'}>
          <img
            src={
              'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&auto=format&fit=crop&q=60'
            }
            alt={'1:1'}
            className={'size-full object-cover'}
          />
        </AspectRatio>
      </div>

      <div>
        <h3 className={'text-sm font-medium mb-2 text-fg-rev/60'}>21:9 (Ultrawide)</h3>
        <AspectRatio ratio={21 / 9} className={'overflow-hidden rounded-md border'}>
          <img
            src={
              'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&auto=format&fit=crop&q=60'
            }
            alt={'21:9'}
            className={'size-full object-cover'}
          />
        </AspectRatio>
      </div>
    </div>
  ),
}
