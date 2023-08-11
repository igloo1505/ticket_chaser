import Link from 'next/link'
import React from 'react'
import { BsFillXCircleFill } from 'react-icons/bs'


interface TagProps {
    label: string
    href?: string
    onRemove?: (label: string) => void
}

const Tag = (props: TagProps) => {
    if (props.href) {
        return (<Link href={props.href} className={"badge badge-primary badge-outline grid grid-cols-[1.5rem_auto] gap-1 h-8 badge-lg"}>
            {props.onRemove && <div className={"w-full h-full grid place-items-center cursor-pointer"} onClick={() => props.onRemove && props.onRemove(props.label)}><BsFillXCircleFill /></div>}
            <div>
                {props.label}
            </div>
        </Link>)
    }
    return (
        <div className={"badge badge-primary badge-outline grid grid-cols-[1.5rem_auto] gap-1 h-8 badge-lg my-6"}>
            {props.onRemove && <div className={"w-full h-full grid place-items-center cursor-pointer"} onClick={() => props.onRemove && props.onRemove(props.label)}><BsFillXCircleFill /></div>}
            <div>
                {props.label}
            </div>
        </div>
    )
}


Tag.displayName = "Tag"


export default Tag;
