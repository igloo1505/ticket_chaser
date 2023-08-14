import { setDrawerOpen } from '#/state/slices/ui';
import store from '#/state/store';
import { dataThemeDark, dataThemeLight } from '#/utils/ui';
import clsx from 'clsx';
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
    /* TODO: Handle light and dark theme stuff here and for the rest of the drawer. */
    return (
        <Link className={clsx("flex items-center w-full px-4 py-2 transition-colors duration-300 transform rounded-md ", dataThemeDark(["text-gray-400", "hover:bg-gray-800", "hover:text-gray-200"]), dataThemeLight(["hover:text-gray-700", "hover:bg-gray-100", "text-gray-600"]))}
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
