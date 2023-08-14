import LoadingIndicator from '#/components/ui/loadingIndicator'
import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'


const LoadingPage = () => {
    return (
        <LoadingIndicator loading={true} />
    )
}


LoadingPage.displayName = "LoadingPage"


export default LoadingPage;
