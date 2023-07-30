"use client"
import React, { RefObject, useEffect, useRef } from 'react'
import store from '#/state/store';
import { ToastConfigType } from '#/types/uiTypes';
import clsx from 'clsx';
import { BsFillXCircleFill } from 'react-icons/bs'
import { clearToast } from '#/state/slices/ui';
import gsap from 'gsap'
import { useRouter } from 'next/navigation';


interface ToastProps {
    toast: ToastConfigType
}

const Toast = ({ toast }: ToastProps) => {
    const ref = useRef<HTMLDivElement>(null!)
    const router = useRouter()
    useEffect(() => {
        enter(ref)
    }, [])
    const closeToast = () => {
        store.dispatch(clearToast(toast.toastId))
    }
    const handleClick = () => {
        if (toast.clickRedirect) {
            router.push(toast.clickRedirect)
        }
    }
    setTimeout(closeToast, toast.timeout || 5000)
    return (
        <div className={clsx("z-[99999] opacity-0 w-fit py-4 px-4 rounded-md grid grid-cols-[1fr_30px] place-items-center", toast.variant === "error" && "bg-error text-error-content", toast.variant === "warn" && "bg-warning text-warning-content", toast.clickRedirect && "cursor-pointer")}
            onClick={handleClick}
            style={{
                transition: "transform 0.3s ease-in-out",
                transform: "translateX(200%)"
            }}
            ref={ref}
        >
            <div>
                {
                    toast.content
                }
            </div>
            <div className="w-full h-full flex justify-center items-center cursor-pointer" onClick={closeToast}><BsFillXCircleFill /></div>
        </div>
    )
}


Toast.displayName = "Toast"


export default Toast;

const enter = (ref: RefObject<HTMLDivElement>) => {
    let tl = gsap.timeline()
    tl.fromTo(ref.current, { x: "200%" }, { x: 0, opacity: 1, duration: 0.35 })
}

