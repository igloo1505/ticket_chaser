"use client"
import { toggleEventsPageFilterPanel } from '#/actions/uiActions';
import ui from '#/state/initial/ui';
import { toggleDrawer } from '#/state/slices/ui';
import store from '#/state/store';
import { filterEventsToggleBtn } from '#/types/DomIds';
import React, { useEffect, useState } from 'react'
import { HiMiniAdjustmentsHorizontal, HiOutlineXMark } from 'react-icons/hi2';

import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import clsx from 'clsx';

const connector = connect((state: RootState, props: any) => ({
    open: state.UI.pages.events.panelOpen,
    props: props
}))

interface FilterPanelToggleButtonProps {
    open: boolean
}

const FilterPanelToggleButton = connector(({ open }: FilterPanelToggleButtonProps) => {
    return (
        <div className={"searchPanel-toggle-btn w-[48px] h-[48px] min-w-[48px] bg-transparent rounded-xl text-base-content grid place-items-center cursor-pointer"} onClick={() => toggleEventsPageFilterPanel(!open)} id={filterEventsToggleBtn} >
            {open ? <HiOutlineXMark className={"w-8 h-8"} /> : <HiMiniAdjustmentsHorizontal className={"w-8 h-8"} />}
        </div>
    )
})


FilterPanelToggleButton.displayName = "FilterPanelToggleButton"


export default FilterPanelToggleButton;
