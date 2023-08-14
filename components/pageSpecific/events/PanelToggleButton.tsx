"use client"
import { toggleEventsPageFilterPanel } from '#/actions/uiActions';
import ui from '#/state/initial/ui';
import { toggleDrawer } from '#/state/slices/ui';
import store from '#/state/store';
import { filterEventsToggleBtn } from '#/types/DomIds';
import Hamburger from 'hamburger-react';
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

import { RootState } from '#/state/store';
import { connect } from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    open: state.UI.pages.events.panelOpen,
    props: props
}))

interface FilterPanelToggleButtonProps {
    open: boolean
}

const FilterPanelToggleButton = connector(({ open }: FilterPanelToggleButtonProps) => {
    /* toggleEventsPageFilterPanel(isOpen) */
    return (
        <div className={"searchPanel-toggle-btn w-[48px] h-[48px] bg-transparent rounded-xl text-base-content"} onClick={() => toggleEventsPageFilterPanel(!open)} id={filterEventsToggleBtn} >
            <Hamburger toggled={!open} />
        </div>
    )
})


FilterPanelToggleButton.displayName = "FilterPanelToggleButton"


export default FilterPanelToggleButton;
