import { prisma } from '#/db/db'
import { encryptPasswordSync } from '#/utils/server/encryption'
import { Prisma, ROLE } from '@prisma/client'




const seedUsers = async () => {

    const users: Prisma.UserCreateArgs[] = [
        {
            data: {
                email: "aiglinski@icloud.com",
                password: "Password123!",
                role: "ADMIN" as ROLE,
                personalDetails: {
                    create: {
                        name: {
                            create: {
                                first: "Andrew",
                                middle: "Charles",
                                last: "Mueller"
                            }
                        }
                    }
                }
            }
        }
    ].map((j) => ({ ...j, data: { ...j.data, password: encryptPasswordSync(j.data.password) } }))

    for (var i = 0; i < users.length; i++) {
        const item = users[i]
        await prisma.user.create(item)
    }
}



seedUsers()
