'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'

export type CardProps = React.ComponentPropsWithRef<'div'>
export type CardHeaderProps = React.ComponentPropsWithRef<'div'>
export type CardTitleProps = React.ComponentPropsWithRef<'div'>
export type CardDescriptionProps = React.ComponentPropsWithRef<'div'>
export type CardActionProps = React.ComponentPropsWithRef<'div'>
export type CardContentProps = React.ComponentPropsWithRef<'div'>
export type CardFooterProps = React.ComponentPropsWithRef<'div'>

export function Card({ className, ref, ...props }: CardProps) {
  return (
    <div
      ref={ref}
      data-slot={'card'}
      className={cn(
        'bg-bg text-fg-rev flex flex-col gap-6 rounded-lg border py-6 shadow-sm text-left',
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ref, ...props }: CardHeaderProps) {
  return (
    <div
      ref={ref}
      data-slot={'card-header'}
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ref, ...props }: CardTitleProps) {
  return (
    <div
      ref={ref}
      data-slot={'card-title'}
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

export function CardDescription({ className, ref, ...props }: CardDescriptionProps) {
  return (
    <div
      ref={ref}
      data-slot={'card-description'}
      className={cn('text-sm text-fg-rev/60', className)}
      {...props}
    />
  )
}

export function CardAction({ className, ref, ...props }: CardActionProps) {
  return (
    <div
      ref={ref}
      data-slot={'card-action'}
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

export function CardContent({ className, ref, ...props }: CardContentProps) {
  return <div ref={ref} data-slot={'card-content'} className={cn('px-6', className)} {...props} />
}

export function CardFooter({ className, ref, ...props }: CardFooterProps) {
  return (
    <div
      ref={ref}
      data-slot={'card-footer'}
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}
