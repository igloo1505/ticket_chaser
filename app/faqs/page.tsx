import FaqList from '#/components/pageSpecific/faq/List'
import FaqTOC from '#/components/pageSpecific/faq/Toc'
import { prisma } from '#/db/db'
import { FOOTERHEIGHT, NAVHEIGHT, dataThemeDark, dataThemeLight } from '#/utils/ui'
import clsx from 'clsx'
import React from 'react'
import { FaqCategory } from "@prisma/client"
import PageContentWrapper from '#/components/ui/pageContentWrapper'


const FaqMainPage = async () => {
    const faqs = await prisma.faq.findMany({})
    return (
        <PageContentWrapper>
            <div className="container px-6 py-12 mx-auto h-full">
                <h1 className={clsx("text-2xl font-semibold text-center lg:text-3xl", dataThemeDark("text-white"), dataThemeLight("text-gray-800"))}>Have any Questions?</h1>
                <FaqTOC />
                <FaqList items={faqs || []} />
            </div>
        </PageContentWrapper>
    )
}


FaqMainPage.displayName = "FaqMainPage"


export default FaqMainPage;
