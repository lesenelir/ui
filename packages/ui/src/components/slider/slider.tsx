'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cva, type VariantProps } from 'class-variance-authority'

const sliderTrackVariants = cva('', {
  variants: {
    tint: {
      default: '',
      accent: '',
      red: '',
      orange: '',
      amber: '',
      yellow: '',
      lime: '',
      green: '',
      emerald: '',
      teal: '',
      cyan: '',
      sky: '',
      blue: '',
      indigo: '',
      violet: '',
      purple: '',
      fuchsia: '',
      pink: '',
      rose: '',
      slate: '',
      gray: '',
      zinc: '',
      neutral: '',
      stone: '',
    },
  },
  compoundVariants: [
    { tint: 'accent', className: 'bg-ac/10' },
    { tint: 'red', className: 'bg-red-600/10' },
    { tint: 'orange', className: 'bg-orange-600/10' },
    { tint: 'amber', className: 'bg-amber-600/10' },
    { tint: 'yellow', className: 'bg-yellow-600/10' },
    { tint: 'lime', className: 'bg-lime-600/10' },
    { tint: 'green', className: 'bg-green-600/10' },
    { tint: 'emerald', className: 'bg-emerald-600/10' },
    { tint: 'teal', className: 'bg-teal-600/10' },
    { tint: 'cyan', className: 'bg-cyan-600/10' },
    { tint: 'sky', className: 'bg-sky-600/10' },
    { tint: 'blue', className: 'bg-blue-600/10' },
    { tint: 'indigo', className: 'bg-indigo-600/10' },
    { tint: 'violet', className: 'bg-violet-600/10' },
    { tint: 'purple', className: 'bg-purple-600/10' },
    { tint: 'fuchsia', className: 'bg-fuchsia-600/10' },
    { tint: 'pink', className: 'bg-pink-600/10' },
    { tint: 'rose', className: 'bg-rose-600/10' },
    { tint: 'slate', className: 'bg-slate-600/10' },
    { tint: 'gray', className: 'bg-gray-600/10' },
    { tint: 'zinc', className: 'bg-zinc-600/10' },
    { tint: 'neutral', className: 'bg-neutral-600/10' },
    { tint: 'stone', className: 'bg-stone-600/10' },
  ],
  defaultVariants: {
    tint: 'default',
  },
})

const sliderRangeVariants = cva('', {
  variants: {
    tint: {
      default: '',
      accent: '',
      red: '',
      orange: '',
      amber: '',
      yellow: '',
      lime: '',
      green: '',
      emerald: '',
      teal: '',
      cyan: '',
      sky: '',
      blue: '',
      indigo: '',
      violet: '',
      purple: '',
      fuchsia: '',
      pink: '',
      rose: '',
      slate: '',
      gray: '',
      zinc: '',
      neutral: '',
      stone: '',
    },
  },
  compoundVariants: [
    { tint: 'accent', className: 'bg-ac' },
    { tint: 'red', className: 'bg-red-600' },
    { tint: 'orange', className: 'bg-orange-600' },
    { tint: 'amber', className: 'bg-amber-600' },
    { tint: 'yellow', className: 'bg-yellow-600' },
    { tint: 'lime', className: 'bg-lime-600' },
    { tint: 'green', className: 'bg-green-600' },
    { tint: 'emerald', className: 'bg-emerald-600' },
    { tint: 'teal', className: 'bg-teal-600' },
    { tint: 'cyan', className: 'bg-cyan-600' },
    { tint: 'sky', className: 'bg-sky-600' },
    { tint: 'blue', className: 'bg-blue-600' },
    { tint: 'indigo', className: 'bg-indigo-600' },
    { tint: 'violet', className: 'bg-violet-600' },
    { tint: 'purple', className: 'bg-purple-600' },
    { tint: 'fuchsia', className: 'bg-fuchsia-600' },
    { tint: 'pink', className: 'bg-pink-600' },
    { tint: 'rose', className: 'bg-rose-600' },
    { tint: 'slate', className: 'bg-slate-600' },
    { tint: 'gray', className: 'bg-gray-600' },
    { tint: 'zinc', className: 'bg-zinc-600' },
    { tint: 'neutral', className: 'bg-neutral-600' },
    { tint: 'stone', className: 'bg-stone-600' },
  ],
  defaultVariants: {
    tint: 'default',
  },
})

