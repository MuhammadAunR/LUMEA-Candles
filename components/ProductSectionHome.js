'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import ProductCard from './UI/ProductCard';

const ProductSectionHome = () => {

    const products = [
        {
            id: 1,
            name: "Vanilla Relax",
            description: "Cake Smell",
            price: 20,
            oldPrice: 24,
            badge: "-5%",
            image: "/hero.webp"
        },
        {
            id: 2,
            name: "Beach Sunshine",
            description: "Enjoy the afternoon",
            price: 40,
            oldPrice: null,
            badge: null,
            image: "/hero.webp"
        },
        {
            id: 3,
            name: "Brown Relac",
            description: "Together in the afternoon",
            price: 33,
            oldPrice: 37,
            badge: "-10%",
            image: "/hero.webp"
        },
        {
            id: 4,
            name: "Moon Morning",
            description: "The scent of the morning",
            price: 34,
            oldPrice: null,
            badge: "NEW",
            image: "/hero.webp"
        }
    ];

    return (
        <>
            <section className='min-h-screen h-fit bg-secondary py-15'>
                <header className='flex flex-col items-center justify-center gap-3 max-lg:px-5'>
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.90, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='font-bold uppercase tracking-[0.3em] text-sm text-accent'>
                        Best Sellers
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.90, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='uppercase font-heading font-bold text-5xl tracking-wide text-foreground'>
                        Trending Now
                    </motion.h2>
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.90, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-lg text-foreground/50 max-w-md text-center'>
                        Our most-loved scents, chosen by those who know their calm
                    </motion.span>
                </header>

                {/* Product Section  */}
                <div className='flex items-center justify-between flex-wrap w-10/12 mx-auto py-15'>
                    {products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })}
                </div>

                <div className='relative h-100 w-10/12 mx-auto overflow-hidden'>
                    <Image
                        src={'/produc-section.webp'}
                        alt='Hero'
                        fill
                        sizes='1000px'
                        loading='eager'
                        className='object-cover object-center w-full h-full' />

                    <div className='absolute inset-0 flex flex-col items-center justify-center text-center gap-3 bg-foreground/70 px-6 hover:backdrop-blur-md transition-all duration-300'>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.1 }}
                            viewport={{ once: true }}
                            className='font-body uppercase tracking-[0.3em] text-sm text-secondary'>
                            The Lumèa Ritual
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='font-heading font-bold text-4xl lg:text-6xl text-primary uppercase'>
                            Lumèa
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.3 }}
                            viewport={{ once: true }}
                            className='text-secondary/80 lg:max-w-md text-lg'>
                            Hand-poured, slow-burning, made for the quiet moments in between
                        </motion.p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default ProductSectionHome