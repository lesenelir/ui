'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const spinnerVariants = cva('', {
  variants: {
    variant: {
      radial: 'i-tabler-loader',
      circle: 'i-tabler-loader-2',
      quarter: 'i-tabler-loader-quarter',
    },
  },
  defaultVariants: {
    variant: 'circle',
  },
})

export type SpinnerProps = React.ComponentPropsWithRef<'span'> &
  VariantProps<typeof spinnerVariants>

export function Spinner({ variant = 'circle', className, ref, ...props }: SpinnerProps) {
  return (
    <span
      ref={ref}
      data-slot={'spinner'}
      className={cn(spinnerVariants({ variant }), 'animate-spin', className)}
      {...props}
    />
  )
}
