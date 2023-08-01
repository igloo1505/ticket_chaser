import EditFaqWrapper from '#/components/pageSpecific/admin/editing/EditFaqWrapper';
import ReduxProvider from '#/components/utility/reduxProvider';
import { prisma } from '#/db/db';
import React from 'react'



interface DashboardFaqPageProps {
    searchParams: {
        id?: string
    }
}


const DashboardFaqPage = async (props: DashboardFaqPageProps) => {
    let faq;
    if (props.searchParams.id) {
        faq = await prisma.faq.findFirst({
            where: {
                id: parseInt(props.searchParams.id)
            }
        })
    }
    return (
        <ReduxProvider><EditFaqWrapper item={faq ? faq : undefined} /></ReduxProvider>
    )
}


DashboardFaqPage.displayName = "DashboardFaqPage"


export default DashboardFaqPage;
