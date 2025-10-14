'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cva, type VariantProps } from 'class-variance-authority'

const switchVariants = cva(
  [
    'peer inline-flex shrink-0 items-center h-[1.15rem] w-8 rounded-full border border-transparent shadow-xs transition-all outline-none cursor-pointer duration-200',
    'data-[state=unchecked]:bg-fg-rev/20',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
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
      {
        tint: 'accent',
        className: 'data-[state=checked]:bg-ac dark:data-[state=unchecked]:bg-ac/20',
      },
      {
        tint: 'red',
        className: 'data-[state=checked]:bg-red-600 dark:data-[state=unchecked]:bg-red-600/20',
      },
      {
        tint: 'orange',
        className:
          'data-[state=checked]:bg-orange-600 dark:data-[state=unchecked]:bg-orange-600/20',
      },
      {
        tint: 'amber',
        className: 'data-[state=checked]:bg-amber-600 dark:data-[state=unchecked]:bg-amber-600/20',
      },
      {
        tint: 'yellow',
        className:
          'data-[state=checked]:bg-yellow-600 dark:data-[state=unchecked]:bg-yellow-600/20',
      },
      {
        tint: 'lime',
        className: 'data-[state=checked]:bg-lime-600 dark:data-[state=unchecked]:bg-lime-600/20',
      },
      {
        tint: 'green',
        className: 'data-[state=checked]:bg-green-600 dark:data-[state=unchecked]:bg-green-600/20',
      },
      {
        tint: 'emerald',
        className:
          'data-[state=checked]:bg-emerald-600 dark:data-[state=unchecked]:bg-emerald-600/20',
      },
      {
        tint: 'teal',
        className: 'data-[state=checked]:bg-teal-600 dark:data-[state=unchecked]:bg-teal-600/20',
      },
      {
        tint: 'cyan',
        className: 'data-[state=checked]:bg-cyan-600 dark:data-[state=unchecked]:bg-cyan-600/20',
      },
      {
        tint: 'sky',
        className: 'data-[state=checked]:bg-sky-600 dark:data-[state=unchecked]:bg-sky-600/20',
      },
      {
        tint: 'blue',
        className: 'data-[state=checked]:bg-blue-600 dark:data-[state=unchecked]:bg-blue-600/20',
      },
      {
        tint: 'indigo',
        className:
          'data-[state=checked]:bg-indigo-600 dark:data-[state=unchecked]:bg-indigo-600/20',
      },
      {
        tint: 'violet',
        className:
          'data-[state=checked]:bg-violet-600 dark:data-[state=unchecked]:bg-violet-600/20',
      },
      {
        tint: 'purple',
        className:
          'data-[state=checked]:bg-purple-600 dark:data-[state=unchecked]:bg-purple-600/40',
      },
      {
        tint: 'fuchsia',
        className:
          'data-[state=checked]:bg-fuchsia-600 dark:data-[state=unchecked]:bg-fuchsia-600/20',
      },
      {
        tint: 'pink',
        className: 'data-[state=checked]:bg-pink-600 dark:data-[state=unchecked]:bg-pink-600/20',
      },
      {
        tint: 'rose',
        className: 'data-[state=checked]:bg-rose-600 dark:data-[state=unchecked]:bg-rose-600/20',
      },
      {
        tint: 'slate',
        className: 'data-[state=checked]:bg-slate-600 dark:data-[state=unchecked]:bg-slate-600/20',
      },
      {
        tint: 'gray',
        className: 'data-[state=checked]:bg-gray-600 dark:data-[state=unchecked]:bg-gray-600/20',
      },
      {
        tint: 'zinc',
        className: 'data-[state=checked]:bg-zinc-600 dark:data-[state=unchecked]:bg-zinc-600/20',
      },
      {
        tint: 'neutral',
        className:
          'data-[state=checked]:bg-neutral-600 dark:data-[state=unchecked]:bg-neutral-600/20',
      },
      {
        tint: 'stone',
        className: 'data-[state=checked]:bg-stone-600 dark:data-[state=unchecked]:bg-stone-600/20',
      },
    ],
    defaultVariants: {
      tint: 'accent',
    },
  }
)

export type SwitchProps = React.ComponentPropsWithRef<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>

export function Switch({ className, tint = 'accent', ref, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      data-slot={'switch'}
      className={cn(switchVariants({ tint }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot={'switch-thumb'}
        className={cn(
          'bg-bg block size-4 rounded-full pointer-events-none ring-0 transition-transform',
          'transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitive.Root>
  )
}
