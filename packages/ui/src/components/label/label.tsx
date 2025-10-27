'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as LabelPrimitive from '@radix-ui/react-label'

export type LabelProps = React.ComponentPropsWithRef<typeof LabelPrimitive.Root>

export function Label({ className, ref, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      data-slot={'label'}
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none whitespace-nowrap',
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
