"use client"
import { EventsPageContent } from '#/content/eventsPage'
import { eventsSearchPageInput } from '#/types/DomIds'
import clsx from 'clsx'
import React, { ChangeEvent, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export interface EventsPageSearchParams {
    tag?: string
    category?: string
    query?: string
    performer?: string
}

interface SearchBarProps {
    query?: string
}

const SearchBar = (props: SearchBarProps) => {
    const [formData, setFormData] = useState<EventsPageSearchParams>({
        tag: "",
        category: "",
        query: props.query,
        performer: ""
    })
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
    return (
        <div className={"w-full pr-8 pl-8 flex flex-row justify-end items-center"} id={`${eventsSearchPageInput}-container`}>
            <input id={eventsSearchPageInput} name='query' placeholder={EventsPageContent.input.placeholder} className={clsx("input input-bordered w-full")} onChange={handleChange} value={formData.query} />
        </div>
    )
}


SearchBar.displayName = "SearchBar"


export default SearchBar;
