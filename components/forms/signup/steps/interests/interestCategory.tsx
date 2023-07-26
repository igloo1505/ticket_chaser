import { InterestType } from '#/data/interests'
import { CATEGORY } from '@prisma/client'
import React from 'react'
import InterestItem from './interestItem'



interface InterestCategoryProps {
    items: InterestType[]
    category: CATEGORY
}

const InterestCategory = (props: InterestCategoryProps) => {
    return (
        <div>
            <div>{props.category}</div>
            <div>{
                props.items.map((c, i) => <InterestItem item={c} key={`interestItem-${props.category}-${i}`} />)
            }</div>
        </div>
    )
}


InterestCategory.displayName = "InterestCategory"


export default InterestCategory;
