import React from 'react'
import Link from 'next/link'
import Courses from './components/Courses'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the next cheatsheet</h1>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul>
      <Courses />
    </div>
  )
}

export default HomePage