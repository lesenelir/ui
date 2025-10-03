import { cn } from '@lesenelir/ui/lib/utils'
import type { Meta, StoryObj } from '@storybook/react'

const ShadowsComponent = () => <div className={'space-y-4'}>Shadow Examples</div>

const meta = {
  title: 'Design System/Shadows',
  component: ShadowsComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShadowsComponent>

export default meta

type Story = StoryObj<typeof meta>

const ShadowSwatch = ({ name, className }: { name: string; className: string }) => (
  <div className={'flex flex-col items-center gap-1'}>
    <div className={cn('bg-bg flex size-24 items-center justify-center rounded-lg', className)} />
    <span className={'text-xs'}>{name}</span>
    <span className={'text-fg-rev/60 text-xs'}>{className}</span>
  </div>
)

const ShadowTransitionSwatch = ({
  name,
  label,
  className,
}: {
  name: string
  label: string
  className: string
}) => {
  return (
    <div className={'flex flex-col items-center gap-1'}>
      <div
        className={cn(
          'bg-bg flex size-24 items-center justify-center rounded-lg transition-shadow duration-300',
          className
        )}
      >
        <span className={'text-fg-rev/60 text-xs font-medium'}>Hover me</span>
      </div>
      <span className={'text-sm font-medium'}>{label}</span>
      <span className={'text-fg-rev/60 text-xs'}>{name}</span>
    </div>
  )
}

// Box shadows
export const BoxShadows: Story = {
  render: () => (
    <div className={'space-y-8 p-8'}>
      <h2 className={'mb-4 text-xl font-semibold'}>Box Shadows</h2>
      <div className={'grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'}>
        <ShadowSwatch name={'shadow-2xs'} className={'shadow-2xs'} />
        <ShadowSwatch name={'shadow-xs'} className={'shadow-xs'} />
        <ShadowSwatch name={'shadow-sm'} className={'shadow-sm'} />
        <ShadowSwatch name={'shadow-md'} className={'shadow-md'} />
        <ShadowSwatch name={'shadow-lg'} className={'shadow-lg'} />
        <ShadowSwatch name={'shadow-xl'} className={'shadow-xl'} />
        <ShadowSwatch name={'shadow-2xl'} className={'shadow-2xl'} />
        <ShadowSwatch name={'shadow-inner'} className={'shadow-inner'} />
        <ShadowSwatch name={'shadow-none'} className={'shadow-none'} />
        <ShadowSwatch name={'inset-shadow-2xs'} className={'inset-shadow-2xs'} />
        <ShadowSwatch name={'inset-shadow-xs'} className={'inset-shadow-xs'} />
        <ShadowSwatch name={'inset-shadow-sm'} className={'inset-shadow-sm'} />
        <ShadowSwatch name={'inset-shadow-input'} className={'inset-shadow-input'} />
        <ShadowSwatch name={'shadow-border'} className={'shadow-border'} />
      </div>
    </div>
  ),
}

// Drop shadows
export const DropShadows: Story = {
  render: () => (
    <div className={'space-y-8 p-8'}>
      <h2 className={'mb-4 text-xl font-semibold'}>Drop Shadows</h2>
      <div className={'grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'}>
        <ShadowSwatch name={'drop-shadow-xs'} className={'drop-shadow-xs'} />
        <ShadowSwatch name={'drop-shadow-sm'} className={'drop-shadow-sm'} />
        <ShadowSwatch name={'drop-shadow-md'} className={'drop-shadow-md'} />
        <ShadowSwatch name={'drop-shadow-lg'} className={'drop-shadow-lg'} />
        <ShadowSwatch name={'drop-shadow-xl'} className={'drop-shadow-xl'} />
        <ShadowSwatch name={'drop-shadow-2xl'} className={'drop-shadow-2xl'} />
        <ShadowSwatch name={'drop-shadow-none'} className={'drop-shadow-none'} />
      </div>
    </div>
  ),
}

// Combined examples with different colors
export const ColoredBoxShadows: Story = {
  render: () => (
    <div className={'space-y-8 p-8'}>
      <h2 className={'mb-4 text-xl font-semibold'}>Colored Box Shadows</h2>
      <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'}>
        <ShadowSwatch name={'Blue'} className={'shadow-lg shadow-blue-500/50'} />
        <ShadowSwatch name={'Red'} className={'shadow-lg shadow-red-500/50'} />
        <ShadowSwatch name={'Green'} className={'shadow-lg shadow-green-500/50'} />
        <ShadowSwatch name={'Yellow'} className={'shadow-lg shadow-yellow-500/50'} />
        <ShadowSwatch name={'Purple'} className={'shadow-lg shadow-purple-500/50'} />
        <ShadowSwatch name={'Pink'} className={'shadow-lg shadow-pink-500/50'} />

        <ShadowSwatch name={'Blue'} className={'inset-shadow-2xs inset-shadow-blue-500/50'} />
        <ShadowSwatch name={'Red'} className={'inset-shadow-2xs inset-shadow-red-500/50'} />
        <ShadowSwatch name={'Green'} className={'inset-shadow-2xs inset-shadow-green-500/50'} />
        <ShadowSwatch name={'Yellow'} className={'inset-shadow-2xs inset-shadow-yellow-500/50'} />
        <ShadowSwatch name={'Purple'} className={'inset-shadow-2xs inset-shadow-purple-500/50'} />
        <ShadowSwatch name={'Pink'} className={'inset-shadow-2xs inset-shadow-pink-500/50'} />

        <ShadowSwatch name={'Blue'} className={'inset-shadow-xs inset-shadow-blue-500/50'} />
        <ShadowSwatch name={'Red'} className={'inset-shadow-xs inset-shadow-red-500/50'} />
        <ShadowSwatch name={'Green'} className={'inset-shadow-xs inset-shadow-green-500/50'} />
        <ShadowSwatch name={'Yellow'} className={'inset-shadow-xs inset-shadow-yellow-500/50'} />
        <ShadowSwatch name={'Purple'} className={'inset-shadow-xs inset-shadow-purple-500/50'} />
        <ShadowSwatch name={'Pink'} className={'inset-shadow-xs inset-shadow-pink-500/50'} />

        <ShadowSwatch name={'Blue'} className={'inset-shadow-sm inset-shadow-blue-500/50'} />
        <ShadowSwatch name={'Red'} className={'inset-shadow-sm inset-shadow-red-500/50'} />
        <ShadowSwatch name={'Green'} className={'inset-shadow-sm inset-shadow-green-500/50'} />
        <ShadowSwatch name={'Yellow'} className={'inset-shadow-sm inset-shadow-yellow-500/50'} />
        <ShadowSwatch name={'Purple'} className={'inset-shadow-sm inset-shadow-purple-500/50'} />
        <ShadowSwatch name={'Pink'} className={'inset-shadow-sm inset-shadow-pink-500/50'} />
      </div>
    </div>
  ),
}

// Shadow transition
export const ShadowTransitions: Story = {
  render: () => (
    <div className={'space-y-8 p-8'}>
      <h2 className={'mb-4 text-xl font-semibold'}>Shadow Transitions (Hover)</h2>
      <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'}>
        <ShadowTransitionSwatch
          name={'shadow-sm → shadow-xl'}
          label={'sm → xl'}
          className={'shadow-sm hover:shadow-xl'}
        />
        <ShadowTransitionSwatch
          name={'shadow-md → shadow-2xl'}
          label={'md → 2xl'}
          className={'shadow-md hover:shadow-2xl'}
        />
        <ShadowTransitionSwatch
          name={'shadow-none → shadow-md'}
          label={'default → md'}
          className={'shadow-none hover:shadow-md'}
        />
        <ShadowTransitionSwatch
          name={'shadow-md → shadow-xl shadow-blue-500/50'}
          label={'md → xl (colored)'}
          className={'shadow-md hover:shadow-xl hover:shadow-blue-500/50'}
        />
      </div>
    </div>
  ),
}
