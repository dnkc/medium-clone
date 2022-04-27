import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            src="https://links.papareact.com/yvf"
            className="w-44 cursor-pointer object-contain"
            alt="test"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
        <h3>About</h3>
        <h3>Contact</h3>
        <h3 className="text-white bg-green-600 rounded-full px-4 py-1">Follow</h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
          <h3 className="border py-1 rounded-full px-4 border-green-600">Sign In</h3>
          <h3>Get Started</h3>
      </div>
    </header>
  )
}

export default Header
