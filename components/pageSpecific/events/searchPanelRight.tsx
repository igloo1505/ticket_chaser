import React from 'react'
import SearchBar, { EventsPageSearchParams } from './searchBar'
import { eventsPanelRight } from '#/types/DomIds'



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
