'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

// focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
const badgeVariants = cva(
  [
    'overflow-hidden inline-flex items-center justify-center gap-1 rounded-md bg-transparent transition-[color,box-shadow]',
    'px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0',
    '[&>span]:size-3  [&>span]:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        solid: '',
        border: 'border',
        gradient: '',
      },
    },
    defaultVariants: {
      variant: 'solid',
    },
  }
)

export type BadgeProps = React.ComponentPropsWithRef<'span'> &
  VariantProps<typeof badgeVariants> & {
    // @link https://www.radix-ui.com/primitives/docs/utilities/slot
    // Merges its props onto its immediate child. no extra DOM node.
    asChild?: boolean
  }

export function Badge({ className, variant = 'solid', asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp data-slot={'badge'} className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
