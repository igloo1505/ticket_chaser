import { Faq, FaqCategory } from '@prisma/client'
import React, { UIEventHandler } from 'react'
import FaqItem from './Item'



interface FaqListProps {
    items: Faq[]
}

const FaqList = ({ items }: FaqListProps) => {
    let byCategory: { [k in FaqCategory]?: Faq[] } = {}
    items.forEach((a) => {
        if (!byCategory[a.category]) {
            byCategory[a.category] = []
        }
        byCategory[a.category]?.push(a)
    })

    const handleScroll: UIEventHandler = (e) => {
        console.log("e: ", e)
    }
    return (
        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                {Object.keys(byCategory).map((k) => {
                    let _k = k as keyof typeof byCategory
                    return (
                        <div id={_k} key={_k} onScroll={handleScroll}>
                            {byCategory[_k]?.map((j, i, a) => <FaqItem item={j} isLast={i === a.length} key={`faq-item-${i}`} />)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


FaqList.displayName = "FaqList"


export default FaqList;
