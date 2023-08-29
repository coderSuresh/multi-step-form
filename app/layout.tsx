import './globals.css'
import type { Metadata } from 'next'
import childrenProps from '@/types/childrenProps'

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'Multi Step Form with Next.js, TypeScript, and Tailwind CSS by coderSuresh',
}

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
