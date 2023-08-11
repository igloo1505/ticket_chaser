import React from 'react'
import ByDateFilter from './panelFilters/ByDate';
import SearchPanelTagCollection from './panelFilters/tagCollection';
import { EventsPageSearchParams } from '#/utils/routing/searchParams';

import { RootState } from '#/state/store';
import { connect } from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    tags: state.form.events.panel.filter.tags,
    props: props
}))

interface SearchPanelFiltersProps {
    searchParams: EventsPageSearchParams
    tags: RootState['form']['events']['panel']['filter']['tags']
}

const SearchPanelFilters = connector(({ tags }: SearchPanelFiltersProps) => {
    return (
        <div className={"px-4"}>
            <ByDateFilter />
            <SearchPanelTagCollection tags={tags} />
        </div>
    )
})


SearchPanelFilters.displayName = "SearchPanelFilters"


export default SearchPanelFilters;
