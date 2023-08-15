import React from 'react'
import SearchBar from './searchBar'
import { eventsPanelRight } from '#/types/DomIds'
import { EventsPageSearchParams } from '#/utils/routing/searchParams'
import FilterPanelToggleButton from './PanelToggleButton'



interface SearchPanelRightProps {
    query: string
}

const SearchPanelRight = (props: SearchPanelRightProps) => {
    return (
        <div className={"searchPanelRight"} id={eventsPanelRight}>
            <FilterPanelToggleButton />
            <SearchBar query={props.query} />
        </div>
    )
}


SearchPanelRight.displayName = "SearchPanelRight"


export default SearchPanelRight;
