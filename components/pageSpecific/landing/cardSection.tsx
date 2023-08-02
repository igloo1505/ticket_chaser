import EventCard from '#/components/ui/cards/EventCard';
import landingPageData from '#/content/landingPage';
import { NAVHEIGHT } from '#/utils/ui';
import clsx from 'clsx';
import React from 'react'



interface LandingCardSectionProps {

}

const LandingCardSection = (props: LandingCardSectionProps) => {
    return (
        <div className={"w-full h-full flex justify-center items-center"}>
            <div className={"h-fit  hidden xl:grid grid-cols-3 gap-4"}>
                {landingPageData.featured.map((j, i) => <EventCard item={j} key={`featured-event-${i}`} />)}
            </div>
            <div className={"w-96 py-8 md:w-[48rem] xl:hidden carousel"}>
                {landingPageData.featured.map((j, i) => <EventCard container={"carousel-item h-full w-full md:w-1/2"} item={j} key={`featured-event-${i}`} />)}
            </div>
        </div>
    )
}


LandingCardSection.displayName = "LandingCardSection"


export default LandingCardSection;
