import Link from 'next/link'
import React from 'react'

interface PaginateItem { n: number, href: string }

interface PaginatorProps {
    max: number
    active: number
    href: (n: number) => string
}

const PaginateButton = ({ item }: { item: PaginateItem }) => {
    return <div className={""}>
        <Link href={item.href}>
            {item.n}
        </Link>
    </div>
}

const Paginator = (props: PaginatorProps) => {
    console.log("props: ", props)
    let nums: PaginateItem[] = []
    for (var i = 0; i < props.max; i++) {
        nums.push({ n: i + 1, href: props.href(i + 1) })

    }
    return (
        <div className={"btn-group btn-group-horizontal"}>
            {nums.map((n) => <PaginateButton item={n} key={`paginate-${n.n}`} />)}
        </div>
    )
}


Paginator.displayName = "Paginator"


export default Paginator;
