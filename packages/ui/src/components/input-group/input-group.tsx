/** biome-ignore-all lint/a11y/useSemanticElements: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
'use client'

import type React from 'react'

import { Button } from '@lesenelir/ui/button'
import { Input } from '@lesenelir/ui/input'
import { cn } from '@lesenelir/ui/lib/utils'
import { Textarea } from '@lesenelir/ui/textarea'
import { cva, type VariantProps } from 'class-variance-authority'

const inputGroupAddonVariants = cva(
  [
    'text-fg-rev/50 flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none',
    "[&>svg:not([class*='size-'])]:size-4 [&>size:not([class*='size-'])]:size-4",
    'group-data-[disabled=true]/input-group:opacity-50',
  ],
  {
    variants: {
      align: {
        'inline-start': 'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
        'inline-end': 'order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]',
        'block-start':
          'order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5',
        'block-end':
          'order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  }
)

const inputGroupButtonVariants = cva('text-sm shadow-none flex gap-2 items-center', {
  variants: {
    size: {
      xs: "h-6 gap-1 px-2 rounded-sm [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2 [&>span:not([class*='size-'])]:size-3.5 has-[>span]:px-2",
      sm: 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5 has-[>span]:px-2.5',
      'icon-xs': 'size-6 rounded-sm p-0 has-[>svg]:p-0 has-[>span]:p-0',
      'icon-sm': 'size-8 rounded p-0 has-[>svg]:p-0 has-[>span]:p-0',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
})

export type InputGroupProps = React.ComponentPropsWithRef<'div'>
export type InputGroupAddonProps = React.ComponentPropsWithRef<'div'> &
  VariantProps<typeof inputGroupAddonVariants>
export type InputGroupButtonProps = Omit<React.ComponentPropsWithRef<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>
export type InputGroupTextProps = React.ComponentPropsWithRef<'span'>
export type InputGroupInputProps = React.ComponentPropsWithRef<typeof Input>
export type InputGroupTextareaProps = React.ComponentPropsWithRef<typeof Textarea>

export function InputGroup({ className, ref, ...props }: InputGroupProps) {
  return (
    <div
      ref={ref}
      data-slot={'input-group'}
      role={'group'}
      className={cn(
        'group/input-group relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none',
        'h-9 min-w-0 has-[>textarea]:h-auto',

        // Variants based on alignment.
        // When the direct child has a data-align attribute, adjust layout accordingly.
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

        // Focus state.
        // When the data-slot=input-group-control inside is focused, apply focus styles to the group container.
        'has-[[data-slot=input-group-control]:focus-visible]:border-ac has-[[data-slot=input-group-control]:focus-visible]:ring-ac/30 has-[[data-slot=input-group-control]:focus-visible]:ring-2',

        // Error state.
        'has-[[data-slot][aria-invalid=true]]:ring-rose-500/20 has-[[data-slot][aria-invalid=true]]:border-rose-500 dark:has-[[data-slot][aria-invalid=true]]:ring-rose-500/40',
        className
      )}
      {...props}
    />
  )
}

export function InputGroupAddon({
  className,
  align = 'inline-start',
  ref,
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      ref={ref}
      data-slot={'input-group-addon'}
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={e => {
        if ((e.target as HTMLElement).closest('button')) {
          return
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus()
        // e.currentTarget.parentElement?.querySelector<HTMLElement>(
        //   '[data-slot="input-group-control"]'
        // )?.focus()
      }}
      {...props}
    />
  )
}

export function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ref,
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      ref={ref}
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      data-slot={'input-group-button'}
      {...props}
    />
  )
}

export function InputGroupText({ className, ref, ...props }: InputGroupTextProps) {
  return (
    <span
      ref={ref}
      className={cn(
        'text-fg-rev/50 flex items-center gap-2 text-sm',
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        "[&_span]:pointer-events-none [&_span:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

export function InputGroupInput({ className, ref, ...props }: InputGroupInputProps) {
  return (
    <Input
      ref={ref}
      data-slot={'input-group-control'}
      className={cn(
        'min-w-0 flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 focus-within:ring-0',
        className
      )}
      {...props}
    />
  )
}

export function InputGroupTextarea({ className, ref, ...props }: InputGroupTextareaProps) {
  return (
    <Textarea
      ref={ref}
      data-slot={'input-group-control'}
      className={cn(
        'min-w-0 flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0',
        className
      )}
      {...props}
    />
  )
}
