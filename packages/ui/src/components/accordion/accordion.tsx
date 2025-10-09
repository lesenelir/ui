'use client'

import type React from 'react'
import { createContext, useContext } from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cva, type VariantProps } from 'class-variance-authority'

export type AccordionVariant = 'default' | 'split' | 'shadow'

const AccordionVariantContext = createContext<AccordionVariant>('default')

const accordionVariants = cva('', {
  variants: {
    variant: {
      default: 'overflow-hidden bg-transport',
      split: 'overflow-hidden bg-transport space-y-4',
      shadow: 'overflow-hidden bg-transport border rounded-md shadow-lg',
    },
  },
})

const accordionItemVariants = cva('', {
  variants: {
    variant: {
      default: 'border-b last:border-b-0',
      split: 'data-[state=open]:shadow-sm data-[state=open]:border rounded-md',
      shadow: 'border-b last:border-b-0',
    },
  },
})

const accordionTriggerVariants = cva('', {
  variants: {
    variant: {
      default: 'py-4',
      split: 'p-4 from-fg to-fg/0 bg-linear-to-b',
      shadow:
        'p-4 rounded-none data-[state=open]:from-fg data-[state=open]:to-fg/0 data-[state=open]:bg-linear-to-b',
    },
  },
})

const accordionContentVariants = cva('', {
  variants: {
    variant: {
      default: '',
      split: 'px-4',
      shadow: 'px-4',
    },
  },
})

export type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>
export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> &
  VariantProps<typeof accordionItemVariants>
export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> &
  VariantProps<typeof accordionTriggerVariants>
export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content> &
  VariantProps<typeof accordionContentVariants>

export function Accordion({ className, variant, ...props }: AccordionProps) {
  const variantValue = variant ?? 'default'

  return (
    <AccordionVariantContext.Provider value={variantValue}>
      <AccordionPrimitive.Root
        data-slot={'accordion'}
        className={cn(accordionVariants({ variant: variantValue }), className)}
        {...props}
      />
    </AccordionVariantContext.Provider>
  )
}

export function AccordionItem({ className, variant, ...props }: AccordionItemProps) {
  const contextVariant = useContext(AccordionVariantContext)
  const variantValue = variant ?? contextVariant

  return (
    <AccordionPrimitive.Item
      data-slot={'accordion-item'}
      className={cn(accordionItemVariants({ variant: variantValue }), className)}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  variant,
  children,
  ...props
}: AccordionTriggerProps) {
  const contextVariant = useContext(AccordionVariantContext)
  const variantValue = variant ?? contextVariant

  return (
    <AccordionPrimitive.Header className={'flex'}>
      <AccordionPrimitive.Trigger
        data-slot={'accordion-trigger'}
        className={cn(
          'flex flex-1 items-start justify-between gap-4 rounded-md text-left text-sm font-medium transition-all outline-none',
          'disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>span]:rotate-180',
          'focus-ring',
          accordionTriggerVariants({ variant: variantValue }),
          className
        )}
        {...props}
      >
        {children}
        <span
          className={
            'i-tabler-chevron-down pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200'
          }
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  variant,
  children,
  ...props
}: AccordionContentProps) {
  const contextVariant = useContext(AccordionVariantContext)
  const variantValue = variant ?? contextVariant

  return (
    <AccordionPrimitive.Content
      data-slot={'accordion-content'}
      className={cn(
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm',
        accordionContentVariants({ variant: variantValue }),
        className
      )}
      {...props}
    >
      <div className={cn('pt-0 pb-4 text-left', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
