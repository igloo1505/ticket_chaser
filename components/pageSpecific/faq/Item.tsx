import { Faq } from '@prisma/client'
import React from 'react'



interface FaqItemProps {
    item: Faq
    isLast: boolean
}

const FaqItem = ({ item, isLast }: FaqItemProps) => {
    return (
        <div>
            <button className="flex items-center focus:outline-none">
                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">{item.title}</h1>
            </button>
            <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    {item.body}
                </p>
            </div>
            {!isLast && <hr className="my-8 border-gray-200 dark:border-gray-700" />}
        </div>
    )
}


FaqItem.displayName = "FaqItem"


export default FaqItem;
