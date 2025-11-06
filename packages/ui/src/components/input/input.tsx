'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { cva } from 'class-variance-authority'

// Input styles - handles text, placeholder, file input
const inputVariants = cva([
  // selection:bg-ac/20 selection:text-fg-rev
  'h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm appearance-none',
  'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-fg-rev file:mr-2',
  'focus-visible-ring',
  'placeholder:text-fg-rev/50',
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  'aria-invalid:ring-rose-500/20 dark:aria-invalid:ring-rose-500/40 aria-invalid:border-rose-500',
])

export type InputProps = React.ComponentProps<'input'>

export function Input({ className, type, ref, ...props }: InputProps) {
  return (
    <input
      ref={ref}
      data-slot={'input'}
      type={type}
      className={cn(inputVariants(), className)}
      {...props}
    />
  )
}
