import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

function AnimateOnScroll({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={clsx(
                'transition-all duration-2000 ease-out opacity-0',
                visible && 'opacity-100'
            )}
        >
            {children}
        </div>
    )
}

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimateOnScroll>
            <h1 className="flex items-center justify-center text-9xl md:text-8xl font-bold text-white bg-brown-400 text-center h-96 mb-36">
                {children}
            </h1>
        </AnimateOnScroll>
    )
}

export default Header
