'use client'

import { useCart } from '@/app/context/CartContext'
import useBlockYScroll from '@/hooks/BlockYScroll'
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PrimaryButton } from './UI/Buttons'

const Cart = () => {

    const { isCartOpen, toggleCart, cartItemsInLS, handleRemoveFromCart, handleIncreaseQty, handleDecreaseQty, handleTotalCost } = useCart()
    // console.log(typeof cartItemsInLS)
    useBlockYScroll(isCartOpen)

    return (
        <section>
            <div onClick={toggleCart} className={`w-full fixed top-0 left-0 bg-secondary/40 backdrop-blur-lg h-screen ${isCartOpen ? 'opacity-100 z-101' : 'opacity-0 -z-50'} transition-opacity ease-linear duration-700`}></div>

            <aside className={`w-100 h-screen bg-secondary fixed top-0 right-0 transition-all ease-in-out duration-700
            flex flex-col justify-between ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} z-101 border-l border-accent`}>

                <div className='flex items-center justify-between p-5 border-b border-accent'>
                    <h3 className='text-xl font-bold font-heading uppercase'>Your Cart</h3>
                    <span onClick={toggleCart} className='bg-primary rounded-full p-1'>
                        <X className='hover:text-accent transition-colors ease-linear duration-300 cursor-pointer' />
                    </span>
                </div>


                <section className='h-120 overscroll-y-auto'>
                    {cartItemsInLS.length === 0 ?
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <span className='text-accent/50'>
                                <ShoppingCart size={90} />
                            </span>
                            <span className='font-semibold text-accent text-xl'>
                                Ooops....Your cart is empty.
                            </span>
                            <span onClick={toggleCart}>
                                <PrimaryButton text='Go To Shop' />
                            </span>
                        </div> :
                        cartItemsInLS.map(item => {
                            return <div key={item.id} className='flex items-start justify-between py-2 px-3 border border-accent rounded-md m-1 hover:-translate-y-0.5 transition-all ease-linear duration-300 group'>
                                <div className='flex items-start gap-3'>
                                    <div className='relative w-15 h-15 rounded-full overflow-hidden'>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes='100px'
                                            className='object-cover w-full h-full' />
                                    </div>
                                    <div className='flex flex-col items-start gap-1'>
                                        <h3 className='text-lg font-heading'>{item.name}</h3>
                                        <div className='flex items-center justify-center'>
                                            <span
                                                onClick={() => handleDecreaseQty(item.id)}
                                                className='border border-accent w-6 h-6 flex items-center justify-center rounded-l-sm cursor-pointer'>
                                                <Minus size={12} />
                                            </span>
                                            <span className='border border-accent w-10 h-6 text-sm flex items-center justify-center'>
                                                {item.qty}
                                            </span>
                                            <span
                                                onClick={() => handleIncreaseQty(item.id)}
                                                className='border border-accent w-6 h-6 flex items-center justify-center rounded-r-sm cursor-pointer'>
                                                <Plus size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-3'>
                                    <span>
                                        {(item.qty * item.price).toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'PKR'
                                        })}
                                    </span>
                                    <span
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className='group-hover:scale-100 text-red-600 scale-0 transition-all ease-linear duration-300 cursor-pointer'>
                                        <Trash2 size={16} />
                                    </span>
                                </div>
                            </div>
                        })
                    }
                </section>

                {
                    cartItemsInLS.length > 0 &&
                    <div className='border-t border-accent p-5 flex flex-col items-end gap-7'>
                        <div className='flex items-center justify-between w-full'>
                            <span className='text-2xl font-heading'>Total</span>
                            <span className='text-xl font-heading text-red-500'>
                                {handleTotalCost.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'PKR'
                                })}
                            </span>
                        </div>
                        <span>
                            <PrimaryButton text='Checkout' />
                        </span>
                    </div>
                }
            </aside >
        </section >
    )
}

export default Cart