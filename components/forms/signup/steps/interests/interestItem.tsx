import { InterestType } from '#/data/interests'
import React from 'react'



interface InterestItemProps {
    item: InterestType
}

const InterestItem = ({item}: InterestItemProps) => {
return (
    <div>{item.label}</div>
)
}


InterestItem.displayName = "InterestItem"


export default InterestItem;
