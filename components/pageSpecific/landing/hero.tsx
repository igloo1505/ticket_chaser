import landingPageData from '#/content/landingPage';
import Link from 'next/link';
import React from 'react'
import heroImage from '#/public/assets/stock/soccerStadium.jpg'
import Image from 'next/image';


interface HeroSectionProps {

}

const HeroSection = (props: HeroSectionProps) => {
    return (
        <div className="hero min-h-screen relative" id="hero-section-container">
            <div className="heroOverlay bg-base-100 opacity-50" id="hero-section-container-overlay"></div>
            <Image src={heroImage} alt="Hero Image" className={"w-full min-w-screen h-full min-h-full object-cover"} />
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-base-content">
                    <h1 className="mb-5 text-5xl font-bold">{landingPageData.hero.title}</h1>
                    <p className="mb-5">{landingPageData.hero.body}</p>
                    <Link href="/events">
                        <button className="btn btn-primary">{landingPageData.hero.button}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


HeroSection.displayName = "HeroSection"


export default HeroSection;
