import React, { Ref, RefObject, useEffect, useRef } from 'react'
import gsap from 'gsap'


interface FormErrorIndicatorProps {
    message: string | null
    openHeight?: string
}

const FormErrorIndicator = (props: FormErrorIndicatorProps) => {
    const container = useRef<HTMLDivElement>(null!)
    const text = useRef<HTMLDivElement>(null!)
    useEffect(() => {
    /* if(props.open && !props.message) return */
      handleErrorIndicator(container, text, Boolean(props.message), props.openHeight || "16px")  
    }, [props.message])

    return (
        <div className={'text-sm text-error text-center flex justify-center items-center'} ref={container}
        >
            <div ref={text} style={{
                opacity: 0,
                /* transform: "scale(0)" */
            }}>
                {props.message}
            </div>
        </div>
    )
}


FormErrorIndicator.displayName = "FormErrorIndicator"


export default FormErrorIndicator;




const handleErrorIndicator = (container: RefObject<HTMLDivElement>, text: RefObject<HTMLDivElement>, open: boolean, openHeight: string) => {
    let tl = gsap.timeline()
    if(!container.current || !text.current) return
    if(open){
        tl.to(container.current, {
            height: openHeight,
            duration: 0.3,
        })
        console.log("Here?")
        tl.to(text.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            /* ease: "bounce-out" */
        })
    }
    if(!open){
        tl.to(text, {
            opacity: 0,
            scale: 0,
            duration: 300,
            ease: "power3.out"
        })
        tl.to(container, {
            height: "0px",
            duration: 300,
            ease: "power3.out"
        })
    }
        
    }
