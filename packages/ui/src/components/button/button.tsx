'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'appearance-none whitespace-nowrap inline-flex items-center justify-center gap-2 cursor-pointer rounded-md font-medium text-sm transition-all focus-visible-ring disabled:pointer-events-none disabled:opacity-50 outline-none shrink-0 [&_span]:shrink-0 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-fg-rev text-fg hover:bg-fg-rev/85',
        outline: 'border hover:bg-fg',
        link: 'underline-offset-2 hover:underline',
        ghost: 'text-fg-rev bg-transparent',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>span]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>span]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>span]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
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
      // Solid (default variant) + tint combinations
      {
        variant: 'default',
        tint: 'accent',
        className: 'bg-ac text-fg hover:bg-ac/90 active:bg-ac/75',
      },
      {
        variant: 'default',
        tint: 'red',
        className: 'bg-red-600 text-white hover:bg-red-700',
      },
      {
        variant: 'default',
        tint: 'orange',
        className: 'bg-orange-600 text-white hover:bg-orange-700',
      },
      {
        variant: 'default',
        tint: 'amber',
        className: 'bg-amber-500 text-white hover:bg-amber-600',
      },
      {
        variant: 'default',
        tint: 'yellow',
        className: 'bg-yellow-500 text-white hover:bg-yellow-600',
      },
      {
        variant: 'default',
        tint: 'lime',
        className: 'bg-lime-600 text-white hover:bg-lime-700',
      },
      {
        variant: 'default',
        tint: 'green',
        className: 'bg-green-600 text-white hover:bg-green-700',
      },
      {
        variant: 'default',
        tint: 'emerald',
        className: 'bg-emerald-600 text-white hover:bg-emerald-700',
      },
      {
        variant: 'default',
        tint: 'teal',
        className: 'bg-teal-600 text-white hover:bg-teal-700',
      },
      {
        variant: 'default',
        tint: 'cyan',
        className: 'bg-cyan-600 text-white hover:bg-cyan-700',
      },
      {
        variant: 'default',
        tint: 'sky',
        className: 'bg-sky-600 text-white hover:bg-sky-700',
      },
      {
        variant: 'default',
        tint: 'blue',
        className: 'bg-blue-600 text-white hover:bg-blue-700',
      },
      {
        variant: 'default',
        tint: 'indigo',
        className: 'bg-indigo-600 text-white hover:bg-indigo-700',
      },
      {
        variant: 'default',
        tint: 'violet',
        className: 'bg-violet-600 text-white hover:bg-violet-700',
      },
      {
        variant: 'default',
        tint: 'purple',
        className: 'bg-purple-600 text-white hover:bg-purple-700',
      },
      {
        variant: 'default',
        tint: 'fuchsia',
        className: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700',
      },
      {
        variant: 'default',
        tint: 'pink',
        className: 'bg-pink-600 text-white hover:bg-pink-700',
      },
      {
        variant: 'default',
        tint: 'rose',
        className: 'bg-rose-600 text-white hover:bg-rose-700',
      },
      {
        variant: 'default',
        tint: 'slate',
        className: 'bg-slate-600 text-white hover:bg-slate-700',
      },
      {
        variant: 'default',
        tint: 'gray',
        className: 'bg-gray-600 text-white hover:bg-gray-700',
      },
      {
        variant: 'default',
        tint: 'zinc',
        className: 'bg-zinc-600 text-white hover:bg-zinc-700',
      },
      {
        variant: 'default',
        tint: 'neutral',
        className: 'bg-neutral-600 text-white hover:bg-neutral-700',
      },
      {
        variant: 'default',
        tint: 'stone',
        className: 'bg-stone-600 text-white hover:bg-stone-700',
      },
      // Outline variant + tint combinations
      {
        variant: 'outline',
        tint: 'accent',
        className: 'border-ac text-ac hover:bg-ac/10 active:bg-ac/15',
      },
      {
        variant: 'outline',
        tint: 'red',
        className: 'border-red-300 text-red-700 hover:bg-red-50',
      },
      {
        variant: 'outline',
        tint: 'orange',
        className: 'border-orange-300 text-orange-700 hover:bg-orange-50',
      },
      {
        variant: 'outline',
        tint: 'amber',
        className: 'border-amber-300 text-amber-700 hover:bg-amber-50',
      },
      {
        variant: 'outline',
        tint: 'yellow',
        className: 'border-yellow-300 text-yellow-700 hover:bg-yellow-50',
      },
      {
        variant: 'outline',
        tint: 'lime',
        className: 'border-lime-300 text-lime-700 hover:bg-lime-50',
      },
      {
        variant: 'outline',
        tint: 'green',
        className: 'border-green-300 text-green-700 hover:bg-green-50',
      },
      {
        variant: 'outline',
        tint: 'emerald',
        className: 'border-emerald-300 text-emerald-700 hover:bg-emerald-50',
      },
      {
        variant: 'outline',
        tint: 'teal',
        className: 'border-teal-300 text-teal-700 hover:bg-teal-50',
      },
      {
        variant: 'outline',
        tint: 'cyan',
        className: 'border-cyan-300 text-cyan-700 hover:bg-cyan-50',
      },
      {
        variant: 'outline',
        tint: 'sky',
        className: 'border-sky-300 text-sky-700 hover:bg-sky-50',
      },
      {
        variant: 'outline',
        tint: 'blue',
        className: 'border-blue-300 text-blue-700 hover:bg-blue-50',
      },
      {
        variant: 'outline',
        tint: 'indigo',
        className: 'border-indigo-300 text-indigo-700 hover:bg-indigo-50',
      },
      {
        variant: 'outline',
        tint: 'violet',
        className: 'border-violet-300 text-violet-700 hover:bg-violet-50',
      },
      {
        variant: 'outline',
        tint: 'purple',
        className: 'border-purple-300 text-purple-700 hover:bg-purple-50',
      },
      {
        variant: 'outline',
        tint: 'fuchsia',
        className: 'border-fuchsia-300 text-fuchsia-700 hover:bg-fuchsia-50',
      },
      {
        variant: 'outline',
        tint: 'pink',
        className: 'border-pink-300 text-pink-700 hover:bg-pink-50',
      },
      {
        variant: 'outline',
        tint: 'rose',
        className: 'border-rose-300 text-rose-700 hover:bg-rose-50',
      },
      {
        variant: 'outline',
        tint: 'slate',
        className: 'border-slate-300 text-slate-700 hover:bg-slate-50',
      },
      {
        variant: 'outline',
        tint: 'gray',
        className: 'border-gray-300 text-gray-700 hover:bg-gray-50',
      },
      {
        variant: 'outline',
        tint: 'zinc',
        className: 'border-zinc-300 text-zinc-700 hover:bg-zinc-50',
      },
      {
        variant: 'outline',
        tint: 'neutral',
        className: 'border-neutral-300 text-neutral-700 hover:bg-neutral-50',
      },
      {
        variant: 'outline',
        tint: 'stone',
        className: 'border-stone-300 text-stone-700 hover:bg-stone-50',
      },
      // Ghost variant + tint combinations
      {
        variant: 'ghost',
        tint: 'accent',
        className: 'text-ac hover:bg-ac/10 active:bg-ac/15',
      },
      {
        variant: 'ghost',
        tint: 'red',
        className: 'text-red-600 hover:bg-red-50 active:bg-red-100',
      },
      {
        variant: 'ghost',
        tint: 'orange',
        className: 'text-orange-600 hover:bg-orange-50 active:bg-orange-100',
      },
      {
        variant: 'ghost',
        tint: 'amber',
        className: 'text-amber-600 hover:bg-amber-50 active:bg-amber-100',
      },
      {
        variant: 'ghost',
        tint: 'yellow',
        className: 'text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100',
      },
      {
        variant: 'ghost',
        tint: 'lime',
        className: 'text-lime-600 hover:bg-lime-50 active:bg-lime-100',
      },
      {
        variant: 'ghost',
        tint: 'green',
        className: 'text-green-600 hover:bg-green-50 active:bg-green-100',
      },
      {
        variant: 'ghost',
        tint: 'emerald',
        className: 'text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100',
      },
      {
        variant: 'ghost',
        tint: 'teal',
        className: 'text-teal-600 hover:bg-teal-50 active:bg-teal-100',
      },
      {
        variant: 'ghost',
        tint: 'cyan',
        className: 'text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100',
      },
      {
        variant: 'ghost',
        tint: 'sky',
        className: 'text-sky-600 hover:bg-sky-50 active:bg-sky-100',
      },
      {
        variant: 'ghost',
        tint: 'blue',
        className: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100',
      },
      {
        variant: 'ghost',
        tint: 'indigo',
        className: 'text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100',
      },
      {
        variant: 'ghost',
        tint: 'violet',
        className: 'text-violet-600 hover:bg-violet-50 active:bg-violet-100',
      },
      {
        variant: 'ghost',
        tint: 'purple',
        className: 'text-purple-600 hover:bg-purple-50 active:bg-purple-100',
      },
      {
        variant: 'ghost',
        tint: 'fuchsia',
        className: 'text-fuchsia-600 hover:bg-fuchsia-50 active:bg-fuchsia-100',
      },
      {
        variant: 'ghost',
        tint: 'pink',
        className: 'text-pink-600 hover:bg-pink-50 active:bg-pink-100',
      },
      {
        variant: 'ghost',
        tint: 'rose',
        className: 'text-rose-600 hover:bg-rose-50 active:bg-rose-100',
      },
      {
        variant: 'ghost',
        tint: 'slate',
        className: 'text-slate-600 hover:bg-slate-50 active:bg-slate-100',
      },
      {
        variant: 'ghost',
        tint: 'gray',
        className: 'text-gray-600 hover:bg-gray-50 active:bg-gray-100',
      },
      {
        variant: 'ghost',
        tint: 'zinc',
        className: 'text-zinc-600 hover:bg-zinc-50 active:bg-zinc-100',
      },
      {
        variant: 'ghost',
        tint: 'neutral',
        className: 'text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100',
      },
      {
        variant: 'ghost',
        tint: 'stone',
        className: 'text-stone-600 hover:bg-stone-50 active:bg-stone-100',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
      tint: 'default',
    },
  }
)

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    // https://www.radix-ui.com/primitives/docs/utilities/slot
    // Merges its props onto its immediate child. no extra DOM node.
    asChild?: boolean
    isLoading?: boolean
    leftSection?: React.ReactNode
    leftSectionClassName?: string
    rightSection?: React.ReactNode
    rightSectionClassName?: string
  }

export function Button({
  className,
  variant = 'default',
  size = 'default',
  tint = 'default',
  asChild = false,
  isLoading = false,
  disabled = false,
  children,
  leftSection,
  leftSectionClassName,
  rightSection,
  rightSectionClassName,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot={'button'}
      className={cn(buttonVariants({ variant, size, tint }), className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {leftSection && (
        <div className={cn('flex items-center justify-center', leftSectionClassName)}>
          {leftSection}
        </div>
      )}
      <Slottable>{children}</Slottable>
      {isLoading && <span className={'i-tabler-loader-2 animate-spin'} />}
      {rightSection && (
        <div className={cn('flex items-center justify-center', rightSectionClassName)}>
          {rightSection}
        </div>
      )}
    </Comp>
  )
}
