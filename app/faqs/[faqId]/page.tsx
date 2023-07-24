import React from 'react'



interface SpecificFaqPageProps {
    params: {
        faqId: string
    }
}

const SpecificFaqPage = async ({ params: {
    faqId
} }: SpecificFaqPageProps) => {

    return (
        <div></div>
    )
}


SpecificFaqPage.displayName = "SpecificFaqPage"


export default SpecificFaqPage;
