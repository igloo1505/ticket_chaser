import StateWrappedUI from '#/components/ui/stateWrappedUI'
import { cookies } from 'next/headers'
import { tokenMap } from '#/utils/server/syncrhonousToken'
import { prisma } from '#/db/db'
import { validate } from '#/utils/server/tokens'
import { darkTheme } from '#/daisy/dark'
import './globals.css'
import { getUserInServerComponent } from '#/utils/server/serverActions/getUser'
/* import { Inter } from 'next/font/google' */
/* className={inter.className} */
/* const inter = Inter({ subsets: ['latin'] }) */

export const revalidate = 3600

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await getUserInServerComponent()
    console.log("user: ", user)
    return (
        <html lang="en">
            <body id="document-body" data-theme={darkTheme}>
                <StateWrappedUI isAuthenticated={Boolean(user)} shouldClearCookies={user === "shouldRemoveCookies"} user={typeof user === "string" ? undefined : user} />
                {children}
            </body>
        </html>
    )
}



