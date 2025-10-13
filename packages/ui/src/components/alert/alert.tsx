import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'

export type AlertProps = React.ComponentPropsWithRef<'div'>
export type AlertIconProps = React.ComponentPropsWithRef<'div'>
export type AlertContentProps = React.ComponentPropsWithRef<'div'>
export type AlertTitleProps = React.ComponentPropsWithRef<'div'>
export type AlertDescriptionProps = React.ComponentPropsWithRef<'div'>

export function Alert({ className, ...props }: AlertProps) {
  return (
    <div
      data-slot={'alert'}
      className={cn('relative w-fit rounded-lg border py-4 px-3 text-sm', 'flex', className)}
      {...props}
    />
  )
}

export function AlertIcon({ className, ...props }: AlertIconProps) {
  return <div data-slot={'alert-icon'} className={cn('shrink-0', className)} {...props} />
}

export function AlertContent({ className, ...props }: AlertContentProps) {
  return (
    <div
      data-slot={'alert-content'}
      className={cn('ml-3 flex-1 text-left flex flex-col gap-1', className)}
      {...props}
    />
  )
}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      data-slot={'alert-title'}
      className={cn('font-medium leading-none tracking-tight line-clamp-1', className)}
      {...props}
    />
  )
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <div
      data-slot={'alert-description'}
      className={cn('[&_p]:leading-relaxed mt-1 text-fg-rev/60', className)}
      {...props}
    />
  )
}
