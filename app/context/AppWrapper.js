'use client'
import React from 'react'
import NavContext from './NavContext'

const AppWrapper = ({ children }) => {
    return (
        <>
            <NavContext>
                {children}
            </NavContext>
        </>
    )
}

export default AppWrapper