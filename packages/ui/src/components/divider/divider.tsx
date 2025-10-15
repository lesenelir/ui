'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const dividerVariants = cva('', {
  variants: {
    orientation: {
      horizontal: '',
      vertical: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type DividerProps = React.ComponentPropsWithRef<'hr'> & VariantProps<typeof dividerVariants>

export function Divider({ className, orientation, ...props }: DividerProps) {
  return <hr className={cn(dividerVariants({ orientation }), className)} {...props} />
}
