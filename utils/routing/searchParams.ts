import { Faq } from "@prisma/client";
import { URLSearchParams } from "url";

interface FaqQueryType {
    page: string
    sortBy: keyof Faq
    sortOrder: "asc" | "desc"
}


export const getFaqTableSearchParams = (page: number, sortBy?: keyof Faq, sortOrder?: "asc" | "desc") => {
    let params = new URLSearchParams()
    page && params.set("pageNum", `${page}`)
    sortBy && params.set("sortBy", `${sortBy}`)
    sortOrder && params.set("sortOrder", `${sortOrder}`)
    return params.toString()
}

export const readFaqTablSearchParams = (query: string) => {
    console.log("query: ", query)
    let search: Partial<FaqQueryType> = {}
    // const url = new URL(`http://www.fake.com/${query}`)
    const url = new URL(`http://www.z.com/search?${query}`)
    console.log("url: ", url.searchParams.entries())
    // const d = new URLSearchParams(url.searchParams)
    // console.log("d.: ", d.toString())
    /// @ts-ignore
    new URLSearchParams(url.searchParams).forEach((val, k) => search[k as keyof FaqQueryType] = val)
    return search
}
