'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export type TabsProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Root>
export type TabsListProps = React.ComponentPropsWithRef<typeof TabsPrimitive.List>
export type TabsTriggerProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>
export type TabsContentProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Content>

export function Tabs({ className, ref, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      ref={ref}
      data-slot={'tabs'}
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

export function TabsList({ className, ref, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      ref={ref}
      data-slot={'tabs-list'}
      className={cn(
        'bg-fg text-fg-rev/75 inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({ className, ref, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.TabsTrigger
      ref={ref}
      data-slot={'tabs-trigger'}
      className={cn(
        // dark:data-[state=active]:border
        'inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow]',
        'data-[state=active]:bg-bg data-[state=active]:text-fg-rev data-[state=active]:shadow-sm',
        'focus-visible-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        "[&_span]:pointer-events-none [&_span]:shrink-0 [&_span:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

export function TabsContent({ className, ref, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      data-slot={'tabs-content'}
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}
