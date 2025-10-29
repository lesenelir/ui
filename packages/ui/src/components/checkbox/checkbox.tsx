'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export type CheckboxProps = React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>

export function Checkbox({ className, ref, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot={'checkbox'}
      className={cn(
        'peer size-4 shrink-0 border border-fg-rev/30 shadow-xs transition-shadow outline-none rounded-[4px]',
        'data-[state=checked]:bg-ac data-[state=checked]:text-bg data-[state=checked]:border-ac',
        'focus-visible-ring focus-visible:ring-[3px]',
        'aria-invalid:ring-rose-500/20 dark:aria-invalid:ring-rose-500/40 aria-invalid:border-rose-500',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot={'checkbox-indicator'}
        className={'grid place-content-center text-current transition-none'}
      >
        <span className={'i-tabler-check size-3.5'} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
