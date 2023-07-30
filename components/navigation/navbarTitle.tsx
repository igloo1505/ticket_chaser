import Link from 'next/link';
import React from 'react'


const NavbarTitle = () => {
    return (
        <Link href="/">
            <div className={'text-xl pl-2'}>Title or Logo Here</div>
        </Link>
    )
}


NavbarTitle.displayName = "NavbarTitle"


export default NavbarTitle;
