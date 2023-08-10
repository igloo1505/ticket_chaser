import React from 'react'
import ByDateFilter from './panelFilters/ByDate';



interface SearchPanelFiltersProps {

}

const SearchPanelFilters = (props: SearchPanelFiltersProps) => {
    return (
        <div className={"px-4"}>
            <ByDateFilter />
        </div>
    )
}


SearchPanelFilters.displayName = "SearchPanelFilters"


export default SearchPanelFilters;
