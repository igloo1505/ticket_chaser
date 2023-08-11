import StateWrappedUI from '#/components/ui/stateWrappedUI'
import { cookies } from 'next/headers'
import './globals.css'
import { tokenMap } from '#/utils/server/syncrhonousToken'
/* import { Inter } from 'next/font/google' */
/* className={inter.className} */
/* const inter = Inter({ subsets: ['latin'] }) */


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieJar = cookies()
    const validAuth = cookieJar.has(tokenMap.auth) && cookieJar.has(tokenMap.userId)
    console.log("validAuth: ", validAuth)
    return (
        <html lang="en">
            <body id="document-body">
                <StateWrappedUI isAuthenticated={validAuth} />
                {children}
            </body>
        </html>
    )
}
