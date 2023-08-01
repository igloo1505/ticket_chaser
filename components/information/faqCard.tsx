import { FaqFormData } from '#/state/initial/adminState'
import { setRichTextChildClasses } from '#/utils/ui'
import { Faq } from '@prisma/client'
import clsx from 'clsx'
import { gsap } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import RichTextDisplay from '../ui/RichTextDisplay'


interface FaqCardProps {
    faq: Faq | FaqFormData
    forceOpen?: boolean
    initialOpen?: boolean
}

const FaqCard = ({ faq, forceOpen, initialOpen }: FaqCardProps) => {
    const [open, setOpen] = useState(initialOpen)
    const body = useRef<HTMLDivElement>(null!)
    const id = faq.title.replace(" ", "")
    useEffect(() => {
        setRichTextChildClasses(body)
        console.log("!faq.subtitle: ", !faq.subtitle)
        console.log("faq.subtitle === '': ", faq.subtitle === '')
    }, [faq])
    return (
        <div className={clsx("collapse collapse-plus w-full overflow-y-hidden", open && "collapse-open")}
        >
            <div className={"collapse-title bg-primary text-primary-content grid grid-cols-[1fr_40px] z-[99] cursor-pointer"}
                onClick={() => !forceOpen && setOpen(!open)}
            >
                <div>
                    {faq.title}
                </div>
            </div>
            <div className={clsx("collapse-content transition-all duration-300  border border-primary border-opacity-50 rounded-br-2xl rounded-bl-2xl")}
            >
                {faq.subtitle && faq.subtitle !== "" && <div className={"font-md font-bold pt-4"}>{faq.subtitle}</div>}
                <RichTextDisplay __html={faq.body} className={!faq.subtitle || faq.subtitle === "" ? "py-4" : "pb-4 pt-2"} />
            </div>
        </div>
    )
}


FaqCard.displayName = "FaqCard"


export default FaqCard;
