'use client'
import Image from 'next/image'
import React from 'react'
import { PrimaryButton } from './UI/Buttons'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 flex-col-reverse lg:gap-10'>

            <div className='relative h-130 lg:h-[calc(100vh-100px)] max-lg:order-2'>
                <Image
                    src={'/hero.webp'}
                    alt='Hero'
                    fill
                    sizes='1000px'
                    loading='eager'
                    className='object-cover object-center w-full h-full' />
            </div>

            <div className='flex flex-col items-start justify-center gap-7 max-lg:px-5 max-lg:py-20 max-lg:order-1'>
                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.90, delay: 0.1 }}
                    viewport={{ once: true }}
                    className='font-body uppercase tracking-widest font-bold text-accent'>Scandle Experience</motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.90, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='font-heading font-bold text-5xl md:text-6xl leading-[1.05]'>
                    Calm, captured in wax. <br className='max-sm:hidden'/>
                    A <span className='text-accent'>candle</span> for every mood.
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.90, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <PrimaryButton />
                </motion.span>
            </div>

        </section>
    )
}

export default HeroSection