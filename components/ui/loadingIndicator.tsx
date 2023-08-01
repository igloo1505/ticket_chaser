"use client"
import clsx from 'clsx';
import React from 'react'
import { Bars } from 'react-loader-spinner'


interface LoadingIndicatorProps {
    loading: boolean
}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
    return (
        <div className={clsx('w-screen h-screen top-0 left-0 fixed flex flex-col gap-4 justify-center items-center z-[99999] overflow-hidden transition-all duration-300 bg-black bg-opacity-60', props.loading ? "scale-1" : "scale-0")}>
            <div className={'text-4xl'}>Loading</div>
            <Bars
                height="120"
                width="120"
                color="var(--primary-color)"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={props.loading}
            />
        </div>
    )
}


LoadingIndicator.displayName = "LoadingIndicator"


export default LoadingIndicator;
