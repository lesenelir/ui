'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

export type HoverCardProps = React.ComponentPropsWithRef<typeof HoverCardPrimitive.Root>
export type HoverCardTriggerProps = React.ComponentPropsWithRef<typeof HoverCardPrimitive.Trigger>
export type HoverCardContentProps = React.ComponentPropsWithRef<typeof HoverCardPrimitive.Content>

export function HoverCard({ openDelay = 500, ...props }: HoverCardProps) {
  return <HoverCardPrimitive.Root data-slot={'hover-card'} openDelay={openDelay} {...props} />
}

export function HoverCardTrigger({ ...props }: HoverCardTriggerProps) {
  return <HoverCardPrimitive.Trigger data-slot={'hover-card-trigger'} {...props} />
}

export function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: HoverCardContentProps) {
  return (
    <HoverCardPrimitive.Portal data-slot={'hover-card-portal'}>
      <HoverCardPrimitive.Content
        data-slot={'hover-card-content'}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-bg text-fg-rev z-50 w-64 rounded-md shadow-md border p-4 outline-hidden',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          'origin-(--radix-hover-card-content-transform-origin)',
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}
