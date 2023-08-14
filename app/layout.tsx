import StateWrappedUI from '#/components/ui/stateWrappedUI'
import { darkTheme } from '#/daisy/dark'
import './globals.css'
import { getUserInServerComponent } from '#/utils/server/serverActions/getUser'
import Footer from '#/components/ui/Footer'
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


    return (
        <html lang="en">
            <body id="document-body" data-theme={darkTheme} className={"group"}>
                <StateWrappedUI isAuthenticated={Boolean(user)} shouldClearCookies={user === "shouldRemoveCookies"} user={typeof user === "string" ? undefined : user} />
                {children}
                <Footer />
            </body>
        </html>
    )
}



