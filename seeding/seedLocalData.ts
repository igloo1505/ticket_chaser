import seedTags from "../data/seed/tags"
import seedTeams from "../data/seed/teams"
import seedUsers from "../data/seed/users"
import { prisma } from "../db/db"
import { Prisma } from "@prisma/client"

const seedLocalData = async () => {
    for (var i = 0; i < seedUsers.length; i++) {
        const item = seedUsers[i]
        await prisma.user.create(item)
    }
    for (var n = 0; n < seedTags.length; n++) {
        const item = seedTags[n]
        await prisma.tag.create(item)
    }
    const logoData = []
    for (var l = 0; l < seedTeams.length; l++) {
        const item = seedTeams[l]
        console.log("item: ", item)
        const logos = item.data.logos?.createMany?.data as Prisma.LogoCreateManyTeamInput[]
        for (var k = 0; k < logos.length; k++) {
            const _item = logos[k]
            logoData.push({
                url: _item.url,
                path: _item.path
            })
        }
        await prisma.team.create(item)
    }
    // console.log(logoData)
}


seedLocalData()
