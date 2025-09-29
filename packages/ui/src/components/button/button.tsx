'use client'

import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean
  /** Optional custom background color */
  backgroundColor?: string
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large'
  /** Button contents */
  label: string
}

const baseClasses =
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-50'

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-3 py-1.5 text-xs',
  medium: 'px-4 py-2 text-sm',
  large: 'px-6 py-3 text-base',
}

const primaryClasses =
  'bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400'
const secondaryClasses =
  'bg-transparent text-blue-600 ring-1 ring-inset ring-blue-300 hover:bg-blue-50 dark:text-blue-300 dark:ring-blue-500 dark:hover:bg-blue-500/10'

const mergeClasses = (classes: Array<string | undefined>) =>
  classes.filter((value): value is string => Boolean(value && value.trim().length)).join(' ')

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  style,
  type = 'button',
  ...props
}: ButtonProps) => {
  const mode = primary ? primaryClasses : secondaryClasses
  const computedStyle = backgroundColor ? { ...style, backgroundColor } : style

  return (
    <button
      type={type}
      className={mergeClasses([baseClasses, sizeClasses[size ?? 'medium'], mode, className])}
      style={computedStyle}
      {...props}
    >
      {label}
    </button>
  )
}
