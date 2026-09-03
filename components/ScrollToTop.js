'use client'

import { ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setShowButton(window.scrollY > 1200)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function GoToTop() {
        window.lenis.scrollTo(0, { duration: 1.5, })
    }

    if (!showButton) return
    return (
        <div onClick={GoToTop} className='fixed right-5 z-50 top-1/2 bg-accent/50 backdrop-blur-sm p-2'>
            <ArrowUp />
        </div>
    )
}

export default ScrollToTop