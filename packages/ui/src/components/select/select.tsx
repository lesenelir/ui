'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>
export type SelectGroupProps = React.ComponentProps<typeof SelectPrimitive.Group>
export type SelectValueProps = React.ComponentProps<typeof SelectPrimitive.Value>
export type SelectTriggerProps = React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default'
}
export type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Content>
export type SelectLabelProps = React.ComponentProps<typeof SelectPrimitive.Label>
export type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item> & {
  tint?: 'default' | 'accent' | 'rose'
}
export type SelectSeparatorProps = React.ComponentProps<typeof SelectPrimitive.Separator>
export type SelectScrollUpButtonProps = React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>
export type SelectScrollDownButtonProps = React.ComponentProps<
  typeof SelectPrimitive.ScrollDownButton
>

export function Select({ ...props }: SelectProps) {
  return <SelectPrimitive.Root data-slot={'select'} {...props} />
}

export function SelectGroup({ ...props }: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot={'select-group'} {...props} />
}

export function SelectValue({ ...props }: SelectValueProps) {
  return <SelectPrimitive.Value data-slot={'select-value'} {...props} />
}

export function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot={'select-trigger'}
      data-size={size}
      className={cn(
        'flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none',
        'data-[size=default]:h-9 data-[size=sm]:h-8 data-[placeholder]:text-fg-rev/50',
        'focus-visible-ring',
        "[&_svg:not([class*='text-'])]:text-muted-foreground",
        '*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        'aria-invalid:ring-rose-500/20 dark:aria-invalid:ring-rose-500/40 aria-invalid:border-rose-500',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <span className={'i-tabler-chevron-down size-4 opacity-50'} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export function SelectContent({
  className,
  children,
  position = 'popper',
  align = 'center',
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot={'select-content'}
        className={cn(
          'bg-bg text-fg-rev relative z-50 overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          'max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin)',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',

          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',

          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot={'select-label'}
      className={cn('py-1.5 px-2 text-xs font-medium text-fg-rev/40', className)}
      {...props}
    />
  )
}

export function SelectItem({ className, children, tint = 'default', ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot={'select-item'}
      className={cn(
        'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "[&_svg:not([class*='text-'])]:text-fg-rev/50",
        '*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',

        tint === 'default' && 'focus:bg-border/50 focus:text-fg-rev',
        tint === 'accent' && 'focus:bg-ac/10 focus:text-ac',
        tint === 'rose' && 'focus:bg-rose-500/10 focus:text-rose-500',

        className
      )}
      {...props}
    >
      <span className={'absolute right-2 flex size-3.5 items-center justify-center'}>
        <SelectPrimitive.ItemIndicator>
          <span className={'i-tabler-check size-4'} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot={'select-separator'}
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

export function SelectScrollUpButton({ className, ...props }: SelectScrollUpButtonProps) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot={'select-scroll-up-button'}
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <span className={'i-tabler-chevron-up size-4'} />
    </SelectPrimitive.ScrollUpButton>
  )
}

export function SelectScrollDownButton({ className, ...props }: SelectScrollDownButtonProps) {
  return (
    <SelectPrimitive.SelectScrollDownButton
      data-slot={'select-scroll-down-button'}
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <span className={'i-tabler-chevron-down size-4'} />
    </SelectPrimitive.SelectScrollDownButton>
  )
}
