'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as SheetPrimitive from '@radix-ui/react-dialog'

export type SheetProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Root>
export type SheetTriggerProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Trigger>
export type SheetCloseProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Close>
export type SheetPortalProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Portal>
export type SheetOverlayProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Overlay>
export type SheetContentProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'bottom' | 'left' | 'right'
}
export type SheetHeaderProps = React.ComponentPropsWithRef<'div'>
export type SheetFooterProps = React.ComponentPropsWithRef<'div'>
export type SheetTitleProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Title>
export type SheetDescriptionProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Description>

export function Sheet({ ...props }: SheetProps) {
  return <SheetPrimitive.Root data-slot={'sheet'} {...props} />
}

export function SheetTrigger({ ...props }: SheetTriggerProps) {
  return <SheetPrimitive.Trigger data-slot={'sheet-trigger'} {...props} />
}

export function SheetClose({ ...props }: SheetCloseProps) {
  return <SheetPrimitive.Close data-slot={'sheet-close'} {...props} />
}

export function SheetPortal({ ...props }: SheetPortalProps) {
  return <SheetPrimitive.Portal data-slot={'sheet-portal'} {...props} />
}

export function SheetOverlay({ className, ...props }: SheetOverlayProps) {
  return (
    <SheetPrimitive.Overlay
      data-slot={'sheet-overlay'}
      className={cn(
        'fixed inset-0 z-50 bg-fg-rev/10',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
}

export function SheetContent({ className, children, side = 'right', ...props }: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot={'sheet-content'}
        className={cn(
          'bg-bg fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          side === 'right' &&
            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          side === 'left' &&
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          side === 'top' &&
            'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
          side === 'bottom' &&
            'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className={cn(
            'absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 data-[state=open]:bg-fg-rev/50',
            'focus-visible-ring',
            'disabled:pointer-events-none'
          )}
        >
          <span className={'i-tabler-x size-4'} />
          <span className={'sr-only'}>Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

export function SheetHeader({ className, ...props }: SheetHeaderProps) {
  return (
    <div
      data-slot={'sheet-header'}
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  )
}

export function SheetFooter({ className, ...props }: SheetFooterProps) {
  return (
    <div
      data-slot={'sheet-footer'}
      className={cn('flex flex-col gap-2 p-4 mt-auto', className)}
      {...props}
    />
  )
}

export function SheetTitle({ className, ...props }: SheetTitleProps) {
  return (
    <SheetPrimitive.Title
      data-slot={'sheet-title'}
      className={cn('font-semibold leading-none', className)}
      {...props}
    />
  )
}

export function SheetDescription({ className, ...props }: SheetDescriptionProps) {
  return (
    <SheetPrimitive.Description
      data-slot={'sheet-description'}
      className={cn('text-sm text-fg-rev/50', className)}
      {...props}
    />
  )
}
