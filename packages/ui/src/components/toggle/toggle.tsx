'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium outline-none transition-[color,box-shadow] whitespace-nowrap',
    'focus-visible-ring',
    '[&_span]:pointer-events-none [&_span]:shrink-0',
    'aria-invalid:ring-rose-500/20 dark:aria-invalid:ring-rose-500/40 aria-invalid:border-rose-500',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: '',
        outline: 'border',
      },
      size: {
        sm: 'text-xs px-2 py-[calc(0.25rem-1px)] rounded-sm',
        default: 'text-base px-2.5 py-[calc(0.25rem-1px)]',
        lg: 'text-lg px-3 py-[calc(0.25rem-1px)]',
      },
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
      // Default variant + tint combinations
      {
        variant: 'default',
        tint: 'accent',
        className: 'hover:bg-ac/10 data-[state=on]:bg-ac/10 data-[state=on]:text-ac',
      },
      {
        variant: 'default',
        tint: 'red',
        className: 'hover:bg-red-100 data-[state=on]:bg-red-600/10 data-[state=on]:text-red-700',
      },
      {
        variant: 'default',
        tint: 'orange',
        className:
          'hover:bg-orange-100 data-[state=on]:bg-orange-600/10 data-[state=on]:text-orange-700',
      },
      {
        variant: 'default',
        tint: 'amber',
        className:
          'hover:bg-amber-100 data-[state=on]:bg-amber-600/10 data-[state=on]:text-amber-700',
      },
      {
        variant: 'default',
        tint: 'yellow',
        className:
          'hover:bg-yellow-100 data-[state=on]:bg-yellow-600/10 data-[state=on]:text-yellow-700',
      },
      {
        variant: 'default',
        tint: 'lime',
        className: 'hover:bg-lime-100 data-[state=on]:bg-lime-600/10 data-[state=on]:text-lime-700',
      },
      {
        variant: 'default',
        tint: 'green',
        className:
          'hover:bg-green-100 data-[state=on]:bg-green-600/10 data-[state=on]:text-green-700',
      },
      {
        variant: 'default',
        tint: 'emerald',
        className:
          'hover:bg-emerald-100 data-[state=on]:bg-emerald-600/10 data-[state=on]:text-emerald-700',
      },
      {
        variant: 'default',
        tint: 'teal',
        className: 'hover:bg-teal-100 data-[state=on]:bg-teal-600/10 data-[state=on]:text-teal-700',
      },
      {
        variant: 'default',
        tint: 'cyan',
        className: 'hover:bg-cyan-100 data-[state=on]:bg-cyan-600/10 data-[state=on]:text-cyan-700',
      },
      {
        variant: 'default',
        tint: 'sky',
        className: 'hover:bg-sky-100 data-[state=on]:bg-sky-600/10 data-[state=on]:text-sky-700',
      },
      {
        variant: 'default',
        tint: 'blue',
        className: 'hover:bg-blue-100 data-[state=on]:bg-blue-600/10 data-[state=on]:text-blue-700',
      },
      {
        variant: 'default',
        tint: 'indigo',
        className:
          'hover:bg-indigo-100 data-[state=on]:bg-indigo-600/10 data-[state=on]:text-indigo-700',
      },
      {
        variant: 'default',
        tint: 'violet',
        className:
          'hover:bg-violet-100 data-[state=on]:bg-violet-600/10 data-[state=on]:text-violet-700',
      },
      {
        variant: 'default',
        tint: 'purple',
        className:
          'hover:bg-purple-100 data-[state=on]:bg-purple-600/10 data-[state=on]:text-purple-700',
      },
      {
        variant: 'default',
        tint: 'fuchsia',
        className:
          'hover:bg-fuchsia-100 data-[state=on]:bg-fuchsia-600/10 data-[state=on]:text-fuchsia-700',
      },
      {
        variant: 'default',
        tint: 'pink',
        className: 'hover:bg-pink-100 data-[state=on]:bg-pink-600/10 data-[state=on]:text-pink-700',
      },
      {
        variant: 'default',
        tint: 'rose',
        className: 'hover:bg-rose-100 data-[state=on]:bg-rose-600/10 data-[state=on]:text-rose-700',
      },
      {
        variant: 'default',
        tint: 'slate',
        className:
          'hover:bg-slate-100 data-[state=on]:bg-slate-600/10 data-[state=on]:text-slate-700',
      },
      {
        variant: 'default',
        tint: 'gray',
        className: 'hover:bg-gray-100 data-[state=on]:bg-gray-600/10 data-[state=on]:text-gray-700',
      },
      {
        variant: 'default',
        tint: 'zinc',
        className: 'hover:bg-zinc-100 data-[state=on]:bg-zinc-600/10 data-[state=on]:text-zinc-700',
      },
      {
        variant: 'default',
        tint: 'neutral',
        className:
          'hover:bg-neutral-100 data-[state=on]:bg-neutral-600/10 data-[state=on]:text-neutral-700',
      },
      {
        variant: 'default',
        tint: 'stone',
        className:
          'hover:bg-stone-100 data-[state=on]:bg-stone-600/10 data-[state=on]:text-stone-700',
      },
      // Outline variant + tint combinations
      {
        variant: 'outline',
        tint: 'accent',
        className:
          'hover:bg-ac/10 data-[state=on]:bg-ac/10 data-[state=on]:text-ac data-[state=on]:border-ac',
      },
      {
        variant: 'outline',
        tint: 'red',
        className:
          'hover:bg-red-100 data-[state=on]:bg-red-600/10 data-[state=on]:text-red-700 data-[state=on]:border-red-600',
      },
      {
        variant: 'outline',
        tint: 'orange',
        className:
          'hover:bg-orange-100 data-[state=on]:bg-orange-600/10 data-[state=on]:text-orange-700 data-[state=on]:border-orange-600',
      },
      {
        variant: 'outline',
        tint: 'amber',
        className:
          'hover:bg-amber-100 data-[state=on]:bg-amber-600/10 data-[state=on]:text-amber-700 data-[state=on]:border-amber-600',
      },
      {
        variant: 'outline',
        tint: 'yellow',
        className:
          'hover:bg-yellow-100 data-[state=on]:bg-yellow-600/10 data-[state=on]:text-yellow-700 data-[state=on]:border-yellow-600',
      },
      {
        variant: 'outline',
        tint: 'lime',
        className:
          'hover:bg-lime-100 data-[state=on]:bg-lime-600/10 data-[state=on]:text-lime-700 data-[state=on]:border-lime-600',
      },
      {
        variant: 'outline',
        tint: 'green',
        className:
          'hover:bg-green-100 data-[state=on]:bg-green-600/10 data-[state=on]:text-green-700 data-[state=on]:border-green-600',
      },
      {
        variant: 'outline',
        tint: 'emerald',
        className:
          'hover:bg-emerald-100 data-[state=on]:bg-emerald-600/10 data-[state=on]:text-emerald-700 data-[state=on]:border-emerald-600',
      },
      {
        variant: 'outline',
        tint: 'teal',
        className:
          'hover:bg-teal-100 data-[state=on]:bg-teal-600/10 data-[state=on]:text-teal-700 data-[state=on]:border-teal-600',
      },
      {
        variant: 'outline',
        tint: 'cyan',
        className:
          'hover:bg-cyan-100 data-[state=on]:bg-cyan-600/10 data-[state=on]:text-cyan-700 data-[state=on]:border-cyan-600',
      },
      {
        variant: 'outline',
        tint: 'sky',
        className:
          'hover:bg-sky-100 data-[state=on]:bg-sky-600/10 data-[state=on]:text-sky-700 data-[state=on]:border-sky-600',
      },
      {
        variant: 'outline',
        tint: 'blue',
        className:
          'hover:bg-blue-100 data-[state=on]:bg-blue-600/10 data-[state=on]:text-blue-700 data-[state=on]:border-blue-600',
      },
      {
        variant: 'outline',
        tint: 'indigo',
        className:
          'hover:bg-indigo-100 data-[state=on]:bg-indigo-600/10 data-[state=on]:text-indigo-700 data-[state=on]:border-indigo-600',
      },
      {
        variant: 'outline',
        tint: 'violet',
        className:
          'hover:bg-violet-100 data-[state=on]:bg-violet-600/10 data-[state=on]:text-violet-700 data-[state=on]:border-violet-600',
      },
      {
        variant: 'outline',
        tint: 'purple',
        className:
          'hover:bg-purple-100 data-[state=on]:bg-purple-600/10 data-[state=on]:text-purple-700 data-[state=on]:border-purple-600',
      },
      {
        variant: 'outline',
        tint: 'fuchsia',
        className:
          'hover:bg-fuchsia-100 data-[state=on]:bg-fuchsia-600/10 data-[state=on]:text-fuchsia-700 data-[state=on]:border-fuchsia-600',
      },
      {
        variant: 'outline',
        tint: 'pink',
        className:
          'hover:bg-pink-100 data-[state=on]:bg-pink-600/10 data-[state=on]:text-pink-700 data-[state=on]:border-pink-600',
      },
      {
        variant: 'outline',
        tint: 'rose',
        className:
          'hover:bg-rose-100 data-[state=on]:bg-rose-600/10 data-[state=on]:text-rose-700 data-[state=on]:border-rose-600',
      },
      {
        variant: 'outline',
        tint: 'slate',
        className:
          'hover:bg-slate-100 data-[state=on]:bg-slate-600/10 data-[state=on]:text-slate-700 data-[state=on]:border-slate-600',
      },
      {
        variant: 'outline',
        tint: 'gray',
        className:
          'hover:bg-gray-100 data-[state=on]:bg-gray-600/10 data-[state=on]:text-gray-700 data-[state=on]:border-gray-600',
      },
      {
        variant: 'outline',
        tint: 'zinc',
        className:
          'hover:bg-zinc-100 data-[state=on]:bg-zinc-600/10 data-[state=on]:text-zinc-700 data-[state=on]:border-zinc-600',
      },
      {
        variant: 'outline',
        tint: 'neutral',
        className:
          'hover:bg-neutral-100 data-[state=on]:bg-neutral-600/10 data-[state=on]:text-neutral-700 data-[state=on]:border-neutral-600',
      },
      {
        variant: 'outline',
        tint: 'stone',
        className:
          'hover:bg-stone-100 data-[state=on]:bg-stone-600/10 data-[state=on]:text-stone-700 data-[state=on]:border-stone-600',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
      tint: 'accent',
    },
  }
)

export type ToggleProps = React.ComponentPropsWithRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>

export function Toggle({
  className,
  ref,
  variant = 'default',
  size = 'default',
  tint = 'accent',
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      ref={ref}
      data-slot={'toggle'}
      className={cn(toggleVariants({ variant, size, tint }), className)}
      {...props}
    />
  )
}
