import LandingCardSection from "#/components/pageSpecific/landing/cardSection";
import HeroSection from "#/components/pageSpecific/landing/hero";
import LandingScrollSection from "#/components/pageSpecific/landing/landingScrollSection";
import "#/styles/landing.css"


const Home = () => {
    return (
        <>
            <LandingScrollSection section={1}>
                <HeroSection />
            </LandingScrollSection>
            <LandingScrollSection section={2}>
                <LandingCardSection />
            </LandingScrollSection>
        </>
    )
};

export default Home;
