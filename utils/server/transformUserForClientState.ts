import { UserWithAll, UserWithPersonalDetails } from "#/types/AuthTypes";
import { formatDate } from "../dates/dayjs";


export const transformUserForClientState = (user: UserWithAll | UserWithPersonalDetails | undefined) => {
    console.log("user (transformUserForClientState): ", user)
    if (!user) return undefined
    return {
        ...user,
        password: undefined,
        createdAt: formatDate(new Date(user.createdAt))
    }
}
