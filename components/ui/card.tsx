import React from 'react'
import { ContainerProps, Elevation, elevationMap } from '#/types/uiTypes'
import clsx from 'clsx'
import { dataThemeDark, dataThemeLight } from '#/utils/ui'

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
    titleClasses?: string
    bodyClasses?: string
}




const Card = ({ container, id, titleClasses, elevate, shadow, title, variants, bodyClasses, children, bordered = true }: CardProps) => {
    const _variants = variants ? variants.join(" ") : ""
    if (!container) {
        container = {}
    }
    return (
        <div {...container} className={clsx("card", _variants, container.className && container.className, bordered && dataThemeDark("border-darkBorder") && bordered && dataThemeLight("border-lightBorder"), shadow && "shadow-lg", elevate && elevationMap[elevate])} id={id ? id : undefined}>
            {title && <div className={clsx('card-title w-full text-center justify-center items-center pt-4', titleClasses && titleClasses)} id={id ? `${id}-title` : undefined}>{title}</div>}
            <div className={clsx('card-body', bodyClasses && bodyClasses)}>
                {children}
            </div>
        </div>
    )
}



Card.displayName = "Card"


export default Card;
