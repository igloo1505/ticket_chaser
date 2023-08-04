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
            <div className={"max-w-screen max-w-[calc(100vw-4rem)] py-8 gap-4"} style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 1fr))"
            }}>
                {landingPageData.featured.map((j, i) => <EventCard container={"h-full w-full"} item={j} key={`featured-event-${i}`} />)}
            </div>
        </div>
    )
}


LandingCardSection.displayName = "LandingCardSection"


export default LandingCardSection;
