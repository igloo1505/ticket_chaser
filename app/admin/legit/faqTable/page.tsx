import FaqTable from '#/components/pageSpecific/admin/editing/faqTable';
import LoadingWrapper from '#/components/ui/loadingWrapper';
import Paginator from '#/components/ui/paginator';
import { prisma } from '#/db/db';
import { readFaqTablSearchParams } from '#/utils/routing/searchParams';
import { Faq } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import { URL } from 'url';

const perPage = 20


interface FaqTablePageProps {
    searchParams: {
        pageNum?: string
        sortBy?: string
        sortOrder?: string
    }
}


const FaqTablePage = async ({ searchParams }: FaqTablePageProps) => {
    const count = await prisma.faq.count()
    let pageNum = searchParams.pageNum ? parseInt(searchParams.pageNum) : 1
    const maxPage = Math.ceil(count / perPage)
    const sortedBy: keyof Faq = searchParams.sortBy as keyof Faq || "createdAt"
    const sortOrder: "asc" | "desc" = searchParams.sortOrder === "asc" ? "asc" : "desc"
    if (pageNum > maxPage) {
        pageNum = maxPage
    }
    const items = await prisma.faq.findMany({
        orderBy: {
            [sortedBy]: sortOrder
        },
        take: perPage,
        skip: (pageNum - 1) * perPage
    })
    return (
        <div className={"w-full flex flex-col justify-center items-center px-6"}>
            <FaqTable items={items} sortedBy={sortedBy} pageNum={pageNum} sortOrder={sortOrder} />
            {maxPage > 1 && <Paginator max={maxPage} active={searchParams.pageNum ? parseInt(searchParams.pageNum) : 1} href={(n: number) => {
                const sparams = new URLSearchParams({
                    pageNum: `${n}`,
                    sortBy: searchParams.sortBy || "createdAt",
                    sortOrder: searchParams.sortOrder || "desc"
                })
                return `/admin/legit/faqTable?${sparams.toString()}`
            }} />}
        </div>
    )
}


FaqTablePage.displayName = "FaqTablePage"


export default FaqTablePage;
