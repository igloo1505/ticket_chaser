import './globals.css'
import "primereact/resources/primereact.min.css"; 
import "primereact/resources/themes/soho-dark/theme.css";     
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
      <body>
        {children}
            </body>
    </html>
  )
}
