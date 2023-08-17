import { prisma } from '../db/db'
import data from '../data/static/games/fromAPI.json'
import { NFLTeamName, Prisma, USSTATE } from '@prisma/client'
import cData from '../data/server/USOnly.json'
import { LocationJSONData, states } from '../types/inputValidation'
import { TBDArena, TBDTeam } from '../types/events'
const cityData = cData as LocationJSONData

const getTeamId = async (name: string) => {
    const s = name.split(" ")
    let _name = s[s.length - 1]
    _name === "49ers" && (_name = "FourtyNiners")
    const team = await prisma.team.findFirst({
        where: {
            name: {
                equals: _name as NFLTeamName
            }
        }
    })
    return team?.id
}



type CityMapKey = "Canton" | "Foxboro" | "Seattle" | "Cincinnati" | "Detroit" | "Miami Gardens" | "Tampa" | "Cleveland" | "Glendale" | "Orchard Park" | "Chicago" | "Charlotte" | "Arlington" | "Baltimore" | "Inglewood" | "New Orleans" | "Las Vegas" | "Philadelphia" | "East Rutherford" | "Atlanta" | "Houston" | "Pittsburgh" | "Indianapolis" | "Green Bay" | "Minneapolis" | "Santa Clara" | "Landover" | "Nashville" | "Kansas City" | "Jacksonville" | "Denver" | "London" | "Frankfurt" | "Foxborough"



const cityMap: { [k in CityMapKey]: USSTATE | "UK" | "GER" } = {
    Glendale: "AZ",
    "Orchard Park": "NY",
    Atlanta: "GA",
    Charlotte: "NC",
    Houston: "TX",
    Chicago: "IL",
    "Miami Gardens": "FL",
    Denver: "CO",
    "Kansas City": "MO",
    Cleveland: "OH",
    Arlington: "TX",
    Indianapolis: "IN",
    "East Rutherford": "NJ",
    Philadelphia: "PA",
    Tampa: "FL",
    Landover: "MD",
    Jacksonville: "FL",
    Baltimore: "MD",
    Seattle: "WA",
    Minneapolis: "MN",
    "Santa Clara": "CA",
    Canton: "OH",
    Foxboro: "MA",
    Foxborough: "MA",
    Cincinnati: "OH",
    Detroit: "MI",
    Inglewood: "CA",
    "Las Vegas": "NV",
    Pittsburgh: "PA",
    "New Orleans": "LA",
    "Green Bay": "WI",
    Nashville: "TN",
    London: "UK",
    Frankfurt: "GER"
}

const getCity = (city: CityMapKey) => {
    city === "Foxboro" && (city = "Foxborough")
    const _state = cityMap[city]
    if (_state === "UK" || _state === "GER") {
        return {
            city: city,
            country: _state,
        }
    }
    const state = states.find((s) => s.abbrev === _state)
    if (!state) return console.log(`No state found for city ${city}`)
    const stateData = cityData[state.name]
    const _city = stateData.cities[stateData.cities.map((c) => c.name).indexOf(city)]
    if (!_city) return console.log(`No city found for ${city}, ${state.name}`)
    return _city ? {
        city: city,
        state: cityMap[city] as USSTATE,
        lat: parseFloat(_city.latitude),
        long: parseFloat(_city.longitude)
    } : { city: "TBD" }
}

const formatGame = async (g: typeof data.response[0]) => {
    const tbdGame: Prisma.EventCreateArgs = {
        data: {
            category: "Sports",
            date: new Date(g.game.date.timestamp),
            title: g.game.stage,
            description: g.game.week,
            arena: {
                connectOrCreate: TBDArena
            },
            amenities: {
                create: {}
            }
        }
    }
    if (!g.game.venue.name) {
        return tbdGame
    }
    const superbowl = g.game.week === "Super Bowl"
    const teamId = g.teams.home.name ? await getTeamId(g.teams.home.name) : false
    console.log("teamId, g.teams.home.name: ", teamId, g.teams.home.name)

    if (!teamId && !superbowl) {
        return console.log(`No teamId found for team ${g.teams.home.name}`)
    }

    const _city = getCity(g.game.venue.city as CityMapKey)
    if (!_city) return console.log(`No city data found for ${JSON.stringify(g.game.venue, null, 4)}`)

    const arena: Prisma.ArenaCreateOrConnectWithoutEventsInput = {
        where: {
            name: g.game.venue.name
        },
        create: {
            name: g.game.venue.name,
            location: {
                create: {
                    ..._city
                }
            },
            amenities: {
                create: {}
            },
            homeTeams: {
                ...(teamId && {
                    connect: {
                        id: teamId
                    }
                }),
                ...(!teamId && {
                    connectOrCreate: TBDTeam
                })
            }

        }
    }
    type _Tag = string | null
    const _tags: _Tag[] = [g.league.name, g.teams.home.name, g.teams.away.name, g.game.venue.name, g.game.stage].filter((g) => g !== null)
    const event: Prisma.EventCreateArgs = {
        data: {
            category: "Sports",
            date: new Date(g.game.date.timestamp),
            title: g.game.week,
            description: `${g.teams.away.name} at ${g.teams.home.name}`,
            arena: {
                connectOrCreate: arena
            },
            amenities: {
                create: {}
            },
            tags: {
                connectOrCreate: _tags.map((t) => {
                    const _t = t as string
                    return {
                        where: {
                            value: _t as string
                        },
                        create: {
                            value: _t
                        }
                    }
                }
                )
            }
        }
    }
    return event
}


export const seedGames = async () => {
    // const games = data.response.map((j) => )
    for (var g = 0; g < data.response.length; g++) {
        const game = await formatGame(data.response[g])
        if (!game) {
            console.log(`Game not yielded for ${JSON.stringify(data.response[g], null, 4)}`)
        }
        if (game) {
            await prisma.event.create(game)
        }
    }
    // uniqueCities.forEach((c) => console.log(c))
}

seedGames()
