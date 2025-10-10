'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'appearance-none whitespace-nowrap inline-flex items-center justify-center gap-2 cursor-pointer rounded-md font-medium text-sm transition-all focus-ring disabled:pointer-events-none disabled:opacity-50 outline-none shrink-0 [&_span]:shrink-0 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-fg-rev text-fg hover:bg-fg-rev/85',
        outline: 'border hover:bg-fg',
        accentOutline: 'border border-ac text-ac hover:bg-ac/10 active:bg-ac/15',
        accentSolid: 'bg-ac text-fg hover:bg-ac/90 active:bg-ac/75',
        link: 'underline-offset-2 hover:underline',
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
        gray: '',
        red: '',
        orange: '',
        amber: '',
        green: '',
        blue: '',
        purple: '',
        pink: '',
      },
    },
    compoundVariants: [
      // Solid (default variant) + tint combinations
      {
        variant: 'default',
        tint: 'accent',
        className: 'bg-ac text-fg hover:bg-ac/90',
      },
      {
        variant: 'default',
        tint: 'gray',
        className: 'bg-gray-600 text-white hover:bg-gray-700',
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
        tint: 'green',
        className: 'bg-green-600 text-white hover:bg-green-700',
      },
      {
        variant: 'default',
        tint: 'blue',
        className: 'bg-blue-600 text-white hover:bg-blue-700',
      },
      {
        variant: 'default',
        tint: 'purple',
        className: 'bg-purple-600 text-white hover:bg-purple-700',
      },
      {
        variant: 'default',
        tint: 'pink',
        className: 'bg-pink-600 text-white hover:bg-pink-700',
      },
      // Outline variant + tint combinations
      {
        variant: 'outline',
        tint: 'accent',
        className: 'border-ac text-ac hover:bg-ac/10',
      },
      {
        variant: 'outline',
        tint: 'gray',
        className: 'border-gray-300 text-gray-700 hover:bg-gray-50',
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
        tint: 'green',
        className: 'border-green-300 text-green-700 hover:bg-green-50',
      },
      {
        variant: 'outline',
        tint: 'blue',
        className: 'border-blue-300 text-blue-700 hover:bg-blue-50',
      },
      {
        variant: 'outline',
        tint: 'purple',
        className: 'border-purple-300 text-purple-700 hover:bg-purple-50',
      },
      {
        variant: 'outline',
        tint: 'pink',
        className: 'border-pink-300 text-pink-700 hover:bg-pink-50',
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
