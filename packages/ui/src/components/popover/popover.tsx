'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'

export type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root>
export type PopoverTriggerProps = React.ComponentProps<typeof PopoverPrimitive.Trigger>
export type PopoverContentProps = React.ComponentProps<typeof PopoverPrimitive.Content>
export type PopoverAnchorProps = React.ComponentProps<typeof PopoverPrimitive.Anchor>

export function Popover({ ...props }: PopoverProps) {
  return <PopoverPrimitive.Root data-slot={'popover'} {...props} />
}

export function PopoverTrigger({ ...props }: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger data-slot={'popover-trigger'} {...props} />
}

export function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot={'popover-content'}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'w-fit p-4 bg-bg text-fg-rev z-50 rounded-md outline-hidden border shadow-md',
          'origin-(--radix-popover-content-transform-origin)',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

export function PopoverAnchor({ ...props }: PopoverAnchorProps) {
  return <PopoverPrimitive.Anchor data-slot={'popover-anchor'} {...props} />
}
