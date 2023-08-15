"use client"
import { setDrawerOpen } from '#/state/slices/ui';
import store from '#/state/store';
import { onEnter } from '#/utils/client/input';
import { genEventSearchParams } from '#/utils/routing/searchParams';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'


const DrawerSearchInput = () => {
    const [query, setQuery] = useState("")
    const router = useRouter()
    const submitQuery = () => {
        store.dispatch(setDrawerOpen(false))
        const q = query
        setQuery("")
        router.push(`/events?${genEventSearchParams({ query: q })}`)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
            <input value={query} onChange={handleChange} className={clsx("w-full py-2 pl-10 pr-2 border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none dark:text-gray-300 dark:bg-gray-900 dark:focus:border-primary")} type="text" placeholder="Search" onKeyDown={(e) => onEnter<HTMLInputElement>(e, submitQuery, "onEnter")} />
        </div>
    )
}


DrawerSearchInput.displayName = "DrawerSearchInput"


export default DrawerSearchInput;
