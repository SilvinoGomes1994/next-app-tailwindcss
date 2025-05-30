'use client';
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';

const Header = () => {
  const [headerActive, SetHeaderActive]= useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //detect scroll
      SetHeaderActive(window.scrollY > 50);
    }

    //add scroll event
    window.addEventListener('scroll', handleScroll)

    //clear scroll event
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

console.log(headerActive)


  return (
  
  <header className={`${ headerActive ? 'h-[100px]' : 'h-[124px]'} fixed max-w-[1920px] top-0 w-full bg-neutral-950 h-[100px] transition-all z-50`}>
    <div className='container mx-auto h-full flex items-center justify-between'>
      
      {/* logo */}
       <Link href=''>
       <Image src={'assets/img/logo2.png'}  width={55} height={55} alt='' />
       </Link>
      
      
      {/* Mobile Nav - hidden on large devices */}
      <MobileNav containerStyles=' text-white  xl:hidden'/>


      {/* Desktop Nav - hidden on Small devices*/}
    <Nav containerStyles='flex gap-4 text-white hidden xl:flex'/>
    </div>

  </header>
)
}

export default Header