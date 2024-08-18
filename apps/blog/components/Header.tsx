'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import { Logo } from 'assets/icons/logo'

const Header = () => {
  const [origin, setOrigin] = useState('')
  
  useEffect(() => {
    setOrigin(window.location.origin.split('.')[1])
  }, [])

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="flex flex-nowrap gap-4">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.subdomain === false && origin ? `${origin}${link.href}` : link.href}
              className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
