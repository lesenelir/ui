'use client'

import type React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@lesenelir/ui/dialog'
import { cn } from '@lesenelir/ui/lib/utils'
import { Command as CommandPrimitive } from 'cmdk'

export type CommandProps = React.ComponentProps<typeof CommandPrimitive>
export type CommandDialogProps = React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}
export type CommandInputProps = React.ComponentProps<typeof CommandPrimitive.Input>
export type CommandListProps = React.ComponentProps<typeof CommandPrimitive.List>
export type CommandEmptyProps = React.ComponentProps<typeof CommandPrimitive.Empty>
export type CommandGroupProps = React.ComponentProps<typeof CommandPrimitive.Group>
export type CommandSeparatorProps = React.ComponentProps<typeof CommandPrimitive.Separator>
export type CommandItemProps = React.ComponentProps<typeof CommandPrimitive.Item> & {
  tint?: 'default' | 'accent' | 'rose'
}
export type CommandShortcutProps = React.ComponentProps<'span'>

export function Command({ className, ...props }: CommandProps) {
  return (
    <CommandPrimitive
      data-slot={'command'}
      className={cn(
        'bg-bg text-fg-rev flex size-full flex-col overflow-hidden rounded-md',
        className
      )}
      {...props}
    />
  )
}

export function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogHeader className={'sr-only'}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn('overflow-hidden p-0', className)}
        showCloseButton={showCloseButton}
      >
        <Command
          className={cn(
            '[&_[cmdk-group-heading]]:text-fg-rev/50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium',
            '**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-input]]:h-12',
            '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0',
            '[&_[cmdk-group]]:px-2',
            '[&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3',
            '[&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'
          )}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <div
      data-slot={'command-input-wrapper'}
      className={'flex h-9 items-center gap-2 border-b px-3'}
    >
      <span className={'i-tabler-search size-4 shrink-0 opacity-50'} />
      <CommandPrimitive.Input
        data-slot={'command-input'}
        className={cn(
          'placeholder:text-fg-rev/50 flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  )
}

export function CommandList({ className, ...props }: CommandListProps) {
  return (
    <CommandPrimitive.List
      data-slot={'command-list'}
      className={cn('max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto', className)}
      {...props}
    />
  )
}

export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return (
    <CommandPrimitive.Empty
      data-slot={'command-empty'}
      className={cn('py-6 text-center text-sm', className)}
      {...props}
    />
  )
}

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <CommandPrimitive.Group
      data-slot={'command-group'}
      className={cn(
        'text-fg-rev [&_[cmdk-group-heading]]:text-fg-rev/50 p-1 overflow-hidden',
        '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        className
      )}
      {...props}
    />
  )
}

export function CommandSeparator({ className, ...props }: CommandSeparatorProps) {
  return (
    <CommandPrimitive.Separator
      data-slot={'command-separator'}
      className={cn('bg-border -mx-1 h-px', className)}
      {...props}
    />
  )
}

export function CommandItem({ className, tint = 'default', ...props }: CommandItemProps) {
  return (
    <CommandPrimitive.Item
      data-slot={'command-item'}
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        "[&_svg:not([class*='text-'])]:text-fg-rev/50",

        tint === 'default' && 'data-[selected=true]:bg-border/50 data-[selected=true]:text-fg-rev',
        tint === 'accent' && 'data-[selected=true]:bg-ac/10 data-[selected=true]:text-ac',
        tint === 'rose' && 'data-[selected=true]:bg-rose-500/10 data-[selected=true]:text-rose-500',

        className
      )}
      {...props}
    />
  )
}

export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return (
    <span
      data-slot={'command-shortcut'}
      className={cn('ml-auto text-xs tracking-widest text-fg-rev/50', className)}
      {...props}
    />
  )
}
