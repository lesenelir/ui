import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const textareaVariants = cva([
  'border min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow]',
  'outline-none focus-visible-ring',
  'placeholder:text-fg-rev/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  'aria-invalid:ring-rose-500/20 dark:aria-invalid:ring-rose-500/40 aria-invalid:border-rose-500',
  'md:text-sm',
])

export type TextareaProps = React.ComponentProps<'textarea'> & VariantProps<typeof textareaVariants>

export function Textarea({ className, ref, ...props }: TextareaProps) {
  return (
    <textarea
      ref={ref}
      data-slot={'textarea'}
      className={cn(textareaVariants(), className)}
      {...props}
    />
  )
}
