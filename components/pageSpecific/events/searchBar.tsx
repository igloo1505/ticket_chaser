"use client"
import { EventsPageContent } from '#/content/eventsPage'
import { eventsSearchPageInput } from '#/types/DomIds'
import { EventsPageSearchParams } from '#/utils/routing/searchParams'
import clsx from 'clsx'
import React, { ChangeEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { setEventsFilterData } from '#/state/slices/form'

const connector = connect((state: RootState, props: any) => ({
    filters: state.form.events.panel.filter,
    props: props
}))

interface SearchBarProps {
    query?: string
    filters: RootState['form']['events']['panel']['filter']
}

const SearchBar = connector(({ filters }: SearchBarProps) => {
    const [focused, setFocused] = useState(false)

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        store.dispatch(setEventsFilterData({ query: target.value }))
    }

    return (
        <div className={"w-full pr-8 pl-8 flex flex-row justify-end items-center"} id={`${eventsSearchPageInput}-container`}>
            <input id={eventsSearchPageInput} onBlur={() => setFocused(false)} onFocus={() => setFocused(true)} name='query' placeholder={EventsPageContent.input.placeholder} className={clsx("input input-bordered w-full")} onChange={handleChange} value={filters.query} />
            <div className={clsx("absolute right-12 h-full w-8 grid items-center cursor-pointer", focused && "text-primary-focus")}><AiOutlineSearch className={"h-8 w-8"} /></div>
        </div>
    )
})


SearchBar.displayName = "SearchBar"


export default SearchBar;
