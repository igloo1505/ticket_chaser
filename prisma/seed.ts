import { prisma } from '../db/db'
import seedTags from '../data/seed/tags'
import seedUsers from '../data/seed/users'
import seedTeams from '#/data/seed/teams'



const seed = async () => {
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
        /// @ts-ignore
        for (var k = 0; k < item.data.logos?.createMany?.data.length; k++) {
            /// @ts-ignore
            const _item = item.data.logos?.createMany?.data.length[k]
            logoData.push({
                url: _item.url,
                path: _item.path
            })
        }
        await prisma.team.create(item)
    }
    console.log(logoData)
}



seed()
