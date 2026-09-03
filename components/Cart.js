'use client'

import { useCart } from '@/app/context/CartContext'
import useBlockYScroll from '@/hooks/BlockYScroll'
import { Minus, Plus, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Cart = () => {

    const { isCartOpen, toggleCart, cartItemsInLS, handleRemoveFromCart } = useCart()
    console.log(cartItemsInLS)
    useBlockYScroll(isCartOpen)

    return (
        <section>
            <div onClick={toggleCart} className={`w-[calc(100vw-400px)] absolute top-0 left-0 bg-secondary/40 backdrop-blur-lg h-screen ${isCartOpen ? 'opacity-100 z-101' : 'opacity-0 -z-50'} transition-opacity ease-linear duration-700`}></div>
            <aside className={`w-100 h-screen bg-secondary fixed top-0 right-0 transition-all ease-in-out duration-700
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} z-101 border-l border-accent`}>

                <div className='flex items-center justify-between p-5'>
                    <h3 className='text-xl font-bold font-heading uppercase'>Your Cart</h3>
                    <span onClick={toggleCart} className='bg-primary rounded-full p-1'>
                        <X className='hover:text-accent transition-colors ease-linear duration-300 cursor-pointer' />
                    </span>
                </div>
                <div className='w-full bg-accent h-px'></div>
                <section className='h-120 overscroll-y-auto my-5'>
                    {cartItemsInLS.length === 0 ?
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <span className='text-accent/50'>
                                <ShoppingCart size={90} />
                            </span>
                            <span className='font-semibold text-accent text-xl'>
                                Ooops....Your cart is empty.
                            </span>
                        </div> :
                        cartItemsInLS.map(item => {
                            return <div key={item.id} className='flex items-center justify-between p-5 border border-accent rounded-full m-1 hover:-translate-y-1 transition-all ease-linear duration-300'>
                                <div className='flex items-start gap-3'>
                                    <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes='100px'
                                            className='object-cover w-full h-full' />
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <h3>{item.name}</h3>
                                        <div>
                                            <span><Plus /></span>
                                            <span>{item.qty}</span>
                                            <span><Minus /></span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        })
                    }
                </section>

                <div className='border-t border-accent'>
                    <div>

                    </div>
                </div>
            </aside>
        </section>
    )
}

export default Cart