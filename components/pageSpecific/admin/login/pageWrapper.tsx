import React from 'react'
import AdminLoginCard from './loginCard';



interface AdminLoginPageWrapperProps {

}

const AdminLoginPageWrapper = (props: AdminLoginPageWrapperProps) => {
    return (
        <div className={'w-full h-full underNavCenter flex flex-col justify-center items-center'}>
            <AdminLoginCard />
        </div>
    )
}


AdminLoginPageWrapper.displayName = "AdminLoginPageWrapper"


export default AdminLoginPageWrapper;
