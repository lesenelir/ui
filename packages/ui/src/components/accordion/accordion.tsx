'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cva, type VariantProps } from 'class-variance-authority'

// type AccordionVariant = 'default' | 'split' | 'shadow'

const accordionVariants = cva('', {
  variants: {
    variant: {
      default: 'overflow-hidden bg-bg',
      split: 'overflow-hidden bg-bg space-y-4',
      shadow: 'overflow-hidden bg-bg border rounded-md shadow-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const accordionItemVariants = cva('', {
  variants: {
    variant: {
      default: 'border-b last:border-b-0',
      split: 'data-[state=open]:shadow-xs',
      shadow: 'border-b last:border-b-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const accordionTriggerVariants = cva('', {
  variants: {
    variant: {
      default: 'py-4',
      split: 'from-fg to-fg/0 bg-linear-to-b p-4',
      shadow:
        'p-4 rounded-none data-[state=open]:from-fg data-[state=open]:to-fg/0 data-[state=open]:bg-linear-to-b',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>
export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> &
  VariantProps<typeof accordionItemVariants>
export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> &
  VariantProps<typeof accordionTriggerVariants>
export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>

export function Accordion({ className, variant = 'split', ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot={'accordion'}
      className={cn(accordionVariants({ variant }), className)}
      {...props}
    />
  )
}

export function AccordionItem({ className, variant = 'split', ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot={'accordion-item'}
      className={cn(accordionItemVariants({ variant }), className)}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  variant = 'split',
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className={'flex'}>
      <AccordionPrimitive.Trigger
        data-slot={'accordion-trigger'}
        className={cn(
          'flex flex-1 items-start justify-between gap-4 rounded-md text-left text-sm font-medium transition-all outline-none',
          'disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>span]:rotate-180',
          'focus-ring',
          accordionTriggerVariants({ variant }),
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

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot={'accordion-content'}
      className={
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
      }
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
