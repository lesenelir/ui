'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

export type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root>
export type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot={'radio-group'}
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

export function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot={'radio-group-item'}
      className={cn(
        'text-fg-rev aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none',
        'aria-invalid:ring-rose-500/20 dark:aria-invalid:ring-rose-500/40 aria-invalid:border-rose-500',
        'focus-visible-ring focus-visible:ring-[3px]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot={'radio-group-indicator'}
        className={'relative flex items-center justify-center'}
      >
        <span
          className={
            'i-tabler-circle-filled size-2 bg-fg-rev absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          }
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}
