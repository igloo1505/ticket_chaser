import React from 'react'
import SearchBar from './searchBar'
import { eventsPanelRight } from '#/types/DomIds'
import { EventsPageSearchParams } from '#/utils/routing/searchParams'



interface SearchPanelRightProps {
    query: string
}

const SearchPanelRight = (props: SearchPanelRightProps) => {
    return (
        <div className={`${eventsPanelRight} h-full w-full`} id={eventsPanelRight}>
            <SearchBar query={props.query} />
        </div>
    )
}


SearchPanelRight.displayName = "SearchPanelRight"


export default SearchPanelRight;
