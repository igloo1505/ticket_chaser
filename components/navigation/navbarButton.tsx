"use client"
import { ROLE } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import clsx from 'clsx';

const connector = connect((state: RootState, props: any) => ({
    authed: state.auth.authenticated,
    user: state.auth.user,
    props: props
}))



export interface NavbarButtonProps {
    href: string
    label: string
    roles?: ROLE[]
    displayAuth: "authenticated" | "any" | "unauthenticated" | "development"
}

interface Props extends NavbarButtonProps {
    authed: RootState['auth']['authenticated']
    user: RootState['auth']['user']
}

const NavbarButton = connector((props: Props) => {
    const [display, setDisplay] = useState<boolean>(false)
    const setDisplayState = () => {
        if(props.displayAuth === "development") return true
        if (props.roles && Boolean(!props.user || props.roles.indexOf(props.user.role) === -1)) {
            return false
        }
        if (props.displayAuth !== "any") {
            if (props.displayAuth === "authenticated" && !props.authed) {
                return false
            }
            if (props.displayAuth === "unauthenticated" && props.authed) {
                return false
            }
        }
        return true
    }
    useEffect(() => {
        setDisplay(setDisplayState())
    }, [props.roles])
    return (
        <Link href={props.href} className={clsx("flex justify-center items-center", display ? "block" : "hidden", props.displayAuth === "development" && "btn btn-error")}>
            {props.label}
        </Link>
    )
})


NavbarButton.displayName = "NavbarButton"


export default NavbarButton;