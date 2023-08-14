import React from 'react'
import { HiMiniArrowRightOnRectangle, HiMiniFingerPrint } from 'react-icons/hi2'
import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import DrawerContentItem from './drawerContentItem';

const connector = connect((state: RootState, props: any) => ({
    user: state.auth.user,
    props: props
}))


interface DrawerContentProps {
    user: RootState['auth']['user']
}

const DrawerContentUnAuthenticated = connector(({ user }: DrawerContentProps) => {
    return (
        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav />
            <nav>
                <hr className="my-6 border-gray-200 dark:border-gray-600" />
                <DrawerContentItem Icon={
                    <HiMiniFingerPrint className={"w-6 h-6"} />} label="Login" href={"/login"} query={{ login: "true" }} reloadOnPage={["/login"]} />
                <DrawerContentItem Icon={
                    <HiMiniArrowRightOnRectangle className={"w-6 h-6"} />} label="Sign Up" href={"/login"} reloadOnPage={["/login"]} />
            </nav>
        </div>
    )
})


DrawerContentUnAuthenticated.displayName = "DrawerContent"


export default DrawerContentUnAuthenticated;
