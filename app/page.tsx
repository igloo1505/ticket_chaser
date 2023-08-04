import LandingCardSection from "#/components/pageSpecific/landing/cardSection";
import HeroSection from "#/components/pageSpecific/landing/hero";
import LandingScrollSection from "#/components/pageSpecific/landing/landingScrollSection";
import { NAVHEIGHT } from "#/utils/ui";
import "#/styles/landing.css"


const Home = async () => {
    /* const { user } = await validateOrRedirect(); */
    /* <AuthObserver user={user} /> */
    return (
        <div className={"landingScrollContainer"} id="landing-scroll-snap-container">
            <LandingScrollSection section={1}>
                <HeroSection />
            </LandingScrollSection>
            <LandingScrollSection section={2}>
                <LandingCardSection />
            </LandingScrollSection>
        </div>
    )
};

export default Home;
