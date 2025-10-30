'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'

export type SpinnerProps = React.ComponentPropsWithRef<'span'> & {
  variant?: 'circle' | 'radial' | 'quarter'
}

export function Spinner({ variant = 'circle', className, ref, ...props }: SpinnerProps) {
  return (
    <span
      ref={ref}
      data-slot={'spinner'}
      className={cn(
        variant === 'radial' && 'i-tabler-loader',
        variant === 'circle' && 'i-tabler-loader-2',
        variant === 'quarter' && 'i-tabler-loader-quarter',
        'animate-spin',
        className
      )}
      {...props}
    />
  )
}
