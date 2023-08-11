import { EventCardProps } from '#/types/uiTypes'
import { isSoon } from '#/utils/dates/dayjs'
import { genEventSearchParams } from '#/utils/routing/searchParams'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'



interface Props {
    item: Required<EventCardProps>
    container?: string
}

const EventCard = ({ item, container }: Props) => {
    return (
        <div className={clsx("w-full h-full shadow-md bg-elevate-300 hover:bg-elevate-200 hover:shadow-sm grid rounded-md transition-all duration-300 grid-rows-[3fr_2fr]", container && container)}>
            <figure className={"h-full relative object-cover rounded-tl-md rounded-tr-md"}><Image src={item.image} width={1080} height={1080} alt="Shoes" className={"max-w-full h-full object-cover rounded-tl-md rounded-tr-md"} /></figure>
            <div className="card-body h-full">
                <h2 className="card-title">
                    {item.title}
                    {isSoon(item.date) && <div className="badge badge-secondary">SOON</div>}
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                    {item.tags.slice(0, 3).map((t, i) => <Link href={`/events?${genEventSearchParams({ tags: [t] })}`} className="badge badge-primary badge-outline" key={`tag-${i}`}>{t}</Link>)}
                </div>
            </div>
        </div>
    )
}


EventCard.displayName = "EventCard"


export default EventCard;
