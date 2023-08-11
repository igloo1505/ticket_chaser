import SearchFilterPanel from '#/components/pageSpecific/events/SearchFilterPanel'
import SearchBar from '#/components/pageSpecific/events/searchBar'
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper'
import React from 'react'
import "./style.scss"
import SearchPanelRight from '#/components/pageSpecific/events/searchPanelRight'
import { filterPanelsContainer } from '#/types/DomIds'
import ReduxProvider from '#/components/utility/reduxProvider'
import { EventsPageSearchParams } from '#/utils/routing/searchParams'


interface EventsPageProps {
    searchParams: EventsPageSearchParams
}


const EventsPage = ({ searchParams }: EventsPageProps) => {
    return (
        <div className={"w-screen h-full min-h-screen grid eventsFilterPanelContainer pt-28"} id={filterPanelsContainer}>
            <ReduxProvider>
                <SearchFilterPanel searchParams={searchParams} />
                <SearchPanelRight searchParams={searchParams} />
            </ReduxProvider>
        </div>
    )
}


EventsPage.displayName = "EventsPage"


export default EventsPage;
