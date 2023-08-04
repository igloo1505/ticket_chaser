import StateWrappedUI from '#/components/ui/stateWrappedUI'
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper'
import './globals.css'
/* import { Inter } from 'next/font/google' */
/* const inter = Inter({ subsets: ['latin'] }) */
/* className={inter.className} */


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={"h-fit relative"}>
                <StateWrappedUI />
                {children}
            </body>
        </html>
    )
}
