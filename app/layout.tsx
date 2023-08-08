import StateWrappedUI from '#/components/ui/stateWrappedUI'
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper'
import { cookies } from 'next/headers'
import './globals.css'
import { tokenMap } from '#/utils/server/syncrhonousToken'
/* import { Inter } from 'next/font/google' */
/* const inter = Inter({ subsets: ['latin'] }) */
/* className={inter.className} */


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieJar = cookies()
    const validAuth = cookieJar.has(tokenMap.auth) && cookieJar.has(tokenMap.userId)
    return (
        <html lang="en">
            <body id="document-body">
                <StateWrappedUI isAuthenticated={validAuth} />
                {children}
            </body>
        </html>
    )
}
