import React from 'react'
import { ContainerProps, Elevation, elevationMap } from '#/types/uiTypes'
import clsx from 'clsx'

type variants = "image-full" | "card-normal" | "card-compact" | "card-side"



interface CardProps {
    children: React.ReactNode
    container?: ContainerProps<HTMLDivElement>
    title?: string
    bordered?: boolean
    variants?: variants[]
    shadow?: boolean
    elevate?: Elevation
    id?: string
}




const Card = ({container, id, elevate, shadow, title, variants, children, bordered=true}: CardProps) => {
    const _variants = variants ? variants.join(" ") : ""
    if(!container){
        container = {}
    }
    return (
        <div {...container} className={clsx("card", _variants, container.className && container.className, bordered && "data-dark:border-darkBorder data-light:border-lightBorder", shadow && "shadow-lg", elevate && elevationMap[elevate])} id={id ? id : undefined}>
            {title && <div className={'card-title w-full text-center justify-center items-center pt-4'} id={id ? `${id}-title` : undefined}>{title}</div>}
            <div className={'card-body'}>
            {children}
            </div>
        </div>
    )
}



Card.displayName = "Card"


export default Card;
