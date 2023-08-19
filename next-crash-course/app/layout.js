'use client';
import { useState } from 'react';
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'


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
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
