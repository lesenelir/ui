'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const dividerVariants = cva('border-0 bg-border shrink-0', {
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px inline-block',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type DividerProps = React.ComponentPropsWithRef<'div'> & VariantProps<typeof dividerVariants>

export function Divider({ className, orientation = 'horizontal', ...props }: DividerProps) {
  return (
    <div
      data-slot={'divider'}
      className={cn(dividerVariants({ orientation }), className)}
      {...props}
    />
  )
}
