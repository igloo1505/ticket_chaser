import React from 'react'
import SearchBar from './searchBar'
import { eventsPanelRight } from '#/types/DomIds'
import { EventsPageSearchParams } from '#/utils/routing/searchParams'



interface SearchPanelRightProps {
    searchParams: EventsPageSearchParams
}

const SearchPanelRight = (props: SearchPanelRightProps) => {
    return (
        <div className={`${eventsPanelRight} w-full`} id={eventsPanelRight}>
            <SearchBar query={props.searchParams.query || ""} />
        </div>
    )
}


SearchPanelRight.displayName = "SearchPanelRight"


export default SearchPanelRight;
