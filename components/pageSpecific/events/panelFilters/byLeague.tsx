import { Leagues, Sports } from '@prisma/client'
import React from 'react'



interface FilterByLeagueProps {

}

interface LeagueType {
    name: Leagues
    sport: Sports
}

const FilterByLeague = (props: FilterByLeagueProps) => {
    return (
        <div>

        </div>
    )
}


FilterByLeague.displayName = "FilterByLeague"


export default FilterByLeague;
