import SearchFilterPanel from '#/components/pageSpecific/events/SearchFilterPanel'
import SearchBar, { EventsPageSearchParams } from '#/components/pageSpecific/events/searchBar'
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper'
import React from 'react'
import "./style.scss"
import SearchPanelRight from '#/components/pageSpecific/events/searchPanelRight'
import { filterPanelsContainer } from '#/types/DomIds'


interface EventsPageProps {
    searchParams: EventsPageSearchParams
}


const EventsPage = ({ searchParams }: EventsPageProps) => {
    return (
        <UnderNavbarWrapper>
            <div className={"w-screen h-full grid eventsFilterPanelContainer"} id={filterPanelsContainer}>
                <SearchFilterPanel />
                <SearchPanelRight searchParams={searchParams} />
            </div>
        </UnderNavbarWrapper>
    )
}


EventsPage.displayName = "EventsPage"


export default EventsPage;
