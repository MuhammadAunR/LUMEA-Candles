'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const WhyLumeaSection = () => {
    return (
        <section className='min-h-screen h-fit bg-primary w-full py-10'>
            <section className='max-lg:px-5 lg:w-10/12 mx-auto flex flex-col gap-10'>
                <div className='relative w-full h-90 lg:h-110'>
                    <Image
                        src={'/why-lumea.webp'}
                        alt='Why Lumea'
                        fill
                        sizes='1000px'
                        loading='eager'
                        className='object-cover w-full h-full' />
                </div>
                <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.90, delay: 0.1 }}
                    viewport={{ once: true }}
                    className='text-xl font-semibold text-accent lg:max-w-md'>
                    We make products with quality materials
                    so you get a very good product
                </motion.h3>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                    <div className='relative w-full h-90 lg:h-140'>
                        <Image
                            src={'/why-lumea.webp'}
                            alt='Why Lumea'
                            fill
                            sizes='1000px'
                            loading='eager'
                            className='object-cover w-full h-full' />
                    </div>
                    <div className='flex flex-col items-start gap-7'>
                        <div className='relative w-full h-90'>
                            <Image
                                src={'/why-lumea.webp'}
                                alt='Why Lumea'
                                fill
                                sizes='1000px'
                                loading='eager'
                                className='object-cover w-full h-full' />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.90, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className='text-2xl font-bold font-heading'>Durable</h2>
                            <h3 className='text-xl font-semibold text-accent lg:max-w-md'>
                                The life of the candle reaches 6 months since it is used and still feels the smell
                            </h3>
                        </motion.div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                    <div className='relative w-full h-90 lg:h-140 order-2'>
                        <Image
                            src={'/why-lumea.webp'}
                            alt='Why Lumea'
                            fill
                            sizes='1000px'
                            loading='eager'
                            className='object-cover w-full h-full' />
                    </div>
                    <div className='flex flex-col items-start gap-7 order-1'>
                        <div className='relative w-full h-90'>
                            <Image
                                src={'/why-lumea.webp'}
                                alt='Why Lumea'
                                fill
                                sizes='1000px'
                                loading='eager'
                                className='object-cover w-full h-full' />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.90, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h2 className='text-2xl font-bold font-heading'>Calm</h2>
                            <h3 className='text-xl font-semibold text-accent lg:max-w-md'>
                                The aroma emitted by the candles soothes the feeling and the room is of course very durable
                            </h3>
                        </motion.div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default WhyLumeaSection