import AuthObserver from '#/components/utility/authObserver'
import { validateOrRedirect } from '#/utils/server/pages/authAndData'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'

const Home = async () => {
    const { user } = await validateOrRedirect()
    return (
        <div>
            <AuthObserver user={user} />
            Home page here...
        </div>
    )
}


export default Home
