import { EventCardProps } from "#/types/uiTypes"
import { daysInMilliseconds } from "#/utils/dates/dayjs"


interface LandingPageData {
    hero: {
        title: string,
        body: string,
        button: string
    },
    featured: Required<EventCardProps>[]
}


const sampleFeaturedEvents: Required<EventCardProps>[] = [
    {
        title: "Some Event",
        description: "The Bears (lol jk) take on the 49'ers in the Superbowl.",
        date: new Date(Date.now() + daysInMilliseconds(5)),
        category: "Sports",
        image: "/assets/stock/baseballStadium.jpg",
        tags: ["tag1"]
    },
    {
        title: "Event Two",
        description: "Taylor Swift plays at the SummerFest grounds before going on a date with this handsome developer named Andrew.",
        date: new Date(Date.now() + daysInMilliseconds(1)),
        category: "Music",
        image: "/assets/stock/concert.jpg",
        tags: ["tag1", "tag1"]
    },
    {
        title: "Elon Musk gets beat up by Zuchurberg",
        description: "Watch two obscenely rich douchebags fight like girls for attention because society rewards people with the least principle.",
        date: new Date(Date.now() + daysInMilliseconds(14)),
        category: "Comedy",
        image: "/assets/stock/elonMusk.jpg",
        tags: ["tagggggg", "taggg"]
    },
]



const landingPageData: LandingPageData = {
    hero: {
        title: "Look here first",
        body: "Ullamcorper tortor curabitur pellentesque sit est laoreet dui placerat congue consequat quis condimentum lectus natoque ornare tortor platea tempus vitae est nullam arcu dapibus tempor dignissim egestas tempor felis. Arcu at curabitur donec urna cras in egestas vel lectus, id ut. Eu ante",
        button: "Get Started"
    },
    featured: sampleFeaturedEvents

}

export default landingPageData
