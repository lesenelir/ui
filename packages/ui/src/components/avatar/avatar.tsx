import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>
export type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>
export type AvatarFallbackProps = React.ComponentProps<typeof AvatarPrimitive.Fallback>

export function Avatar({ className, ref, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      data-slot={'avatar'}
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
}

export function AvatarImage({ className, ref, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      data-slot={'avatar-image'}
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

export function AvatarFallback({ className, ref, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      data-slot={'avatar-fallback'}
      className={cn('bg-fg flex size-full items-center justify-center rounded-full', className)}
      {...props}
    />
  )
}
