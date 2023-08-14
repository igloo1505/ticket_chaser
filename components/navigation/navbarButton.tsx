"use client"
import { ROLE } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Route } from 'next';

const connector = connect((state: RootState, props: any) => ({
    authed: state.auth.authenticated,
    user: state.auth.user,
    authState: state.auth,
    props: props
}))



export interface NavbarButtonProps {
    href: Route
    label: string
    roles?: ROLE[]
    displayAuth: "authenticated" | "any" | "unauthenticated" | "development"
    displayFunc?: (data: RootState['auth']) => boolean
}

interface Props extends NavbarButtonProps {
    authed: RootState['auth']['authenticated']
    user: RootState['auth']['user']
    authState: RootState['auth']
}

const NavbarButton = connector((props: Props) => {
    const setDisplayState = () => {
        if (props.displayFunc) {
            return props.displayFunc(props.authState)
        }
        if (props.displayAuth === "development") return process.env.NODE_ENV === "development"
        if (props.roles && Boolean(!props.user || props.roles.indexOf(props.user.role as ROLE) === -1)) {
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
    const [display, setDisplay] = useState<boolean>(setDisplayState())
    useEffect(() => {
        setDisplay(setDisplayState())
    }, [props.roles, props.authed])

    return (
        <Link href={props.href} className={clsx("flex justify-center items-center", display ? "block" : "hidden", props.displayAuth === "development" && "btn btn-error")}>
            {props.label}
        </Link>
    )
})


NavbarButton.displayName = "NavbarButton"


export default NavbarButton;
