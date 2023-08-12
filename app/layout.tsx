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
    return (
        <html lang="en">
            <body id="document-body">
                <StateWrappedUI isAuthenticated={validAuth} />
                {children}
                <script src="./node_modules/preline/dist/preline.js" async></script>
            </body>
        </html>
    )
}
