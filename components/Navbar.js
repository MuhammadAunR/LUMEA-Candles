'use client'

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import Hamburger from './UI/Hamburger';
import { navOptions } from '@/constants/NavbarConst';
import Image from 'next/image';

const Navbar = () => {

    return (
        <nav className='px-5 lg:px-10 py-5 w-full h-35 bg-secondary grid grid-cols-[55%_45%] items-center fixed top-0 z-100 border-b border-accent'>
            <div className='flex items-center justify-between'>
                <ul className='flex items-center justify-between gap-10 max-lg:hidden'>
                    {navOptions.map(option => {
                        return <li
                            key={option.label}
                            className='text-xl font-heading text-foreground relative group'>
                            <a href={option.href}>
                                {option.label}
                            </a>
                            <span className={`bg-foreground w-0 h-px absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 group-hover:w-full transition-all ease-initial duration-500`}></span>
                        </li>
                    })}
                </ul>
                <span className='lg:hidden'>
                    <Hamburger />
                </span>
                <Link href={'/'} className='relative'>
                    <div className='absolute left-1/2 -top-5 -translate-x-1/2 -translate-y-1/2 h-10 w-10'>
                        <Image src={'/logo.webp'} alt='Logo' fill sizes='100px' className='w-full h-full'/>
                    </div>
                    <h1 className='font-brand font-bold text-foreground tracking-widest text-4xl leading-none'>LUMÉA</h1>
                </Link>
            </div>
            <div className='flex justify-end'>
                <span className='cursor-pointer text-foreground transition-all ease-linear duration-300 hover:-translate-y-1'>
                    <ShoppingBag strokeWidth={1} />
                </span>
            </div>
        </nav>
    )
}

export default Navbar