"use client"
import React, { Ref, RefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'


interface FormErrorIndicatorProps {
    message: string | null
    openHeight?: number
    onChange?: () => void
}

const FormErrorIndicator = (props: FormErrorIndicatorProps) => {
    const container = useRef<HTMLDivElement>(null!)
    const text = useRef<HTMLDivElement>(null!)
    const [isFirstRender, setIsFirstRender] = useState(true)
    useEffect(() => {
        if (!props.message) {
            handleErrorIndicator(container, text, false, props.openHeight || 42, props.onChange)
            setIsFirstRender(true)
            return
        }
        if (isFirstRender) {
            handleErrorIndicator(container, text, Boolean(props.message), props.openHeight || 42, props.onChange)
        }
        setIsFirstRender(false)
    }, [props.message])

    return (
        <div className={'text-sm h-0 pt-2 text-error text-center flex justify-center items-center'}
            ref={container}
            style={{
                height: "0px"
            }}
        >
            <div ref={text} style={{
                opacity: 1,
                /* transform: "scale(0)" */
            }}>
                {props.message}
            </div>
        </div>
    )
}


FormErrorIndicator.displayName = "FormErrorIndicator"


export default FormErrorIndicator;




const handleErrorIndicator = (container: RefObject<HTMLDivElement>, text: RefObject<HTMLDivElement>, open: boolean, openHeight: number, onChange?: () => void) => {
    let tl = gsap.timeline({ onComplete: onChange || undefined })
    if (!container.current || !text.current) return
    if (open) {
        tl.fromTo(container.current, {
            height: 0,
            duration: 0.3
        }, {
            height: openHeight,
            duration: 0.3,
        })
        tl.to(text.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            /* ease: "bounce-out" */
        })
    }
    if (!open) {
        tl.to(text.current, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            ease: "power3.out"
        })
        tl.to(container.current, {
            height: 0,
            duration: 0.3,
            ease: "power3.out"
        })
        /* tl.fromTo(container.current, { */
        /*     height: openHeight, */
        /*     duration: 0.3 */
        /* }, { */
        /*     height: 0, */
        /*     duration: 0.3, */
        /*     ease: "power3.out" */
        /* }) */
    }

}