const sliderThumbVariants = cva('', {
  variants: {
    tint: {
      default: '',
      accent: '',
      red: '',
      orange: '',
      amber: '',
      yellow: '',
      lime: '',
      green: '',
      emerald: '',
      teal: '',
      cyan: '',
      sky: '',
      blue: '',
      indigo: '',
      violet: '',
      purple: '',
      fuchsia: '',
      pink: '',
      rose: '',
      slate: '',
      gray: '',
      zinc: '',
      neutral: '',
      stone: '',
    },
  },
  compoundVariants: [
    { tint: 'accent', className: 'border-ac bg-ac ring-ac/10' },
    { tint: 'red', className: 'border-red-600 bg-red-600 ring-red-600/10' },
    { tint: 'orange', className: 'border-orange-600 bg-orange-600 ring-orange-600/10' },
    { tint: 'amber', className: 'border-amber-600 bg-amber-600 ring-amber-600/10' },
    { tint: 'yellow', className: 'border-yellow-600 bg-yellow-600 ring-yellow-600/10' },
    { tint: 'lime', className: 'border-lime-600 bg-lime-600 ring-lime-600/10' },
    { tint: 'green', className: 'border-green-600 bg-green-600 ring-green-600/10' },
    { tint: 'emerald', className: 'border-emerald-600 bg-emerald-600 ring-emerald-600/10' },
    { tint: 'teal', className: 'border-teal-600 bg-teal-600 ring-teal-600/10' },
    { tint: 'cyan', className: 'border-cyan-600 bg-cyan-600 ring-cyan-600/10' },
    { tint: 'sky', className: 'border-sky-600 bg-sky-600 ring-sky-600/10' },
    { tint: 'blue', className: 'border-blue-600 bg-blue-600 ring-blue-600/10' },
    { tint: 'indigo', className: 'border-indigo-600 bg-indigo-600 ring-indigo-600/10' },
    { tint: 'violet', className: 'border-violet-600 bg-violet-600 ring-violet-600/10' },
    { tint: 'purple', className: 'border-purple-600 bg-purple-600 ring-purple-600/10' },
    { tint: 'fuchsia', className: 'border-fuchsia-600 bg-fuchsia-600 ring-fuchsia-600/10' },
    { tint: 'pink', className: 'border-pink-600 bg-pink-600 ring-pink-600/10' },
    { tint: 'rose', className: 'border-rose-600 bg-rose-600 ring-rose-600/10' },
    { tint: 'slate', className: 'border-slate-600 bg-slate-600 ring-slate-600/10' },
    { tint: 'gray', className: 'border-gray-600 bg-gray-600 ring-gray-600/10' },
    { tint: 'zinc', className: 'border-zinc-600 bg-zinc-600 ring-zinc-600/10' },
    { tint: 'neutral', className: 'border-neutral-600 bg-neutral-600 ring-neutral-600/10' },
    { tint: 'stone', className: 'border-stone-600 bg-stone-600 ring-stone-600/10' },
  ],
  defaultVariants: {
    tint: 'default',
  },
})

export type SliderProps = React.ComponentPropsWithRef<typeof SliderPrimitive.Root> &
  VariantProps<typeof sliderTrackVariants>

// Value: The controlled value of the slider. Must be used in conjunction with onValueChange.  number[]
export function Slider({
  className,
  ref,
  defaultValue,
  value,
  min = 0,
  max = 100,
  tint = 'default',
  ...props
}: SliderProps) {
  // Determine the slider values
  // Use the actual value/defaultValue arrays to determine thumb count.
  // Radix Slider internally manages thumb positions based on these arrays.
  const thumbCount = (value ?? defaultValue ?? [min])?.length

  return (
    <SliderPrimitive.Root
      ref={ref}
      data-slot={'slider'}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50',
        'data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot={'slider-track'}
        className={cn(
          'bg-fg-rev/10 relative grow overflow-hidden rounded-full',
          'data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
          sliderTrackVariants({ tint })
        )}
      >
        <SliderPrimitive.Range
          data-slot={'slider-range'}
          className={cn(
            'bg-fg-rev absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
            sliderRangeVariants({ tint })
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbCount }).map((_, index) => (
        <SliderPrimitive.Thumb
          data-slot={'slider-thumb'}
          key={index}
          className={cn(
            'block size-4 shrink-0 rounded-full border border-fg-rev bg-fg-rev shadow-sm transition-[color,box-shadow]',
            'ring-fg-rev/10 hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden',
            'disabled:pointer-events-none disabled:opacity-50',
            sliderThumbVariants({ tint })
          )}
        />
      ))}
    </SliderPrimitive.Root>
  )
}
