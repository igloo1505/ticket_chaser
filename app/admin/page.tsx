import AdminLoginPageWrapper from '#/components/pageSpecific/admin/login/pageWrapper';
import React from 'react'



interface AdminUnauthenticatedPageProps {

}

const AdminUnauthenticatedPage = (props: AdminUnauthenticatedPageProps) => {
    return (
        <div>
            <AdminLoginPageWrapper />
        </div>
    )
}


AdminUnauthenticatedPage.displayName = "AdminUnauthenticatedPage"


export default AdminUnauthenticatedPage;
