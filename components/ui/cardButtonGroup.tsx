import React from 'react'



interface CardButtonGroupProps {
children: React.ReactNode
}

const CardButtonGroup = (props: CardButtonGroupProps) => {
return (
    <div className={'w-full py-4 flex flex-row justify-end items-center'}>{props.children}</div>
)
}


CardButtonGroup.displayName = "CardButtonGroup"


export default CardButtonGroup;
