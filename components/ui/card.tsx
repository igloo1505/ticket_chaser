import React from 'react'
import { ContainerProps } from '#/types/uiTypes'
import clsx from 'clsx'

type variants = "image-full" | "card-normal" | "card-compact" | "card-side"


interface CardProps {
    children: React.ReactNode
    container?: ContainerProps<HTMLDivElement>
    title?: string
    bordered?: boolean
    variants?: variants[]
}




const Card = ({container, title, variants, children, bordered=true}: CardProps) => {
    const _variants = variants ? variants.join(" ") : ""
    if(!container){
        container = {}
    }
    return (
        <div {...container} className={clsx("card", _variants, container.className && container.className, bordered && "card-bordered")}>
            {title && <div className={'card-title'}>{title}</div>}
            <div className={'card-body'}>
            {children}
            </div>
        </div>
    )
}



Card.displayName = "Card"


export default Card;
