"use client"
import { toggleEventsPageFilterPanel } from '#/actions/uiActions';
import { filterEventsToggleBtn } from '#/types/DomIds';
import React from 'react'
import { HiMiniAdjustmentsHorizontal, HiOutlineXMark } from 'react-icons/hi2';

import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import CloseIcon from '#/components/ui/icons/close';

const connector = connect((state: RootState, props: any) => ({
    open: state.UI.pages.events.panelOpen,
    props: props
}))

interface FilterPanelToggleButtonProps {
    open: boolean
}

const FilterPanelToggleButton = connector(({ open }: FilterPanelToggleButtonProps) => {
    return (
        <div className={"panelBtn text-base-content"} onClick={() => toggleEventsPageFilterPanel("toggle")} id={filterEventsToggleBtn} >
            <CloseIcon className={"openBtn"} />
            <HiMiniAdjustmentsHorizontal className={"closeBtn"} />
        </div>
    )
})


FilterPanelToggleButton.displayName = "FilterPanelToggleButton"


export default FilterPanelToggleButton;
