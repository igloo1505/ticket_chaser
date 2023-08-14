import { MetadataRoute } from 'next'

const genPath = (p: string) => `${process.env.NEXT_PUBLIC_HOST}${p}`


const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: genPath(""),
            lastModified: new Date(),
        },
        {
            url: genPath("/events"),
            lastModified: new Date(),
        },
        {
            url: genPath("/login"),
            lastModified: new Date(),
        },
    ]
}


export default sitemap
