import QuickActions from '#/components/pageSpecific/admin/dashboard/quickActions';
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper';
import React from 'react'



interface AdminDashboardPageProps {

}

const AdminDashboardPage = (props: AdminDashboardPageProps) => {
    return (
        <UnderNavbarWrapper center>
            <QuickActions />
        </UnderNavbarWrapper>
    )
}


AdminDashboardPage.displayName = "AdminDashboardPage"


export default AdminDashboardPage;
