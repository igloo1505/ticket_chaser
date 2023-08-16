import React from 'react'
import SearchBar from './searchBar'
import { eventsPanelRight } from '#/types/DomIds'
import FilterPanelToggleButton from './PanelToggleButton'



interface SearchPanelRightProps {
    query: string
}

const SearchPanelRight = (props: SearchPanelRightProps) => {
    return (
        <div className={"searchPanelRight"} id={eventsPanelRight}>
            <div className={"searchPanelRight-top"}>
                <FilterPanelToggleButton />
                <SearchBar query={props.query} />
            </div>
            <div className={"w-full h-full min-h-fit flex justify-center items-center"}>
                Events will go here
            </div>
        </div>
    )
}


SearchPanelRight.displayName = "SearchPanelRight"


export default SearchPanelRight;
