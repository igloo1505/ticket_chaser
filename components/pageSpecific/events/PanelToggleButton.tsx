"use client"
import { toggleEventsPageFilterPanel } from '#/actions/uiActions';
import ui from '#/state/initial/ui';
import { toggleDrawer } from '#/state/slices/ui';
import store from '#/state/store';
import { filterEventsToggleBtn } from '#/types/DomIds';
import Hamburger from 'hamburger-react';
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';



interface FilterPanelToggleButtonProps {

}

const FilterPanelToggleButton = (props: FilterPanelToggleButtonProps) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleToggle = () => {
    }
    useEffect(() => {
        toggleEventsPageFilterPanel(isOpen)
    }, [isOpen])
    return (
        <div className={"searchPanel-toggle-btn w-[48px] h-[48px] bg-transparent rounded-xl text-base-content"} onClick={handleToggle} id={filterEventsToggleBtn} >
            <Hamburger toggled={!isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
    )
}


FilterPanelToggleButton.displayName = "FilterPanelToggleButton"


export default FilterPanelToggleButton;
