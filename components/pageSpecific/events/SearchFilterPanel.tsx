import ui from '#/state/initial/ui';
import { toggleDrawer } from '#/state/slices/ui';
import store from '#/state/store';
import Hamburger from 'hamburger-react';
import React from 'react'
import FilterPanelToggleButton from './PanelToggleButton';
import { EventsPageContent } from '#/content/eventsPage';



interface SearchFilterPanelProps {
}

const SearchFilterPanel = (props: SearchFilterPanelProps) => {
    return (
        <div className={"searchPanel relative h-full elevate-200 text-primary-content rounded-tr-xl rounded-br-xl"}>
            <FilterPanelToggleButton />
            <div className={"w-full text-center text-lg text-base-content py-4"}>{EventsPageContent.filterPanel.title}</div>
        </div>
    )
}


SearchFilterPanel.displayName = "SearchFilterPanel"


export default SearchFilterPanel;
