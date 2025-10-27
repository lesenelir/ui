'use client'

import type React from 'react'
import { createContext, useContext } from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, type VariantProps } from 'class-variance-authority'

export type TabsVariant = 'solid' | 'underline' | 'light'

export const TabsVariantContext = createContext<TabsVariant>('solid')

const tabsListVariants = cva('', {
  variants: {
    variant: {
      solid: '',
      underline: '',
      light: '',
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

const tabsTriggerVariants = cva('', {
  variants: {
    variant: {
      solid: '',
      underline: '',
      light: '',
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
        'bg-fg text-fg-rev/75 inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
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
