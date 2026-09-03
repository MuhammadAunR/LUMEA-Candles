'use client'

import { socialMedia } from '@/constants/FooterConst'
import { navOptions } from '@/constants/NavbarConst'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
    const [whatsappJoiner, setWhatsappJoiner] = useState("")
    const message = `Hi! ${whatsappJoiner} want to get updates on your products.`

    return (
        <>
            <footer className='bg-foreground h-fit px-5 lg:px-10'>
                <section className='flex gap-20 py-10 lg:py-20 items-start justify-between max-lg:flex-col'>

                    <section className='flex gap-20 justify-between max-md:flex-col max-md:items-start'>
                        <Link href={'/'} className='relative flex flex-col items-center'>
                            <div className='relative h-10 w-10'>
                                <Image src={'/logo.webp'} alt='Logo' fill sizes='100px' className='object-contain' />
                            </div>
                            <h1 className='font-brand font-bold text-secondary tracking-widest text-4xl lg:text-5xl leading-none'>LUMÉA</h1>
                        </Link>

                        <div className='flex gap-20'>
                            <div>
                                <ul className='flex flex-col items-start justify-between gap-5'>
                                    {navOptions.map(option => {
                                        return <li
                                            key={option.label}
                                            className='uppercase font-bold tracking-widest leading-none text-primary relative group'>
                                            <a href={option.href}>
                                                {option.label}
                                            </a>
                                            <span className={`bg-primary w-0 h-px absolute left-1/2 -bottom-1 -translate-x-1/2 -translate-y-1/2 group-hover:w-full transition-all ease-initial duration-500`}></span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <ul className='flex flex-col items-start justify-between gap-5'>
                                    {socialMedia.map(option => {
                                        return <li
                                            key={option.label}
                                            className='uppercase font-bold tracking-widest leading-none text-primary relative group'>
                                            <a href={option.href}>
                                                {option.label}
                                            </a>
                                            <span className={`bg-primary w-0 h-px absolute left-1/2 -bottom-1 -translate-x-1/2 -translate-y-1/2 group-hover:w-full transition-all ease-initial duration-500`}></span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </section>


                    <div className='flex flex-col gap-4 max-w-sm'>
                        <h3 className='uppercase font-bold tracking-widest text-primary text-sm'>
                            Stay in the Glow
                        </h3>
                        <p className='text-primary/60 text-sm'>
                            Get early access to new scents and seasonal collections
                        </p>
                        <form className='flex items-center border-b border-primary/40 pb-2'>
                            <input
                                type="phone"
                                value={whatsappJoiner}
                                onChange={(e) => setWhatsappJoiner(e.target.value)}
                                placeholder="0321 1234567"
                                className='bg-transparent text-primary placeholder:text-primary/40 outline-none flex-1 text-sm'
                            />
                            <Link
                                href={whatsappJoiner ? `https://wa.me/+923286536520?text=${encodeURIComponent(message)}` : ''}
                                target='_blank'
                                className='text-primary uppercase text-xs hover:text-secondary hover:tracking-widest transition-all ease-linear duration-300'>
                                Whatsapp us
                            </Link>
                        </form>
                    </div>
                </section>

                <section className='border-t border-primary text-primary font-semibold py-5 flex items-center justify-between max-md:flex-col'>
                    <h3 className='lg:text-xl'>&copy; {new Date().getFullYear()} All rights reserved</h3>
                    <Link href={'https://muhammad-aun.vercel.app/'} target='_blank' className='hover:text-secondary hover:tracking-wider transition-all ease-linear duration-300'>Developed By Muhammad Aun</Link>
                </section>
            </footer>
        </>
    )
}

export default Footer