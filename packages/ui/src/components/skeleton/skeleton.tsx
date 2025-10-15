'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'

export type SkeletonProps = React.ComponentPropsWithRef<'div'>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot={'skeleton'}
      className={cn(
        'bg-fg-rev/5 relative h-4 w-full animate-pulse rounded-md leading-[inherit]',
        className
      )}
      {...props}
    />
  )
}
