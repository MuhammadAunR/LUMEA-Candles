'use client'
import React from 'react'
import NavContext from './NavContext'
import CartContext from './CartContext'

const AppWrapper = ({ children }) => {
    return (
        <>
            <CartContext>
                <NavContext>
                    {children}
                </NavContext>
            </CartContext>
        </>
    )
}

export default AppWrapper