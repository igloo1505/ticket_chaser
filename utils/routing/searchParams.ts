import { Faq } from "@prisma/client";
import { parseDateForQueryParams } from "../dates/dayjs";

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
    let search: Partial<FaqQueryType> = {}
    const url = new URL(`http://www.z.com/search?${query}`)
    /// @ts-ignore
    new URLSearchParams(url.searchParams).forEach((val, k) => search[k as keyof FaqQueryType] = val)
    return search
}



export interface EventsPageSearchParams {
    tags?: string[] | string
    byDate?: {
        from: string | undefined
        to: string | undefined
    }
    category?: string
    query?: string
    performer?: string
}

export const genEventSearchParams = (params: Partial<EventsPageSearchParams>) => {
    let urlParams = new URLSearchParams()
    console.log("params: ", params)
    Object.keys(params).map((k) => {
        /// @ts-ignore
        if (k !== "byDate" && params[k] && params[k] !== "") {
            /// @ts-ignore
            urlParams.set(k, params[k])
        }
        if (k === "byDate") {
            /// @ts-ignore
            // const byDateParams = parseDateForQueryParams(params[k])
            if (params.byDate?.from) {
                urlParams.set("from", params.byDate.from)
            }
            if (params.byDate?.to) {
                urlParams.set("to", params.byDate.to)
            }
        }
    })
    return urlParams.toString()
}
