'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  [
    'overflow-hidden inline-flex items-center justify-center gap-1 rounded-md bg-transparent transition-[color,box-shadow]',
    'px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0',
    '[&>span]:size-3  [&>span]:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        solid: '',
        border: 'border',
        gradient: 'bg-gradient-to-r',
      },
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
      // Solid variant + tint combinations
      {
        variant: 'solid',
        tint: 'accent',
        className: 'bg-ac text-fg',
      },
      {
        variant: 'solid',
        tint: 'red',
        className: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      },
      {
        variant: 'solid',
        tint: 'orange',
        className: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      },
      {
        variant: 'solid',
        tint: 'amber',
        className: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      },
      {
        variant: 'solid',
        tint: 'yellow',
        className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      },
      {
        variant: 'solid',
        tint: 'lime',
        className: 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300',
      },
      {
        variant: 'solid',
        tint: 'green',
        className: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      },
      {
        variant: 'solid',
        tint: 'emerald',
        className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      },
      {
        variant: 'solid',
        tint: 'teal',
        className: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
      },
      {
        variant: 'solid',
        tint: 'cyan',
        className: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
      },
      {
        variant: 'solid',
        tint: 'sky',
        className: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
      },
      {
        variant: 'solid',
        tint: 'blue',
        className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      },
      {
        variant: 'solid',
        tint: 'indigo',
        className: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      },
      {
        variant: 'solid',
        tint: 'violet',
        className: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
      },
      {
        variant: 'solid',
        tint: 'purple',
        className: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      },
      {
        variant: 'solid',
        tint: 'fuchsia',
        className: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
      },
      {
        variant: 'solid',
        tint: 'pink',
        className: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
      },
      {
        variant: 'solid',
        tint: 'rose',
        className: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
      },
      {
        variant: 'solid',
        tint: 'slate',
        className: 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300',
      },
      {
        variant: 'solid',
        tint: 'gray',
        className: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300',
      },
      {
        variant: 'solid',
        tint: 'zinc',
        className: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-300',
      },
      {
        variant: 'solid',
        tint: 'neutral',
        className: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-900/30 dark:text-neutral-300',
      },
      {
        variant: 'solid',
        tint: 'stone',
        className: 'bg-stone-100 text-stone-700 dark:bg-stone-900/30 dark:text-stone-300',
      },
      // Border variant + tint combinations
      {
        variant: 'border',
        tint: 'accent',
        className: 'border-ac text-ac',
      },
      {
        variant: 'border',
        tint: 'red',
        className: 'border-red-300 text-red-700 dark:border-red-700 dark:text-red-300',
      },
      {
        variant: 'border',
        tint: 'orange',
        className: 'border-orange-300 text-orange-700 dark:border-orange-700 dark:text-orange-300',
      },
      {
        variant: 'border',
        tint: 'amber',
        className: 'border-amber-300 text-amber-700 dark:border-amber-700 dark:text-amber-300',
      },
      {
        variant: 'border',
        tint: 'yellow',
        className: 'border-yellow-300 text-yellow-700 dark:border-yellow-700 dark:text-yellow-300',
      },
      {
        variant: 'border',
        tint: 'lime',
        className: 'border-lime-300 text-lime-700 dark:border-lime-700 dark:text-lime-300',
      },
      {
        variant: 'border',
        tint: 'green',
        className: 'border-green-300 text-green-700 dark:border-green-700 dark:text-green-300',
      },
      {
        variant: 'border',
        tint: 'emerald',
        className:
          'border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-300',
      },
      {
        variant: 'border',
        tint: 'teal',
        className: 'border-teal-300 text-teal-700 dark:border-teal-700 dark:text-teal-300',
      },
      {
        variant: 'border',
        tint: 'cyan',
        className: 'border-cyan-300 text-cyan-700 dark:border-cyan-700 dark:text-cyan-300',
      },
      {
        variant: 'border',
        tint: 'sky',
        className: 'border-sky-300 text-sky-700 dark:border-sky-700 dark:text-sky-300',
      },
      {
        variant: 'border',
        tint: 'blue',
        className: 'border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-300',
      },
      {
        variant: 'border',
        tint: 'indigo',
        className: 'border-indigo-300 text-indigo-700 dark:border-indigo-700 dark:text-indigo-300',
      },
      {
        variant: 'border',
        tint: 'violet',
        className: 'border-violet-300 text-violet-700 dark:border-violet-700 dark:text-violet-300',
      },
      {
        variant: 'border',
        tint: 'purple',
        className: 'border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300',
      },
      {
        variant: 'border',
        tint: 'fuchsia',
        className:
          'border-fuchsia-300 text-fuchsia-700 dark:border-fuchsia-700 dark:text-fuchsia-300',
      },
      {
        variant: 'border',
        tint: 'pink',
        className: 'border-pink-300 text-pink-700 dark:border-pink-700 dark:text-pink-300',
      },
      {
        variant: 'border',
        tint: 'rose',
        className: 'border-rose-300 text-rose-700 dark:border-rose-700 dark:text-rose-300',
      },
      {
        variant: 'border',
        tint: 'slate',
        className: 'border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300',
      },
      {
        variant: 'border',
        tint: 'gray',
        className: 'border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300',
      },
      {
        variant: 'border',
        tint: 'zinc',
        className: 'border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300',
      },
      {
        variant: 'border',
        tint: 'neutral',
        className:
          'border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300',
      },
      {
        variant: 'border',
        tint: 'stone',
        className: 'border-stone-300 text-stone-700 dark:border-stone-700 dark:text-stone-300',
      },
      // Gradient variant + tint combinations
      {
        variant: 'gradient',
        tint: 'accent',
        className: 'bg-gradient-to-r from-ac to-ac/70 text-fg',
      },
      {
        variant: 'gradient',
        tint: 'red',
        className: 'bg-gradient-to-r from-red-600 to-red-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'orange',
        className: 'bg-gradient-to-r from-orange-600 to-orange-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'amber',
        className: 'bg-gradient-to-r from-amber-600 to-amber-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'yellow',
        className: 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'lime',
        className: 'bg-gradient-to-r from-lime-600 to-lime-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'green',
        className: 'bg-gradient-to-r from-green-600 to-green-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'emerald',
        className: 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'teal',
        className: 'bg-gradient-to-r from-teal-600 to-teal-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'cyan',
        className: 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'sky',
        className: 'bg-gradient-to-r from-sky-600 to-sky-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'blue',
        className: 'bg-gradient-to-r from-blue-600 to-blue-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'indigo',
        className: 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'violet',
        className: 'bg-gradient-to-r from-violet-600 to-violet-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'purple',
        className: 'bg-gradient-to-r from-purple-600 to-purple-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'fuchsia',
        className: 'bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'pink',
        className: 'bg-gradient-to-r from-pink-600 to-pink-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'rose',
        className: 'bg-gradient-to-r from-rose-600 to-rose-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'slate',
        className: 'bg-gradient-to-r from-slate-600 to-slate-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'gray',
        className: 'bg-gradient-to-r from-gray-600 to-gray-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'zinc',
        className: 'bg-gradient-to-r from-zinc-600 to-zinc-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'neutral',
        className: 'bg-gradient-to-r from-neutral-600 to-neutral-500 text-white',
      },
      {
        variant: 'gradient',
        tint: 'stone',
        className: 'bg-gradient-to-r from-stone-600 to-stone-500 text-white',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      tint: 'default',
    },
  }
)

export type BadgeProps = React.ComponentPropsWithRef<'span'> &
  VariantProps<typeof badgeVariants> & {
    // @link https://www.radix-ui.com/primitives/docs/utilities/slot
    // Merges its props onto its immediate child. no extra DOM node.
    asChild?: boolean
  }

export function Badge({
  className,
  variant = 'solid',
  tint = 'default',
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot={'badge'}
      className={cn(badgeVariants({ variant, tint }), className)}
      {...props}
    />
  )
}
