import AdminLoginForm from '#/components/forms/adminLogin';
import Card from '#/components/ui/card';
import React from 'react'



interface AdminLoginCardProps {

}

const AdminLoginCard = (props: AdminLoginCardProps) => {
    return (
        <Card title="Admin Login" container={{
            className: "min-w-[min(400px,85vw)] max-w-[calc(100vw-2rem)]"
        }}>
            <AdminLoginForm />
        </Card>
    )
}


AdminLoginCard.displayName = "AdminLoginCard"


export default AdminLoginCard;
