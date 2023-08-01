import QuickActions from '#/components/pageSpecific/admin/dashboard/quickActions';
import React from 'react'



interface AdminDashboardPageProps {

}

const AdminDashboardPage = (props: AdminDashboardPageProps) => {
    return (
        <div className={"w-full h-full min-h-[inherit] flex flex-col justify-center items-center py-8"}>
            <QuickActions />
        </div>
    )
}


AdminDashboardPage.displayName = "AdminDashboardPage"


export default AdminDashboardPage;
