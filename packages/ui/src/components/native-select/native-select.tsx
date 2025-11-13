'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'

export type NativeSelectProps = React.ComponentProps<'select'>
export type NativeSelectOptionProps = React.ComponentProps<'option'>
export type NativeSelectOptGroupProps = React.ComponentProps<'optgroup'>

export function NativeSelect({ className, ...props }: NativeSelectProps) {
  return (
    <div
      data-slot={'native-select-wrapper'}
      className={'group/native-select relative w-fit has-[select:disabled]:opacity-50'}
    >
      <select
        data-slot={'native-select'}
        className={cn(
          'h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none',
          'selection:bg-border/50',
          'focus-visible-ring placeholder:text-fg-rev/50',
          'disabled:pointer-events-none disabled:cursor-not-allowed',
          'aria-invalid:ring-rose-500/20 dark:aria-invalid:ring-rose-500/40 aria-invalid:border-rose-500',
          className
        )}
        {...props}
      />

      <span
        data-slot={'native-select-icon'}
        aria-hidden={true}
        className={
          'i-tabler-chevron-down size-4 text-fg-rev/50 pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 opacity-50 select-none'
        }
      />
    </div>
  )
}

export function NativeSelectOption({ ...props }: NativeSelectOptionProps) {
  return <option data-slot={'native-select-option'} {...props} />
}

export function NativeSelectOptGroup({ className, ...props }: NativeSelectOptGroupProps) {
  return <optgroup data-slot={'native-select-optgroup'} className={cn('', className)} {...props} />
}
