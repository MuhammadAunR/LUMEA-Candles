'use client'

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Hamburger from './UI/Hamburger';
import { navOptions } from '@/constants/NavbarConst';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const { toggleCart, cartItemsInLS, handleTotalCost } = useCart()

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <nav className={`px-5 lg:px-10 py-5 w-full h-35 grid max-sm:grid-cols-[30%_30%_40%] grid-cols-[40%_25%_35%] md:grid-cols-[45%_25%_30%] items-center fixed top-0 z-100 border-b border-accent transition-all ease-linear duration-500 ${isScrolled ? 'bg-secondary/30 backdrop-blur-xl' : 'bg-secondary'}`}>
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
            </div>
            <Link href={'/'} className='relative w-fit'>
                <h1 className='font-brand font-bold text-foreground tracking-widest text-4xl leading-none'>LUMÉA</h1>
                <div className='absolute left-1/2 -top-5 -translate-x-1/2 -translate-y-1/2 h-10 w-10'>
                    <Image src={'/logo.webp'} alt='Logo' fill sizes='100px' className='w-full h-full' />
                </div>
            </Link>
            <div className='flex justify-end'>
                <span
                    onClick={toggleCart}
                    className='cursor-pointer text-foreground transition-all ease-linear duration-300 hover:-translate-y-1 relative flex items-center gap-1'>
                    <ShoppingBag strokeWidth={1} />
                    {cartItemsInLS.length > 0 &&
                        <span className='absolute -top-2 -left-3 font-heading bg-primary border rounded-full w-5 h-5 text-xs flex items-center justify-center'>
                            {cartItemsInLS.length > 9 ? '9+' : cartItemsInLS.length}
                        </span>
                    }
                    {handleTotalCost > 0 &&
                        <span className='text-sm'>
                            {handleTotalCost.toLocaleString()}
                        </span>
                    }
                </span>
            </div>
        </nav>
    )
}

export default Navbar