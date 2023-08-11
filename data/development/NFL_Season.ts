import { NFLTeamName } from '@prisma/client'
// NOTE: NFLTeamName is a list of specific strings so they can be found easily. They're pretty obvious, and the intellisense autocomplete in vs-code should help a lot if you install a typescript extension.

// NOTE: The date field has to be able to be parsed by javascript. If you're unsure if it will work, open chrome, and type cmd-option-i to open the dev tools, and in the console tab just type new Date("whatever you were trying as a string"). If it doesn't give you an error you can use that format for everything. The format "09/01/2023" will work fine... but not "09-01-2023" or "09-1-2023"


interface DefaultGameType {
    teams: {
        home: NFLTeamName
        away: NFLTeamName
    }
    date: string
}


const data: DefaultGameType[] = []

data.push(
    {
        teams: {
            home: "Packers",
            away: "Rams"
        },
        // NOTE: 19:00 = 7:00pm, CDT = Central Daylight Time
        date: "09/01/2023 19:00:00 CDT"
    }
)

// data.push({...})
// data.push({...})
// data.push({...})
// data.push({...})
// data.push({...})
// data.push({...})


export default data
