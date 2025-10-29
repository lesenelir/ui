'use client'

import type React from 'react'
import { createContext, useContext } from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, type VariantProps } from 'class-variance-authority'

export type TabsVariant = 'solid' | 'underline' | 'light' | 'bordered'

export const TabsVariantContext = createContext<TabsVariant>('solid')

const tabsListVariants = cva('', {
  variants: {
    variant: {
      solid: 'bg-fg text-fg-rev/75',
      underline: 'bg-transparent p-0 gap-3 rounded-none text-fg-rev/75',
      bordered: 'bg-transparent border-2 border-border',
      light: 'bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

const tabsTriggerVariants = cva('', {
  variants: {
    variant: {
      solid:
        'data-[state=active]:bg-bg data-[state=active]:text-fg-rev data-[state=active]:shadow-sm',
      underline:
        'px-0 transition-[color,border-color] rounded-none border-b-2 border-transparent data-[state=active]:text-fg-rev data-[state=active]:border-fg-rev',
      bordered:
        'data-[state=active]:border data-[state=active]:border-border data-[state=active]:shadow-sm',
      light:
        'data-[state=active]:bg-bg data-[state=active]:text-fg-rev data-[state=active]:border data-[state=active]:border-border data-[state=active]:shadow-sm',
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

export type TabsProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Root> &
  VariantProps<typeof tabsListVariants>
export type TabsListProps = React.ComponentPropsWithRef<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>
export type TabsTriggerProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>
export type TabsContentProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Content>

export function Tabs({ className, ref, variant, ...props }: TabsProps) {
  const variantValue = variant ?? 'solid'

  return (
    <TabsVariantContext.Provider value={variantValue}>
      <TabsPrimitive.Root
        ref={ref}
        data-slot={'tabs'}
        className={cn('flex flex-col gap-2', className)}
        {...props}
      />
    </TabsVariantContext.Provider>
  )
}

export function TabsList({ className, ref, variant, ...props }: TabsListProps) {
  const contextVariant = useContext(TabsVariantContext)
  const variantValue = variant ?? contextVariant

  return (
    <TabsPrimitive.List
      ref={ref}
      data-slot={'tabs-list'}
      className={cn(
        'inline-flex gap-1 w-fit items-center justify-center rounded-lg p-1',
        tabsListVariants({ variant: variantValue }),
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({ className, ref, variant, ...props }: TabsTriggerProps) {
  const contextVariant = useContext(TabsVariantContext)
  const variantValue = variant ?? contextVariant

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      data-slot={'tabs-trigger'}
      className={cn(
        'cursor-pointer inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow]',
        'focus-visible-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        "[&_span]:pointer-events-none [&_span]:shrink-0 [&_span:not([class*='size-'])]:size-4",
        tabsTriggerVariants({ variant: variantValue }),
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
