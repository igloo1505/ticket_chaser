import { setDrawerOpen } from '#/state/slices/ui';
import store from '#/state/store';
import type { Route } from 'next';
import Link from 'next/link';
import { ParsedUrlQueryInput } from 'querystring';
import React from 'react'
import { UrlObject } from 'url';



interface DrawerContentItemProps {
    Icon: React.ReactNode
    label: string
    href: Route
    query?: string | ParsedUrlQueryInput | null | undefined
    onClick?: () => void
}

const DrawerContentItem = ({ label, onClick, query, Icon, href }: DrawerContentItemProps) => {
    let params: { href: Route | UrlObject, query?: object, onClick?: () => void } = { href }
    if (query) {
        params.href = {
            pathname: href,
            query: query
        }
    }
    if (onClick) {
        params.onClick = onClick
    }
    return (
        <Link className="flex items-center w-full px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={() => store.dispatch(setDrawerOpen(false))}
            {...params}
        >
            {Icon}
            <span className="mx-4 font-medium">{label}</span>
        </Link>
    )
}


DrawerContentItem.displayName = "DrawerContentItem"


export default DrawerContentItem;
