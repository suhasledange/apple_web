'use client'
import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import Image from 'next/image'
import { navLists } from '../constants'

const Navbar = () => {
  return (
   <header className=' w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
    <nav className=' flex w-full screen-max-width'>
        <Image src={appleImg} alt='apple' width={14} height={18}/>

        <div className='flex flex-1 justify-center max-sm:hidden'>
            {
            navLists.map((nav)=>(
                <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' key={nav}>
                    {nav}
                </div>
            ))
            
            }
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <Image src={searchImg} width={18} height={18} alt='search'/>
            <Image src={bagImg} width={18} height={18} alt='search'/>

        </div>

    </nav>
   </header>
  )
}

export default Navbar
