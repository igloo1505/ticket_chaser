import SearchFilterPanel from '#/components/pageSpecific/events/SearchFilterPanel'
import React from 'react'
import "./style.scss"
import SearchPanelRight from '#/components/pageSpecific/events/searchPanelRight'
import { filterPanelsContainer } from '#/types/DomIds'
import ReduxProvider from '#/components/utility/reduxProvider'
import { EventsPageSearchParams } from '#/utils/routing/searchParams'
import PageContentWrapper from '#/components/ui/pageContentWrapper'


interface EventsPageProps {
    searchParams: EventsPageSearchParams
}


const EventsPage = ({ searchParams }: EventsPageProps) => {
    return (
        <ReduxProvider>
            <PageContentWrapper>
                <div className={"eventsPageWrapper"} id={filterPanelsContainer}>
                    <SearchFilterPanel searchParams={searchParams} />
                    <SearchPanelRight query={searchParams.query || ""} />
                </div>
            </PageContentWrapper>
        </ReduxProvider>
    )
}


EventsPage.displayName = "EventsPage"


export default EventsPage;
