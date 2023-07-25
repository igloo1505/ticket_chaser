import React from 'react'
import AdminLoginCard from './loginCard';



interface AdminLoginPageWrapperProps {

}

const AdminLoginPageWrapper = (props: AdminLoginPageWrapperProps) => {
    return (
        <div className={'w-full h-full min-h-screen flex flex-col justify-center items-center'}>
            <AdminLoginCard />

        </div>
    )
}


AdminLoginPageWrapper.displayName = "AdminLoginPageWrapper"


export default AdminLoginPageWrapper;
