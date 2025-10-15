'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as ProgressPrimitive from '@radix-ui/react-progress'

export type ProgressProps = React.ComponentPropsWithRef<typeof ProgressPrimitive.Root>

export function Progress({ className, value, ref, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot={'progress'}
      className={cn('bg-fg-rev/20 relative h-2 w-full overflow-hidden rounded-full', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot={'progress-indicator'}
        className={cn('bg-ac size-full flex-1 transition-all')}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}
