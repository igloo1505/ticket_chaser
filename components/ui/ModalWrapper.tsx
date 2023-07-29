import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';


const connector = connect((state: RootState, props: any) => ({
    modals: state.UI.modals,
    props: props
}))


interface StylesInterface {
    container?: React.CSSProperties
    title?: React.CSSProperties
}

interface ModalWrapperProps {
    children: React.ReactNode
    modalKey: keyof RootState['UI']['modals']
    modals: RootState['UI']['modals']
    styles?: StylesInterface
    title?: string
}


const ModalTitle = ({ title, styles }: { title: string, styles?: React.CSSProperties }) => {
    return (
        <div className="w-full text-lg py-4 px-4" style={styles ? styles : {}}>{title}</div>
    )
}

const ModalWrapper = connector(({ children, modalKey, modals, title, styles }: ModalWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null!)
    let rows = []
    title && rows.push("")
    rows.push("1fr")
    useEffect(() => {
        if (modals[modalKey]) {
            enter(ref)
        }

        if (!modals[modalKey]) {
            exit(ref)
        }
    }, [modals])
    return (
        <div className={"max-w-[calc(100vw-4rem)] h-auto top-[50%] left-[50%]"}
            style={styles?.container ? {
                transform: "translate(-50%,-50%)",
                ...styles.container
            } : {
                transform: "translate(-50%,-50%)",
            }
            }
            ref={ref}
        >
            {title && <ModalTitle title={title} styles={styles?.title} />}
            {children}
        </div>
    )
})



export default ModalWrapper;


const enter = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return
    ref.current.style.transition = "all 0.3s ease-in-out"
    ref.current.style.top = "50%"
    ref.current.style.transform = "translate(-50%, -50%)"
}


const exit = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return
    ref.current.style.transition = "all 0.3s ease-in-out"
    ref.current.style.top = "0"
    ref.current.style.transform = "translate(-50%, -200%)"
}
