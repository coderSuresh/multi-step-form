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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout