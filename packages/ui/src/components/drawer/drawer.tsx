'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { Drawer as DrawerPrimitive } from 'vaul'

export type DrawerProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Root>
export type DrawerTriggerProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Trigger>
export type DrawerPortalProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Portal>
export type DrawerCloseProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Close>
export type DrawerOverlayProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Overlay>
export type DrawerContentProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Content>
export type DrawerHeaderProps = React.ComponentPropsWithRef<'div'>
export type DrawerFooterProps = React.ComponentPropsWithRef<'div'>
export type DrawerTitleProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Title>
export type DrawerDescriptionProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Description>

export function Drawer({ ...props }: DrawerProps) {
  return <DrawerPrimitive.Root data-slot={'drawer'} {...props} />
}

export function DrawerTrigger({ ...props }: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger data-slot={'drawer-trigger'} {...props} />
}

export function DrawerPortal({ ...props }: DrawerPortalProps) {
  return <DrawerPrimitive.Portal data-slot={'drawer-portal'} {...props} />
}

export function DrawerClose({ ...props }: DrawerCloseProps) {
  return <DrawerPrimitive.Close data-slot={'drawer-close'} {...props} />
}

export function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      data-slot={'drawer-overlay'}
      className={cn(
        'fixed inset-0 z-50 bg-fg-rev/10 dark:bg-fg/50',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
}

export function DrawerContent({ className, children, ...props }: DrawerContentProps) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot={'drawer-content'}
        className={cn(
          'group/drawer-content bg-bg fixed z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className
        )}
        {...props}
      >
        <div
          className={
            'bg-bg-rev mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block'
          }
        />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      data-slot={'drawer-header'}
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className
      )}
      {...props}
    />
  )
}

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return (
    <div
      data-slot={'drawer-footer'}
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return (
    <DrawerPrimitive.Title
      data-slot={'drawer-title'}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

export function DrawerDescription({ className, ...props }: DrawerDescriptionProps) {
  return (
    <DrawerPrimitive.Description
      data-slot={'drawer-description'}
      className={cn('text-sm text-fg-rev/50', className)}
      {...props}
    />
  )
}
