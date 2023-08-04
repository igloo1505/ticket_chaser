import landingPageData from '#/content/landingPage';
import Link from 'next/link';
import React from 'react'



interface HeroSectionProps {

}

const HeroSection = (props: HeroSectionProps) => {
    return (
        <div className="hero min-h-screen" id="hero-section-container" style={{ backgroundImage: 'url(/assets/stock/soccerStadium.jpg)' }}>
            <div className="heroOverlay bg-base-100 opacity-50" id="hero-section-container-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-base-content">
                    <h1 className="mb-5 text-5xl font-bold">{landingPageData.hero.title}</h1>
                    <p className="mb-5">{landingPageData.hero.body}</p>
                    <Link href="/login">
                        <button className="btn btn-primary">{landingPageData.hero.button}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


HeroSection.displayName = "HeroSection"


export default HeroSection;
