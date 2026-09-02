'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { PrimaryButton } from './UI/Buttons'

const FragranceRoom = () => {
    return (
        <section className='bg-secondary py-10 px-5 h-fit flex flex-col gap-15 items-center justify-center'>
            <div className='relative w-full flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.90 }}
                    viewport={{ once: true }}
                    className='relative max-sm:w-90 max-sm:h-80 w-100 h-90 md:w-130 md:h-120'>
                    <Image
                        src={'/fragrance-room.png'}
                        alt='Fragrance Room'
                        fill
                        sizes='500px'
                        loading='eager'
                        className='object-cover w-full h-full' />
                </motion.div>
                <h2 className='text-5xl text-center sm:text-6xl md:text-8xl absolute max-sm:top-7 top-15 font-heading font-bold leading-none text-secondary  [-webkit-text-stroke:1px_#1c1917] md:[-webkit-text-stroke:2px_#1c1917]'>
                    Fragrance Room
                </h2>
            </div>

            <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.90 }}
                viewport={{ once: true }}>
                <PrimaryButton text='Find Product' />
            </motion.span>

        </section>
    )
}

export default FragranceRoom