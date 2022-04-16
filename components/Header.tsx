import Image from 'next/image'
import NetflixLogo from '../public/assets/Netflix_2015_logo.svg'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import profileImg from '../public/assets/profileNetflix.png'
import { useState, useEffect } from 'react'

function Header() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0){
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src='/assets/Netflix_2015_logo.svg'
          width={100}
          height={100}
          alt='logo home'
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6' />
        <Link href='/account' > 
            <img
            src='assets/profileNetflix.png'
            alt="profile"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
