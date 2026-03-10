import React from "react"
import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Ricardo Castaneda | Senior SDET Portfolio',
  description: 'Senior SDET with 10+ years in test automation & software development. Cypress, Playwright, Selenium, TypeScript, CI/CD, and Azure DevOps expertise.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
