import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

// Container styles - handles border, focus ring, background, shadow
const containerVariants = cva([
  'inline-flex items-center h-9 w-fit rounded-md border bg-transparent shadow-xs transition-[color,box-shadow]',
  'focus-within:outline-none focus-within:border-ac focus-within:ring-2 focus-within:ring-ac/30',
  'has-[:disabled]:pointer-events-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50',
  'has-[:invalid]:ring-rose-500/20 dark:has-[:invalid]:ring-rose-500/40 has-[:invalid]:border-rose-500',
])

// Input styles - handles text, placeholder, file input
const inputVariants = cva([
  'flex-1 px-2 py-1 min-w-0 appearance-none outline-hidden bg-transparent md:text-sm',
  'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-fg-rev file:mr-2',
  'placeholder:text-fg-rev/50',
  'disabled:pointer-events-none disabled:cursor-not-allowed',
])

export type InputProps = React.ComponentProps<'input'> &
  VariantProps<typeof containerVariants> & {
    leftSection?: React.ReactNode
    leftSectionClassName?: string
    rightSection?: React.ReactNode
    rightSectionClassName?: string
  }

export function Input({
  className,
  type,
  leftSectionClassName,
  leftSection,
  rightSectionClassName,
  rightSection,
  ...props
}: InputProps) {
  return (
    <div data-slot={'input-container'} className={cn(containerVariants(), className)}>
      {leftSection && (
        <div className={cn('flex items-center justify-center pl-2', leftSectionClassName)}>
          {leftSection}
        </div>
      )}

      <input data-slot={'input'} type={type} className={inputVariants()} {...props} />

      {rightSection && (
        <div className={cn('flex items-center justify-center pr-2', rightSectionClassName)}>
          {rightSection}
        </div>
      )}
    </div>
  )
}
