"use client"
import store from '#/state/store';
import React, { useEffect, useState } from 'react'
import FilterPanelToggleButton from './PanelToggleButton';
import { EventsPageContent } from '#/content/eventsPage';

import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import SearchPanelFilters from './SearchPanelFilters';
import clsx from 'clsx';
import { clearEventFilter } from '#/actions/inputActions';
import { isInitialFilterState } from '#/state/initial/forms/events';
import { handlePanelResize } from '#/actions/uiActions';
import { EventsPageSearchParams, genEventSearchParams } from '#/utils/routing/searchParams';
import { setInitialEventsFilterData } from '#/state/slices/form';
import { useRouter } from 'next/navigation';

const connector = connect((state: RootState, props: any) => ({
    replaceContent: state.form.events.panel.replaceContent,
    filters: state.form.events.panel.filter,
    props: props
}))

interface SearchFilterPanelProps {
    replaceContent: RootState['form']['events']['panel']['replaceContent']
    filters: RootState['form']['events']['panel']['filter']
    searchParams: EventsPageSearchParams
}





const SearchFilterPanel = connector(({ replaceContent, filters, searchParams }: SearchFilterPanelProps) => {
    const [initialFilterState, setIsInitialFilterState] = useState(true)
    const router = useRouter()
    useEffect(() => {
        store.dispatch(setInitialEventsFilterData(searchParams))
    }, [])
    useEffect(() => {
        setIsInitialFilterState(isInitialFilterState(filters))
    }, [filters])

    useEffect(() => {
        window.addEventListener("resize", handlePanelResize)
        return () => window.removeEventListener("resize", handlePanelResize)
    }, [])

    const redirectToEventQuery = () => {
        const query = genEventSearchParams(filters)
        console.log("query: ", query)
        // router.push(`/events?${query}`)
    }

    return (
        <div className={"searchPanel relative h-full elevate-200 text-primary-content rounded-tr-xl rounded-br-xl grid grid-rows-[auto_1fr]"}>
            <FilterPanelToggleButton />
            <div className={"w-full text-center text-lg text-base-content py-4"}>{EventsPageContent.filterPanel.title}</div>
            <div className={"h-full"}>
                <div id="panel-replace-content-target" className={clsx("w-full h-full flex flex-col justify-start items-center", !replaceContent && "hidden")}>
                </div>
                {!replaceContent && <SearchPanelFilters searchParams={searchParams} />}
            </div>
            <a role="button" onClick={clearEventFilter} className={clsx("bg-error text-error-content w-[calc(100%-1rem)] ml-2 mb-2 rounded-lg text-center py-2 px-1", initialFilterState && "hidden")}>Clear</a>
            <a role="button" onClick={redirectToEventQuery} className={clsx("bg-primary text-primary-content w-[calc(100%-1rem)] ml-2 mb-2 rounded-lg text-center py-2 px-1", initialFilterState && "hidden")}>Search</a>
        </div>
    )
})


SearchFilterPanel.displayName = "SearchFilterPanel"


export default SearchFilterPanel;
