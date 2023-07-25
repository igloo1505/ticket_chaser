import clsx from 'clsx'
import React from 'react'



interface CardButtonGroupProps {
children: React.ReactNode
    className?: string

}

const CardButtonGroup = ({className, children}: CardButtonGroupProps) => {
return (
    <div className={clsx('w-full py-4 flex flex-row justify-end items-center gap-4 flex-wrap', className && className)}>{children}</div>
)
}


CardButtonGroup.displayName = "CardButtonGroup"


export default CardButtonGroup;
