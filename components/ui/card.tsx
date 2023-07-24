import React from 'react'
import { ContainerProps } from '#/types/uiTypes'
import clsx from 'clsx'


interface CardProps {
    children: React.ReactNode
    container?: ContainerProps<HTMLDivElement>
    title?: string
}

const CardTitle = ({title}: {title: string}) => {
    return (
    <div className={'font-bold text-2xl px-4 py-4 tracking-wide'}>{title}</div>
    )
}

const Card = ({container, title, children}: CardProps) => {
    if(!container){
        container = {}
    }
    return (
        <div {...container} className={clsx("rounded-lg bg-card border border-border flex flex-col justify-center items-center", container.className && container.className)}>
            {title && <CardTitle title={title}/>}
            <div className={'px-8 w-full'}>
            {children}
            </div>
        </div>
    )
}


Card.displayName = "Card"


export default Card;
