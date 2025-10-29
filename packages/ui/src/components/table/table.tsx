'use client'

import type React from 'react'

import { cn } from '@lesenelir/ui/lib/utils'

export type TableProps = React.ComponentPropsWithRef<'table'>
export type TableHeaderProps = React.ComponentPropsWithRef<'thead'>
export type TableBodyProps = React.ComponentPropsWithRef<'tbody'>
export type TableFooterProps = React.ComponentPropsWithRef<'tfoot'>
export type TableRowProps = React.ComponentPropsWithRef<'tr'>
export type TableHeadProps = React.ComponentPropsWithRef<'th'>
export type TableCellProps = React.ComponentPropsWithRef<'td'>
export type TableCaptionProps = React.ComponentPropsWithRef<'caption'>

export function Table({ className, ref, ...props }: TableProps) {
  return (
    <div data-slot={'table-container'} className={'relative w-full overflow-x-auto'}>
      <table
        ref={ref}
        data-slot={'table'}
        className={cn(
          // controls the TableCaption alignment
          'w-full caption-bottom text-sm',
          className
        )}
        {...props}
      />
    </div>
  )
}

export function TableHeader({ className, ref, ...props }: TableHeaderProps) {
  return (
    <thead
      ref={ref}
      data-slot={'table-header'}
      className={cn('[&_tr]:border-b', className)}
      {...props}
    />
  )
}

export function TableBody({ className, ref, ...props }: TableBodyProps) {
  return (
    <tbody
      ref={ref}
      data-slot={'table-body'}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

export function TableFooter({ className, ref, ...props }: TableFooterProps) {
  return (
    <tfoot
      ref={ref}
      data-slot={'table-footer'}
      className={cn('bg-fg/50 border-t font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
}

export function TableRow({ className, ref, ...props }: TableRowProps) {
  return (
    <tr
      ref={ref}
      data-slot={'table-row'}
      className={cn(
        'hover:bg-ac/5 data-[state=selected]:bg-ac/5 data-[state=selected]:text-ac border-b transition-colors',
        className
      )}
      {...props}
    />
  )
}

export function TableHead({ className, ref, ...props }: TableHeadProps) {
  return (
    <th
      ref={ref}
      data-slot={'table-head'}
      className={cn(
        'text-fg-rev/60 py-1.5 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
}

export function TableCell({ className, ref, ...props }: TableCellProps) {
  return (
    <td
      ref={ref}
      data-slot={'table-cell'}
      className={cn(
        'px-2 py-1.5 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
}

export function TableCaption({ className, ref, ...props }: TableCaptionProps) {
  return (
    <caption
      ref={ref}
      data-slot={'table-caption'}
      className={cn('text-fg-rev/60 mt-4 text-sm text-center', className)}
      {...props}
    />
  )
}
