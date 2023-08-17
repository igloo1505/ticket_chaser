import StateWrappedUI from '#/components/ui/stateWrappedUI'
import { darkTheme } from '#/daisy/dark'
import './globals.css'
import { getUserInServerComponent } from '#/utils/server/serverActions/getUser'
/* import { Inter } from 'next/font/google' */
/* className={inter.className} */
/* const inter = Inter({ subsets: ['latin'] }) */
import colors from 'colors'
/* export const revalidate = 3600 */


export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await getUserInServerComponent()
    if (user) {
        console.log(`user: ${JSON.stringify(user, null, 4)}`.blue)
    }
    if (!user || user === "shouldRemoveCookies") {
        console.log('No user found in layout'.red)
    }
    return (
        <html lang="en" className={"dark"}>
            <body id="document-body" data-theme={darkTheme} className={"group bg-base-100 min-h-screen"}>
                <StateWrappedUI isAuthenticated={Boolean(user)} shouldClearCookies={user === "shouldRemoveCookies"} user={typeof user === "string" ? undefined : user} />
                {children}
            </body>
        </html>
    )
}
