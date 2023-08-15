import LandingCardSection from "#/components/pageSpecific/landing/cardSection";
import HeroSection from "#/components/pageSpecific/landing/hero";
import LandingScrollSection from "#/components/pageSpecific/landing/landingScrollSection";
import PageContentWrapper from "#/components/ui/pageContentWrapper";
import "#/styles/landing.css"


const Home = () => {
    return (
        <PageContentWrapper removePadding>
            <LandingScrollSection section={1}>
                <HeroSection />
            </LandingScrollSection>
            <LandingScrollSection section={2}>
                <LandingCardSection />
            </LandingScrollSection>
        </PageContentWrapper>
    )
};

export default Home;
