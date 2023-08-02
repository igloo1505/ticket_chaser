import { isSoon } from '#/actions/uiActions'
import { EventCardProps } from '#/types/uiTypes'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import React from 'react'



interface Props {
    item: Required<EventCardProps>
    container?: string
}

const EventCard = ({ item, container }: Props) => {
    console.log("item.date: ", item.date, new Date(item.date).valueOf())

    return (
        <div className={clsx("card w-96 h-full bg-base-100 shadow-xl", container && container)}>
            <figure><Image src={item.image} width={1080} height={1080} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.title}
                    {isSoon(item.date) && <div className="badge badge-secondary">SOON</div>}
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                    {item.tags.slice(0, 3).map((t, i) => <div className="badge badge-primary badge-outline" key={`tag-${i}`}>{t}</div>)}

                </div>
            </div>
        </div>
    )
}


EventCard.displayName = "EventCard"


export default EventCard;
