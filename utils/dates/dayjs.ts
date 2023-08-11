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

export const formatDate = (date: Date, short?: boolean) => {
    const d = dayjs(date)
    return short ? d.format(dateFormatNoTime) : d.format(dateFormatWithTime)
}


export const daysInMilliseconds = (n: number) => 24 * 60 * 60 * 1000 * n



export const isSoon = (d: Date) => {
    const diff = new Date(d).valueOf() - Date.now()
    return diff > 0 && diff < daysInMilliseconds(3)
}


export const parseDateForQueryParams = (d: Date | Date[] | string | string[]): { from: string, to?: string } => {
    let d1;
    let d2;
    if (Array.isArray(d)) {
        d1 = dayjs(d[0])
        d2 = dayjs(d[d.length - 1])
    }
    if (!Array.isArray(d)) {
        d1 = dayjs(d)
        d2 = dayjs(d)
    }
    if (d2?.format("MM-D-YY") === "Invalid Date") {
        d2 = undefined
    }
    return {
        from: d1?.format("MM-D-YY") || "",
        to: d2 ? d2?.format("MM-D-YY") : undefined
    }
}


export default dayjs

