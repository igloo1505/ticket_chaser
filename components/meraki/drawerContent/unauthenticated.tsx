import React from 'react'
import { HiMiniArrowRightOnRectangle, HiMiniQuestionMarkCircle, HiMiniFingerPrint, HiMiniMapPin } from 'react-icons/hi2'
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
            <nav>
                <div className={"flex flex-col justify-start items-start gap-4"}>
                    <DrawerContentItem
                        Icon={<HiMiniMapPin className={"w-6 h-6"} />}
                        label="Find Events"
                        href="/events"
                    />

                    <DrawerContentItem
                        Icon={<HiMiniQuestionMarkCircle className={"w-6 h-6"} />}
                        label="FAQ"
                        href="/faqs"
                    />
                </div>
            </nav >
            <nav>
                <hr className="my-4 border-gray-200 dark:border-gray-600" />
                <div className={"flex flex-col justify-start items-start gap-4"}>
                    <DrawerContentItem Icon={
                        <HiMiniFingerPrint className={"w-6 h-6"} />} label="Login" href={"/login"} query={{ login: "true" }} />
                    <DrawerContentItem Icon={
                        <HiMiniArrowRightOnRectangle className={"w-6 h-6"} />} label="Sign Up" href={"/login"} />
                </div>
            </nav>
        </div>
    )
})


DrawerContentUnAuthenticated.displayName = "DrawerContent"


export default DrawerContentUnAuthenticated;
