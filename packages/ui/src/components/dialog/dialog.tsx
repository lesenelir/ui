'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export type DialogProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Root>
export type DialogTriggerProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Trigger>
export type DialogPortalProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Portal>
export type DialogCloseProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Close>
export type DialogOverlayProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Overlay>
export type DialogContentProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}
export type DialogHeaderProps = React.ComponentPropsWithRef<'div'>
export type DialogFooterProps = React.ComponentPropsWithRef<'div'>
export type DialogTitleProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Title>
export type DialogDescriptionProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Description>

export function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root data-slot={'dialog'} {...props} />
}

export function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot={'dialog-trigger'} {...props} />
}

export function DialogPortal({ ...props }: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot={'dialog-portal'} {...props} />
}

export function DialogClose({ ...props }: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot={'dialog-close'} {...props} />
}

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot={'dialog-overlay'}
      className={cn(
        'fixed inset-0 z-50 bg-fg-rev/10 dark:bg-fg/50',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
}

export function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot={'dialog-content'}
        className={cn(
          'bg-bg fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%]',
          'grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border shadow-md duration-200 sm:max-w-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            aria-label={'Close'}
            className={cn(
              'focus-visible-ring',
              'cursor-pointer absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 data-[state=open]:bg-fg-rev/50',
              "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              "[&_span]:pointer-events-none [&_span]:shrink-0 [&_span:not([class*='size-'])]:size-4",
              'disabled:pointer-events-none'
            )}
          >
            <span className={'i-tabler-x size-4'} />
            <span className={'sr-only'}>Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      data-slot={'dialog-header'}
      className={cn('flex flex-col gap-1.5 p-4 text-center sm:text-left', className)}
      {...props}
    />
  )
}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <div
      data-slot={'dialog-footer'}
      className={cn('flex flex-col-reverse gap-1.5 sm:flex-row sm:justify-end p-4', className)}
      {...props}
    />
  )
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      data-slot={'dialog-title'}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

export function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      data-slot={'dialog-description'}
      className={cn('text-sm text-fg-rev/50', className)}
      {...props}
    />
  )
}
