import { FaqFormData } from '#/state/initial/adminState'
import { Faq } from '@prisma/client'
import clsx from 'clsx'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'


interface FaqCardProps {
    faq: Faq | FaqFormData
    forceOpen?: boolean
    initialOpen?: boolean
}

const FaqCard = ({ faq, forceOpen, initialOpen }: FaqCardProps) => {
    const [open, setOpen] = useState(initialOpen)
    return (
        <div className={"card w-full overflow-y-hidden"}>
            <div className={"card-title bg-primary text-primary-content pl-6 py-4 grid grid-cols-[1fr_40px] z-[99] cursor-pointer"}
                onClick={() => !forceOpen && setOpen(!open)}
            >
                <div>
                    {faq.title}
                </div>
                <div><IoIosArrowForward className={clsx("cursor-pointer transition-all duration-300", open ? "-rotate-90" : "rotate-90")}

                /></div>
            </div>
            <div className={clsx("card-body transition-all duration-300  border border-primary rounded-br-2xl rounded-bl-2xl", !open && "translate-y-[-100%]")}>
                <div className={"font-md"}>{faq.subtitle}</div>
                <div className={"py-4"} dangerouslySetInnerHTML={{ __html: faq.body }} />
            </div>
        </div>
    )
}


FaqCard.displayName = "FaqCard"


export default FaqCard;
