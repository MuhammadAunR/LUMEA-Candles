'use client'

import { useNavContext } from '@/app/context/NavContext'
import { navOptions } from '@/constants/NavbarConst'
import React from 'react'
import useBlockYScroll from '../hooks/BlockYScroll'

const NavSidebar = () => {
    const { isOpen, toggleNavSidebar } = useNavContext()
    useBlockYScroll(isOpen)
    return (
        <aside className={`w-full bg-secondary flex items-center justify-center mt-25 overflow-hidden
    ${isOpen ? 'h-[calc(100vh-100px)]' : 'h-0'} transition-all ease-linear duration-300`}>
            <ul className='flex flex-col items-center justify-between gap-7'>
                {navOptions.map(option => {
                    return <li
                        onClick={toggleNavSidebar}
                        key={option.label}
                        className='text-3xl uppercase font-bold font-heading text-foreground relative group'>
                        <a href={option.href}>
                            {option.label}
                        </a>
                        <span className={`bg-foreground w-0 h-px absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 group-hover:w-full transition-all ease-initial duration-500`}></span>
                    </li>
                })}
            </ul>
        </aside>
    )
}

export default NavSidebar