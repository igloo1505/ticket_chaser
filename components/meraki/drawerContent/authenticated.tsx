import Image from 'next/image';
import React from 'react'
import DrawerContentItem from './drawerContentItem';
import TicketIcon from '#/components/ui/icons/ticket';
import MessagesIcon from '#/components/ui/icons/messages';
import DashboardIcon from '#/components/ui/icons/dashboard';
import SettingsIcon from '#/components/ui/icons/settings';
import { logout } from '#/actions/authActions';
import LogoutIcon from '#/components/ui/icons/logout';
import DrawerDarkToggle from './DrawerDarkToggle';



interface DrawerContentProps {
    email?: string
}


const DrawerContentAuthenticated = ({ email }: DrawerContentProps) => {
    return (
        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
                <DrawerContentItem
                    Icon={<DashboardIcon />}
                    label="Dashboard"
                    href="/dashboard"
                />

                <DrawerContentItem
                    Icon={<MessagesIcon />}
                    label="Messages"
                    href="/messages"
                />

                <DrawerContentItem
                    Icon={<TicketIcon />}
                    href="/itemsListed"
                    label="My Tickets"
                />

                <DrawerContentItem
                    Icon={<SettingsIcon />}
                    label="Settings"
                    href="/dashboard?state=settings"
                />
            </nav>

            <nav>
                <hr className="my-4 border-gray-200 dark:border-gray-600" />

                <DrawerDarkToggle />

                <DrawerContentItem
                    Icon={<LogoutIcon />}
                    onClick={logout}
                    label="Logout"
                />

                <a href="#" className="flex items-center px-2 -mx-2 mt-6">
                    <Image className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" width={300} height={300} />
                    {email && <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">{email}</span>}
                </a>
            </nav>
        </div>
    )
}


DrawerContentAuthenticated.displayName = "DrawerContent"


export default DrawerContentAuthenticated;
