"use client"
import clsx from 'clsx'
import { Route } from 'next'
import { useRouter } from 'next/navigation'
import React, { RefObject, useEffect, useRef } from 'react'
import gsap from 'gsap'


interface ToastContainerProps {
    children: React.ReactNode
    redirect?: Route
}

const ToastContainer = ({ children, redirect }: ToastContainerProps) => {
    const ref = useRef<HTMLDivElement>(null!)
    const router = useRouter()
    useEffect(() => {
        enter(ref)
    }, [])

    const handleClick = () => {
        if (redirect) {
            router.push(redirect)
        }
    }

    const params: { style: object, onClick?: () => void } = {
        style: {
            transition: "transform 0.3s ease-in-out",
            transform: "translateX(200%)"
        },
        ...(redirect && { onClick: handleClick })
    }

    return (
        <div className={clsx("flex w-full max-w-sm min-w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800", redirect && "cursor-pointer")}
            ref={ref}
            {...params}
        >
            {children}
        </div>
    )
}


ToastContainer.displayName = "ToastContainer"


export default ToastContainer;

const enter = (ref: RefObject<HTMLDivElement>) => {
    let tl = gsap.timeline()
    tl.fromTo(ref.current, { x: "200%" }, { x: 0, opacity: 1, duration: 0.35 })
}

