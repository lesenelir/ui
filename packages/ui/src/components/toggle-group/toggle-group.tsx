'use client'

import React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { toggleVariants } from '@lesenelir/ui/toggle'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import type { VariantProps } from 'class-variance-authority'

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  variant: 'default',
  size: 'default',
  tint: 'accent',
})

export type ToggleGroupProps = React.ComponentPropsWithRef<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>
export type ToggleGroupItemProps = React.ComponentPropsWithRef<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>

export function ToggleGroup({
  className,
  variant,
  size,
  tint,
  children,
  ref,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      data-slot={'toggle-group'}
      data-variant={variant}
      data-size={size}
      data-tint={tint}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, tint }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

export function ToggleGroupItem({
  className,
  variant,
  size,
  tint,
  children,
  ref,
  ...props
}: ToggleGroupItemProps) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      data-slot={'toggle-group-item'}
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-tint={context.tint || tint}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
          tint: context.tint || tint,
        }),
        'min-w-0 flex-1 shrink-0 rounded-none shadow-none',
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}
