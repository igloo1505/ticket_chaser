import { Arena, ArenaSection, Event, Location, Prisma, Team } from "@prisma/client";


export const defaultLocationForm: Prisma.LocationCreateWithoutArenaInput = {
    street: "",
    zip: null,
    city: "",
    cityId: null,
    state: "AL",
    lat: null,
    long: null
}

export interface RetrievedArenaType extends Arena {
    events: Event[] | []
    location?: Location | typeof defaultLocationForm
    sections?: ArenaSection[] | []
    homeTeams: Team[] | []
}

export interface ArenaEditingType extends Partial<Arena> {
    name: string
    events: Event[] | Prisma.EventCreateArgs[]
    location: Partial<Prisma.LocationCreateWithoutArenaInput> | any
    sections: ArenaSection[] | Prisma.ArenaCreateArgs[]
    homeTeams: Team[] | []
    homeTeamQuery: string
}
