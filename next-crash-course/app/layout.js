import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

//global meta
export const metadata = {
  title: 'Next cheatsheet',
  description: 'notes from next crash course',
  keywords: 'web, next.js, react'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
