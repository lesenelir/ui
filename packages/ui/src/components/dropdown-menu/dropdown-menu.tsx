'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

export type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuPrimitive.Root>
export type DropdownMenuPortalProps = React.ComponentProps<typeof DropdownMenuPrimitive.Portal>
export type DropdownMenuTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>
export type DropdownMenuContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>
export type DropdownMenuGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.Group>
export type DropdownMenuItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  tint?: 'default' | 'accent' | 'rose'
}
export type DropdownMenuCheckboxItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
> & {
  tint?: 'default' | 'accent' | 'rose'
}
export type DropdownMenuRadioGroupProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioGroup
>
export type DropdownMenuRadioItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
> & {
  tint?: 'default' | 'accent' | 'rose'
}
export type DropdownMenuLabelProps = React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}
export type DropdownMenuSeparatorProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Separator
>
export type DropdownMenuShortcutProps = React.ComponentProps<'span'>
export type DropdownMenuSubProps = React.ComponentProps<typeof DropdownMenuPrimitive.Sub>
export type DropdownMenuSubTriggerProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubTrigger
> & {
  inset?: boolean
  tint?: 'default' | 'accent' | 'rose'
}
export type DropdownMenuSubContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubContent
>

export function DropdownMenu({ ...props }: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root data-slot={'dropdown-menu'} {...props} />
}

export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
  return <DropdownMenuPrimitive.Portal data-slot={'dropdown-menu-portal'} {...props} />
}

export function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps) {
  return <DropdownMenuPrimitive.Trigger data-slot={'dropdown-menu-trigger'} {...props} />
}

export function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot={'dropdown-menu-content'}
        sideOffset={sideOffset}
        className={cn(
          'bg-bg text-fg-rev rounded-md border p-1 shadow-md z-50',
          'origin-(--radix-dropdown-menu-content-transform-origin)',
          'max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
  return <DropdownMenuPrimitive.Group data-slot={'dropdown-menu-group'} {...props} />
}

export function DropdownMenuItem({
  className,
  inset = false,
  tint = 'default',
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot={'dropdown-menu-item'}
      data-inset={inset}
      data-tint={tint}
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none ',
        'focus:bg-ac/10 focus:text-ac',
        'data-[inset=true]:pl-8',
        "[&_svg:not([class*='text-'])]:text-fg-rev",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',

        tint === 'default' &&
          'data-[tint=default]:*:[svg]:!text-fg-rev data-[tint=default]:text-fg-rev data-[tint=default]:focus:bg-border/50 data-[tint=default]:focus:text-fg-rev',
        tint === 'accent' &&
          'data-[tint=accent]:*:[svg]:!text-ac data-[tint=accent]:text-ac data-[tint=accent]:focus:bg-ac/10 data-[tint=accent]:focus:text-ac',
        tint === 'rose' &&
          'data-[tint=rose]:*:[svg]:!text-rose-500 data-[tint=rose]:text-rose-500 data-[tint=rose]:focus:bg-rose-500/10 data-[tint=rose]:focus:text-rose-500',

        className
      )}
      {...props}
    />
  )
}

export function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  tint = 'default',
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot={'dropdown-menu-checkbox-item'}
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',

        tint === 'default' && 'focus:bg-border/50 focus:text-fg-rev',
        tint === 'accent' && 'focus:bg-ac/10 focus:text-ac',
        tint === 'rose' && 'focus:bg-rose-500/10 focus:text-rose-500',

        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className={'pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <span className={'i-tabler-check size-4'} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

export function DropdownMenuRadioGroup({ ...props }: DropdownMenuRadioGroupProps) {
  return <DropdownMenuPrimitive.RadioGroup data-slot={'dropdown-menu-radio-group'} {...props} />
}

export function DropdownMenuRadioItem({
  className,
  children,
  tint = 'default',
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot={'dropdown-menu-radio-item'}
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',

        tint === 'default' && 'focus:bg-border/50 focus:text-fg-rev',
        tint === 'accent' && 'focus:bg-ac/10 focus:text-ac',
        tint === 'rose' && 'focus:bg-rose-500/10 focus:text-rose-500',

        className
      )}
      {...props}
    >
      <span
        className={'pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <span className={'i-tabler-circle-filled text-fg-rev size-2'} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

export function DropdownMenuLabel({ className, inset = false, ...props }: DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot={'dropdown-menu-label'}
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium text-fg-rev',
        'data-[inset=true]:pl-8',
        className
      )}
      {...props}
    />
  )
}

export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot={'dropdown-menu-separator'}
      className={cn('my-1 -mx-1 h-px bg-border', className)}
      {...props}
    />
  )
}

export function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps) {
  return (
    <span
      data-slot={'dropdown-menu-shortcut'}
      className={cn('ml-auto text-xs tracking-widest text-fg-rev/60', className)}
      {...props}
    />
  )
}

export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub data-slot={'dropdown-menu-sub'} {...props} />
}

export function DropdownMenuSubTrigger({
  className,
  inset = false,
  tint = 'default',
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot={'dropdown-menu-sub-trigger'}
      data-inset={inset}
      className={cn(
        'flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
        'data-[inset=true]:pl-8',
        "[&_svg:not([class*='text-'])]:text-fg-rev",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",

        tint === 'default' &&
          'focus:bg-border/50 focus:text-fg-rev data-[state=open]:bg-border/50 data-[state=open]:text-fg-rev',
        tint === 'accent' &&
          'focus:bg-ac/10 focus:text-ac data-[state=open]:bg-ac/10 data-[state=open]:text-ac',
        tint === 'rose' &&
          'focus:bg-rose-500/10 focus:text-rose-500 data-[state=open]:bg-rose-500/10 data-[state=open]:text-rose-500',

        className
      )}
      {...props}
    >
      {children}
      <span className={'ml-auto i-tabler-chevron-right size-4'} />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

export function DropdownMenuSubContent({ className, ...props }: DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot={'dropdown-menu-sub-content'}
      className={cn(
        'bg-bg text-fg-rev z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
}
