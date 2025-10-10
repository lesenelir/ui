'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'appearance-none whitespace-nowrap inline-flex items-center justify-center gap-2 cursor-pointer rounded-md font-medium text-sm transition-all focus-ring disabled:cursor-not-allowed disabled:opacity-50 outline-none shrink-0 [&_span]:shrink-0',
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
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
      className={cn(buttonVariants({ variant, size }), className)}
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
