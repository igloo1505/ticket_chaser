"use client"
import TeamTag from '#/components/teams/TeamTag'
import { prisma } from '#/db/db'
import { Leagues, Team } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';


interface TeamSelectionModalProps {
    open?: boolean
    allowMultiple?: boolean
    specificLeague?: Leagues
    onSelect: (t: Team) => void
}

interface TeamOption extends Team {
    selected: boolean
}



const TeamSelectionModal = (props: TeamSelectionModalProps) => {
    const [availableTeams, setAvailableTeams] = useState<TeamOption[]>([])
    const getTeams = async () => {
        const _teams = await prisma.team.findMany({
            ...(props.specificLeague && {
                where: {
                    league: props.specificLeague
                }
            })
        })
        const teams = _teams.map((t) => {
            return {
                ...t,
                selected: false
            }
        })
        setAvailableTeams(teams)
    }
    useEffect(() => {
        getTeams()
    }, [props.open])

    return createPortal((
        <div>
            {availableTeams.map((t, i) => {
                return (
                    <TeamTag key={`team-option-${i}`} teamName={t.name} allowSelection isSelected={t.selected} />
                )
            })}
        </div>
    ), document.body)
}


TeamSelectionModal.displayName = "TeamSelectionModal"


export default TeamSelectionModal;
