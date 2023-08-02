import LandingCardSection from "#/components/pageSpecific/landing/cardSection";
import HeroSection from "#/components/pageSpecific/landing/hero";
import LandingScrollSection from "#/components/pageSpecific/landing/landingScrollSection";
import { NAVHEIGHT } from "#/utils/ui";
import "#/styles/landing.css"


const Home = async () => {
    /* const { user } = await validateOrRedirect(); */
    /* <AuthObserver user={user} /> */
    return (
        <div className={"landingScrollContainer"}>
            <LandingScrollSection>
                <HeroSection />
            </LandingScrollSection>
            <LandingScrollSection>
                <LandingCardSection />
            </LandingScrollSection>
        </div>
    )
};

export default Home;
