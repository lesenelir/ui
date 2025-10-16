import type React from 'react'

import type { Metadata } from 'next'

import { Providers } from '@/components/providers'

import '@lesenelir/ui/styles/main.css'

export const metadata: Metadata = {
  title: 'lesenelir/ui Components',
  description: 'Accessible and customizable components built on top of Radix Primitives.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={'bg-bg'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
