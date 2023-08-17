import QuickActions from '#/components/pageSpecific/admin/dashboard/quickActions';
import PageContentWrapper from '#/components/ui/pageContentWrapper';
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper';
import React from 'react'



interface AdminDashboardPageProps {

}

const AdminDashboardPage = (props: AdminDashboardPageProps) => {
    return (
        <PageContentWrapper>
            <div className={"w-full h-full min-h-full flex justify-center items-center"}>
                <QuickActions />
            </div>
        </PageContentWrapper>
    )
}


AdminDashboardPage.displayName = "AdminDashboardPage"


export default AdminDashboardPage;
