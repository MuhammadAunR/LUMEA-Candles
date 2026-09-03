'use client'

import { createContext, useContext, useEffect, useState } from "react"

const ContextProvider = createContext()
export const useCart = () => useContext(ContextProvider)

import React from 'react'
import { toast } from "sonner"

const CartContext = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItemsInLS, setCartItemsInLS] = useState([])
    let isInitial = false

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    useEffect(() => {
        const stored = localStorage.getItem("cartItems")
        if (stored) {
            setCartItemsInLS(stored)
        }
        isInitial = true
    }, [])

    useEffect(() => {
        if (isInitial) return
        localStorage.setItem("cartItems", JSON.stringify(cartItemsInLS))
    }, [cartItemsInLS])

    const handleAddToCart = (product) => {
        const existing = cartItemsInLS.find(item => item.id === product.id)
        if (existing) {
            const updated = cartItemsInLS.map(item =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            )
            setCartItemsInLS(updated)
        } else {
            setCartItemsInLS([...cartItemsInLS, { ...product, qty: 1 }])
        }
        toast.success('Toasts')
    }

    const handleRemoveFromCart = (id) => {
        const updated = cartItemsInLS.filter(item => item.id !== id)
        setCartItemsInLS(updated)
    }

    return (
        <ContextProvider.Provider
            value={{ isCartOpen, toggleCart, handleAddToCart, cartItemsInLS, handleRemoveFromCart }}
        >
            {children}
        </ContextProvider.Provider>
    )
}

export default CartContext