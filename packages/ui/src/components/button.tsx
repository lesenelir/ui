'use client'

import type { ReactNode } from 'react'

import { cn } from '@lesenelir/ui/lib/utils'

interface ButtonProps {
  children: ReactNode
  className?: string
  appName: string
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      type={'button'}
      className={cn('bg-red-100', className)}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  )
}
