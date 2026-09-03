'use client'
import { useCart } from '@/app/context/CartContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const ProductCard = ({ product }) => {

    const { handleAddToCart } = useCart()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.90, delay: product.id * 0.1 }}
            viewport={{ once: true }}
            key={product.id}
            className='flex flex-col gap-3 w-70 h-110 group'>
            <div className='relative w-70 h-80 overflow-hidden'>
                <Image
                    src={product.image}
                    alt={product.name}
                    sizes='1000px'
                    fill
                    loading='eager'
                    className='object-cover w-full h-full group-hover:scale-105 transition-all ease-linear duration-500' />
                {product.badge && <span
                    className={`absolute top-3 right-3 flex items-center justify-center h-9 w-9 rounded-full
                                bg-accent/40 border backdrop-blur-sm text-foreground
                                ${product.badge === 'NEW' ? 'text-xs' : 'text-sm'}`}>
                    {product.badge}
                </span>
                }
            </div>
            <div className='p-2 flex flex-col gap-5'>
                <div className='w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <h3 className='font-heading font-bold text-xl tracking-wider'>{product.name}</h3>
                        <div className='flex items-end justify-center gap-1'>
                            <span className='text-xs'></span>
                            <span className='font-semibold'>{product.price}</span>
                        </div>
                    </div>
                    <span className='text-sm font-semibold text-accent'>{product.description}</span>
                </div>
                <span>
                    <motion.button
                        onClick={() => handleAddToCart(product)}
                        whileTap={{ scale: 0.97 }}
                        className='uppercase border border-accent rounded-full w-full py-3 px-12 text-lg font-semibold tracking-wider cursor-pointer bg-primary hover:bg-secondary transition-all ease-linear duration-300'>
                        Add to Cart
                    </motion.button>
                </span>
            </div>
        </motion.div>
    )
}

export default ProductCard