import React from 'react'
import LoadingIndicator from './loadingIndicator'



interface LoadingWrapperProps {
    loading: boolean
    children: React.ReactNode
}

const LoadingWrapper = (props: LoadingWrapperProps) => {
    return props.loading ? <LoadingIndicator loading={true} /> : props.children
}


LoadingWrapper.displayName = "LoadingWrapper"


export default LoadingWrapper;
