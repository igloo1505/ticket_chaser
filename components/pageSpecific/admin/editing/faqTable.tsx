import { getFaqTableSearchParams } from '#/utils/routing/searchParams'
import { Faq } from '@prisma/client'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import FaqTableItem from './FaqTableItem'


interface FaqTableProps {
    items: Faq[]
    sortedBy: keyof Faq
    sortOrder: "asc" | "desc"
    pageNum: number | string
}



const FaqTableHeadItem = ({ val, sortedBy, pageNum, sortKey, sortOrder }: { val: string, sortedBy: keyof Faq, sortKey: keyof Faq, sortOrder?: "asc" | "desc", pageNum: number | string }) => {
    if (sortKey !== sortedBy) {
        return (
            <th>
                <Link className={"w-full h-full"} href={`/admin/legit/faqTable?${getFaqTableSearchParams(typeof pageNum === "string" ? parseInt(pageNum) : pageNum, sortKey, sortOrder)}`}>
                    {val}
                </Link>
            </th>
        )
    }
    return (
        <th className={"grid grid-cols-[1fr_20px]"}>
            <div>
                {val}
            </div>
            <Link href={`/admin/legit/faqTable?${getFaqTableSearchParams(typeof pageNum === "string" ? parseInt(pageNum) : pageNum, sortKey, sortOrder === "asc" ? "desc" : "asc")}`}>
                <IoIosArrowForward className={clsx("fill-primary color-primary", sortOrder === "desc" ? "-rotate-90" : "rotate-90")} />
            </Link>
        </th>
    )
}


const FaqTable = ({ items, sortedBy, sortOrder, pageNum }: FaqTableProps) => {
    return (
        <table className={"table"}>
            <thead>
                <FaqTableHeadItem sortedBy={sortedBy} pageNum={pageNum} val="id" sortKey={"id"} sortOrder={sortOrder} />
                <FaqTableHeadItem sortedBy={sortedBy} pageNum={pageNum} val="Title" sortKey={"title"} sortOrder={sortOrder} />
                <FaqTableHeadItem sortedBy={sortedBy} pageNum={pageNum} val="Created" sortKey={"createdAt"} sortOrder={sortOrder} />
                <FaqTableHeadItem sortedBy={sortedBy} pageNum={pageNum} val="Updated" sortKey={"updatedAt"} sortOrder={sortOrder} />
            </thead>
            <tbody>
                {items.map((j, i) => <FaqTableItem item={j} key={`faq-item-${i}`} />)}
            </tbody>
        </table>
    )
}


FaqTable.displayName = "FaqTable"


export default FaqTable;
