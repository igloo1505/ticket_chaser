import dayjs, { Dayjs } from 'dayjs'

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


export default dayjs

