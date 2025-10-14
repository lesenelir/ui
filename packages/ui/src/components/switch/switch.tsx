'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cva, type VariantProps } from 'class-variance-authority'

const switchVariants = cva([
  'peer inline-flex shrink-0 items-center h-[1.15rem] w-8 rounded-full border border-transparent shadow-xs transition-all outline-none cursor-pointer',
  'data-[state=checked]:bg-ac data-[state=unchecked]:bg-fg-rev/20 dark:data-[state=unchecked]:bg-ac/20 duration-200',
  'disabled:cursor-not-allowed disabled:opacity-50',
])

export type SwitchProps = React.ComponentPropsWithRef<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>

export function Switch({ className, ref, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      data-slot={'switch'}
      className={cn(switchVariants(), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot={'switch-thumb'}
        className={cn(
          'bg-bg block size-4 rounded-full pointer-events-none ring-0 transition-transform',
          'transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitive.Root>
  )
}
