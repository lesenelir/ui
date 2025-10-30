'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

export type SeparatorProps = React.ComponentPropsWithRef<typeof SeparatorPrimitive.Root>

export function Separator({
  className,
  ref,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      data-slot={'separator'}
      orientation={orientation}
      decorative={decorative}
      className={cn(
        'bg-fg-rev/20 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className
      )}
      {...props}
    />
  )
}
