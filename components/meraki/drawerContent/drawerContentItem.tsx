import { setDrawerOpen } from '#/state/slices/ui';
import store from '#/state/store';
import { dataThemeDark, dataThemeLight } from '#/utils/ui';
import clsx from 'clsx';
import type { Route } from 'next';
import Link from 'next/link';
import { ParsedUrlQueryInput } from 'querystring';
import React from 'react'
import { UrlObject } from 'url';



export interface DrawerContentItemProps {
    Icon: React.ReactNode
    label: string
    href?: Route
    query?: string | ParsedUrlQueryInput | null | undefined
    onClick?: () => void
}

const DrawerContentItem = ({ label, onClick, query, Icon, href }: DrawerContentItemProps) => {
    let params: { href?: Route | UrlObject, query?: object, onClick?: () => void } = {}
    if (href) {
        params.href = href
    }
    if (query) {
        params.href = {
            pathname: href,
            query: query
        }
    }
    params.onClick = () => {
        store.dispatch(setDrawerOpen(false))
        if (onClick) {
            onClick()
        }
    }
    /* TODO: Handle light and dark theme stuff here and for the rest of the drawer. */
    if (!href && onClick) {
        const p = params as Omit<typeof params, "href">
        return (
            <a role="button" className={clsx("flex items-center w-full px-4 py-2 transition-colors duration-300 transform rounded-md hover:text-gray-700 hover:bg-gray-100 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200")}
                {...p}
            >
                {Icon}
                <span className="mx-4 font-medium">{label}</span>
            </a>
        )
    }
    const p = params as Omit<typeof params, "href"> & { href: Route }
    return (
        <Link className={clsx("flex items-center w-full px-4 py-2 transition-colors duration-300 transform rounded-md hover:text-gray-700 hover:bg-gray-100 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200")}
            {...p}
        >
            {Icon}
            <span className="mx-4 font-medium">{label}</span>
        </Link>
    )
}


DrawerContentItem.displayName = "DrawerContentItem"


export default DrawerContentItem;
