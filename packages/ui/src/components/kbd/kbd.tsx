'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'

export type KbdProps = React.ComponentPropsWithRef<'kbd'>
export type KbdGroupProps = React.ComponentPropsWithRef<'div'>

export function Kbd({ className, ref, ...props }: KbdProps) {
  return (
    <kbd
      ref={ref}
      data-slot={'kbd'}
      className={cn(
        'bg-fg-rev/10 text-fg-rev/90 pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none',
        "[&_svg:not([class*='size-'])]:size-3 [&_span:not([class*='size-'])]:size-3",
        '[[data-slot=tooltip-content]_&]:bg-fg-rev/10 [[data-slot=tooltip-content]_&]:text-fg-rev/90',
        className
      )}
      {...props}
    />
  )
}

export function KbdGroup({ className, ref, ...props }: KbdGroupProps) {
  return (
    <kbd
      ref={ref}
      data-slot={'kbd-group'}
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}
