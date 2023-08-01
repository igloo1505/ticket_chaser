import AdminLoginPageWrapper from '#/components/pageSpecific/admin/login/pageWrapper';
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper';
import React from 'react'



interface AdminUnauthenticatedPageProps {

}

const AdminUnauthenticatedPage = (props: AdminUnauthenticatedPageProps) => {
    return (
        <AdminLoginPageWrapper />
    )
}


AdminUnauthenticatedPage.displayName = "AdminUnauthenticatedPage"


export default AdminUnauthenticatedPage;
