'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium outline-none transition-[color,box-shadow] whitespace-nowrap',
    'focus-visible-ring',
    'hover:bg-fg data-[state=on]:bg-ac/10 data-[state=on]:text-ac',
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
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      ref={ref}
      data-slot={'toggle'}
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
}
