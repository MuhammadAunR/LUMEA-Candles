'use client'
import React from 'react'
import { Toaster } from 'sonner';

const SonnerToast = ({ children }) => {
    return (
        <>
            <Toaster
                richColors={true}
                position='top-center'
                duration={'1500'}
            />
            {children}
        </>
    )
}

export default SonnerToast