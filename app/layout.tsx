import './globals.css'
import type { Metadata } from 'next'
import {ChildrenProps} from '@/types/props'

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'Multi Step Form with Next.js, TypeScript, and Tailwind CSS by coderSuresh',
}

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout