import dayjs from 'dayjs'
import { EventsPageSearchParams } from '../routing/searchParams'

var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)



export const dateFormatWithTime = "MM-D-YY [at] h:mm a"
export const dateFormatNoTime = "MM-D-YY"


export const getTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago"
}

export const startOfDay = () => {
    return dayjs().startOf("day")
}

export const dayOfWeek = () => {
    return dayjs().get('day')
}

export const getPreviousDays = (offset: number = 1) => {
    return startOfDay().subtract(offset, 'day')
}

export const formatDate = (date: Date | string, short?: boolean) => {
    const d = dayjs(date)
    return short ? d.format(dateFormatNoTime) : d.format(dateFormatWithTime)
}


export const daysInMilliseconds = (n: number) => 24 * 60 * 60 * 1000 * n



export const isSoon = (d: Date) => {
    const diff = new Date(d).valueOf() - Date.now()
    return diff > 0 && diff < daysInMilliseconds(3)
}


export const getQueryParamsFromDateCalInput = (params: URLSearchParams, d: Date | Date[] | string | string[]): URLSearchParams => {
    if (Array.isArray(d)) {
        params.set("from", formatDate(d[0], true))
        params.set("to", formatDate(d[d.length - 1], true))
        return params
    }
    if (!Array.isArray(d)) {
        params.set("from", formatDate(d, true))
        params.set("to", formatDate(d, true))
        return params
    }
    return params
}



export default dayjs

