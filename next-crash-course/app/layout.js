import { Poppins } from 'next/font/google'
import './globals.css'
import { Inter } from 'next/font/google'

const popins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

//global meta
export const metadata = {
  title: 'Next cheatsheet',
  description: 'notes from next crash course',
  keywords: 'web, next.js, react'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
