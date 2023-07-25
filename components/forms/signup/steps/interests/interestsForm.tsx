import { getInitialInterestList } from '#/actions/uiActions'
import React from 'react'
import InterestCategory from './interestCategory'
import { CATEGORY } from '@prisma/client'
import { InterestType } from '#/data/interests'



interface InterestsFormProps {

}

const InterestsForm = (props: InterestsFormProps) => {
    const interests = getInitialInterestList()
    return (
        <div>
            {Object.keys(interests).map((_k, i) => {
                const k = _k as CATEGORY
                return (
                    <InterestCategory category={k} items={interests[k] as InterestType[]} key={`interest-category-${i}}`} />
                )
            })}
        </div>
    )
}


InterestsForm.displayName = "InterestsForm"


export default InterestsForm;
