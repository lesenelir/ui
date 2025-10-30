'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

export type SeparatorProps = React.ComponentPropsWithRef<typeof SeparatorPrimitive.Root> & {
  extended?: boolean
  position?: 'center' | 'start' | 'end'
}

export function Separator({
  className,
  ref,
  orientation = 'horizontal',
  decorative = true,
  position = 'start',
  extended = false,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      data-slot={'separator'}
      orientation={orientation}
      decorative={decorative}
      className={cn(
        'relative flex items-center gap-1.5 text-xs whitespace-nowrap shrink-0',

        // Horizontal mode needs to support inline text, use pseudo elements for lines
        'data-[orientation=horizontal]:after:content-[""] data-[orientation=horizontal]:after:bg-fg/20',
        'data-[orientation=horizontal]:after:h-px data-[orientation=horizontal]:after:w-full',
        'data-[orientation=horizontal]:before:content-[""] data-[orientation=horizontal]:before:bg-fg/20',
        'data-[orientation=horizontal]:before:h-px data-[orientation=horizontal]:before:w-full',

        // Extended mode
        // extended && 'before:border-t-fg/20 before:w-2.5 before:border-t before:content-[""]',
        'data-[extended=true]:data-[position=start]:data-[orientation=horizontal]:before:w-2.5',
        'data-[extended=true]:data-[position=end]:data-[orientation=horizontal]:after:w-2.5',

        // Positions
        'data-[extended=false]:data-[position=end]:data-[orientation=horizontal]:after:hidden',
        'data-[extended=false]:data-[position=start]:data-[orientation=horizontal]:before:hidden',

        // Vertical mode does not need to support inline text, use background color instead
        'data-[orientation=vertical]:bg-fg/20',
        'data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full',
        className
      )}
      {...props}
    />
  )
}
