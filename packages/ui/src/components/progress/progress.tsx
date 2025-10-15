'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cva, type VariantProps } from 'class-variance-authority'

const progressIndicatorVariants = cva('size-full flex-1 transition-all', {
  variants: {
    tint: {
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
    {
      tint: 'accent',
      className: 'bg-ac',
    },
    {
      tint: 'red',
      className: 'bg-red-600',
    },
    {
      tint: 'orange',
      className: 'bg-orange-600',
    },
    {
      tint: 'amber',
      className: 'bg-amber-600',
    },
    {
      tint: 'yellow',
      className: 'bg-yellow-600',
    },
    {
      tint: 'lime',
      className: 'bg-lime-600',
    },
    {
      tint: 'green',
      className: 'bg-green-600',
    },
    {
      tint: 'emerald',
      className: 'bg-emerald-600',
    },
    {
      tint: 'teal',
      className: 'bg-teal-600',
    },
    {
      tint: 'cyan',
      className: 'bg-cyan-600',
    },
    {
      tint: 'sky',
      className: 'bg-sky-600',
    },
    {
      tint: 'blue',
      className: 'bg-blue-600',
    },
    {
      tint: 'indigo',
      className: 'bg-indigo-600',
    },
    {
      tint: 'violet',
      className: 'bg-violet-600',
    },
    {
      tint: 'purple',
      className: 'bg-purple-600',
    },
    {
      tint: 'fuchsia',
      className: 'bg-fuchsia-600',
    },
    {
      tint: 'pink',
      className: 'bg-pink-600',
    },
    {
      tint: 'rose',
      className: 'bg-rose-600',
    },
    {
      tint: 'slate',
      className: 'bg-slate-600',
    },
    {
      tint: 'gray',
      className: 'bg-gray-600',
    },
    {
      tint: 'zinc',
      className: 'bg-zinc-600',
    },
    {
      tint: 'neutral',
      className: 'bg-neutral-600',
    },
    {
      tint: 'stone',
      className: 'bg-stone-600',
    },
  ],
  defaultVariants: {
    tint: 'accent',
  },
})

export type ProgressProps = React.ComponentPropsWithRef<typeof ProgressPrimitive.Root> &
  VariantProps<typeof progressIndicatorVariants>

export function Progress({ className, value, tint = 'accent', ref, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot={'progress'}
      className={cn('bg-fg-rev/20 relative h-2 w-full overflow-hidden rounded-full', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot={'progress-indicator'}
        className={cn(progressIndicatorVariants({ tint }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}
