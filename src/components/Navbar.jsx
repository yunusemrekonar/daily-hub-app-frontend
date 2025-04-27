'use client';
import React, {useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (

    <nav className='bg-gray-700 p-4 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href='/' className='text-white text-2xl font-bold'>
                DAILY HUB
            </Link>

            <button className='lg:hidden text-white' onClick={()=>setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            
            <div className='hidden lg:flex space-x-4'>
                <Link href="/" className='text-white hover:text-gray-300'>Home</Link>
                <Link href="/about" className='text-white hover:text-gray-300'>About</Link>
                <Link href="/services" className='text-white hover:text-gray-300'>Services</Link>
                <Link href="/contact" className='text-white hover:text-gray-300'>Contact</Link>
            </div>
        </div>
        {isOpen &&(       
         <div className='lg:hidden bg-blue-600 text-wwhite p-4 spave-y-2'>
                <Link href="/" className='block hover:text-gray-300'>Home</Link>
                <Link href="/about" className='block hover:text-gray-300'>About</Link>
                <Link href="/services" className='block hover:text-gray-300'>Services</Link>
                <Link href="/contact" className='block hover:text-gray-300'>Contact</Link>
            </div>
            )}

    </nav>

  )
}

export default Navbar