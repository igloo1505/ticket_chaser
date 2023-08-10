"use client"
import { getAvailableTeams } from '#/actions/adminActions'
import TeamTag from '#/components/teams/TeamTag'
import type { Leagues, Team } from '@prisma/client'
import clsx from 'clsx'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { createPortal } from 'react-dom';


interface TeamSelectionModalProps {
    open?: boolean
    allowMultiple?: boolean
    specificLeague?: Leagues
    onSelectionChange: (t: Team, selected: boolean) => void
    selectedIds: number[]
    onClose: () => void
}

interface TeamOption extends Team {
    selected: boolean
}



const TeamSelectionModal = (props: TeamSelectionModalProps) => {
    const [availableTeams, setAvailableTeams] = useState<TeamOption[]>([])
    const getTeams = async () => {
        const _teams = await getAvailableTeams()
        const teams = _teams.map((t: Team) => {
            return {
                ...t,
                selected: props.selectedIds.indexOf(t.id) >= 0 || false
            }
        })
        setAvailableTeams(teams)
    }

    useEffect(() => {
        getTeams()
    }, [props.open])


    const handleSelectionChange = (id: string | number) => {
        const t = availableTeams.filter((t) => t.id === id)[0]
        if (!t) return
        props.onSelectionChange(t, !t.selected)
        setAvailableTeams(availableTeams.map((t) => t.id === id ? {
            ...t,
            selected: !t.selected
        } : t))
    }

    const handleCloseInternally: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        e.preventDefault()
        props.onClose()
    }


    return createPortal((
        <div className={clsx("w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center", !props.open && "hidden")} >
            <div className={"bg-base-200 bg-opacity-30 w-full h-full absolute top-0 left-0 z-[-1]"} onClick={handleCloseInternally} />
            <div className={"min-w-[min(540px_85vw)] bg-base-200 px-6 py-6 rounded-lg"}>
                {availableTeams.map((t, i) => {
                    return (
                        <TeamTag key={`team-option-${i}`} teamName={t.name} allowSelection isSelected={t.selected} itemChangeId={t.id} toggleSelection={handleSelectionChange} />
                    )
                })}
            </div>
        </div>
    ), document.body)
}


TeamSelectionModal.displayName = "TeamSelectionModal"


export default TeamSelectionModal;
