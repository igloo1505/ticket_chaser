import React, { useRef } from 'react'
import store from '#/state/store'
import gsap from 'gsap'
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { setDrawerOpen } from '#/state/slices/ui';

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
    modalKey: keyof RootState['modals']
    modals: RootState['modals']
    styles?: StylesInterface
    title?: string
}


const ModalTitle = ({title}: {title: string}) => {
        return (
<div className="w-full text-lg py-4 px-4" style={styles.title ? styles.title : {}}>{title}</div>
        )
    }

const ModalWrapper = connector(({ children, modals, open, title, styles }: ModalWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null!)
    let rows = []
    title && rows.push("")
    rows.push("1fr")
    confirmCallback && rows.push("auto")
    useEffect(() => {
            if(modals[modalKey]){
                    open(ref)
                }

            if(!modals[modalKey]){
                    close(ref)
                }
        }, [modals])
    return (
    <div className={"max-w-[calc(100vw-4rem)] h-auto top-[50%] left-[50%]"} 
    style={style={styles.title ?  {
        transform:"translate(-50%,-50%)",
        styles.title
    } : {
        transform:"translate(-50%,-50%)",
    } }
    ref={ref}
    >
    {title && <ModalTitle title={title}/>}
        {children}               
   </div>
    )
})



export default ModalWrapper;


const enter = (ref: React.RefObject<HTMLDivElement>) => {
    if(!ref.current) return
    ref.current.style.transtion = "all 0.3s ease-in-out"
    ref.current.style.top = "50%"
    ref.current.style.transform = "translate(-50%, -50%)"
}


const exit = (ref: React.RefObject<HTMLDivElement>) => {
    if(!ref.current) return
    ref.current.style.transtion = "all 0.3s ease-in-out"
    ref.current.style.top = "0"
    ref.current.style.transform = "translate(-50%, -200%)"
}
