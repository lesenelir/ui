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
        className: 'data-[state=checked]:bg-ac',
      },
      {
        tint: 'red',
        className: 'data-[state=checked]:bg-red-600',
      },
      {
        tint: 'orange',
        className: 'data-[state=checked]:bg-orange-600',
      },
      {
        tint: 'amber',
        className: 'data-[state=checked]:bg-amber-600',
      },
      {
        tint: 'yellow',
        className: 'data-[state=checked]:bg-yellow-600',
      },
      {
        tint: 'lime',
        className: 'data-[state=checked]:bg-lime-600',
      },
      {
        tint: 'green',
        className: 'data-[state=checked]:bg-green-600',
      },
      {
        tint: 'emerald',
        className: 'data-[state=checked]:bg-emerald-600',
      },
      {
        tint: 'teal',
        className: 'data-[state=checked]:bg-teal-600',
      },
      {
        tint: 'cyan',
        className: 'data-[state=checked]:bg-cyan-600',
      },
      {
        tint: 'sky',
        className: 'data-[state=checked]:bg-sky-600',
      },
      {
        tint: 'blue',
        className: 'data-[state=checked]:bg-blue-600',
      },
      {
        tint: 'indigo',
        className: 'data-[state=checked]:bg-indigo-600',
      },
      {
        tint: 'violet',
        className: 'data-[state=checked]:bg-violet-600',
      },
      {
        tint: 'purple',
        className: 'data-[state=checked]:bg-purple-600',
      },
      {
        tint: 'fuchsia',
        className: 'data-[state=checked]:bg-fuchsia-600',
      },
      {
        tint: 'pink',
        className: 'data-[state=checked]:bg-pink-600',
      },
      {
        tint: 'rose',
        className: 'data-[state=checked]:bg-rose-600',
      },
      {
        tint: 'slate',
        className: 'data-[state=checked]:bg-slate-600',
      },
      {
        tint: 'gray',
        className: 'data-[state=checked]:bg-gray-600',
      },
      {
        tint: 'zinc',
        className: 'data-[state=checked]:bg-zinc-600',
      },
      {
        tint: 'neutral',
        className: 'data-[state=checked]:bg-neutral-600',
      },
      {
        tint: 'stone',
        className: 'data-[state=checked]:bg-stone-600',
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
