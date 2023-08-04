import Link from 'next/link';
import React from 'react'


const NavbarTitle = () => {
    return (
        <Link href="/">
            <div className={'text-xl text-base-content font-bold tracking-wider pl-2'}>SafeStub</div>
        </Link>
    )
}


NavbarTitle.displayName = "NavbarTitle"


export default NavbarTitle;
