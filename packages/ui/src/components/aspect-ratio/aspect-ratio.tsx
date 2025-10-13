'use client'

import type React from 'react'

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

export type AspectRatioProps = React.ComponentPropsWithRef<typeof AspectRatioPrimitive.Root>

export function AspectRatio({ ref, ...props }: AspectRatioProps) {
  return <AspectRatioPrimitive.Root ref={ref} data-slot={'aspect-ratio'} {...props} />
}
