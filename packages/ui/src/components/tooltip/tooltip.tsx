'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export type TooltipProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>
export type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root>
export type TooltipTriggerProps = React.ComponentProps<typeof TooltipPrimitive.Trigger>
export type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content> & {
  showArrow?: boolean
}

export function TooltipProvider({ delayDuration = 300, ...props }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot={'tooltip-provider'}
      delayDuration={delayDuration}
      {...props}
    />
  )
}

export function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot={'tooltip'} {...props} />
    </TooltipProvider>
  )
}

export function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot={'tooltip-trigger'} {...props} />
}

export function TooltipContent({
  className,
  sideOffset = 0,
  showArrow = true,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot={'tooltip-content'}
        sideOffset={sideOffset}
        className={cn(
          'bg-bg drop-shadow-sm z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance origin-(--radix-tooltip-content-transform-origin)',
          'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <TooltipPrimitive.Arrow
            className={
              'bg-bg fill-bg z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]'
            }
          />
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}
