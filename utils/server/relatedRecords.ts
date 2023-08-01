import { User } from "@prisma/client";
import { prisma } from "#/db/db";


export const removeUserAndRelatedRecords = async ({ userId, user }: { userId?: number, user?: User | any }) => {
    if (!user) {
        /// @ts-ignore
        user = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })
    }
    console.log("user: ", user)
    if (!user) {
        return console.log("No user found while attempting to remove.")
    }
    if (user.paymentAccountDetailsId) {
        await prisma.paymentAccountDetails.delete({
            where: {
                id: user?.paymentAccountDetailsId
            }
        })
    }
    await prisma.purchaseHistory.delete({
        where: {
            userId: user.id
        }
    })
    const pd = await prisma.personalDetails.findFirst({
        where: {
            userId: user.id
        }
    })
    if (pd) {
        await prisma.legalName.delete({
            where: {
                detailsId: pd.id
            }
        })
        await prisma.personalDetails.delete({
            where: {
                id: pd.id
            }
        })
    }
    await prisma.user.delete({
        where: {
            id: user.id
        }
    })
}
