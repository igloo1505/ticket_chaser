import EditFaqWrapper from '#/components/pageSpecific/admin/editing/EditFaqWrapper';
import ReduxProvider from '#/components/utility/reduxProvider';
import React from 'react'



interface DashboardFaqPageProps {

}


const DashboardFaqPage = (props: DashboardFaqPageProps) => {
    return (
        <ReduxProvider><EditFaqWrapper /></ReduxProvider>
    )
}


DashboardFaqPage.displayName = "DashboardFaqPage"


export default DashboardFaqPage;
