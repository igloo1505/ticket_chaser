import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { isMobile } from "react-device-detect";

import store, { RootState } from "#/state/store";
import { connect } from "react-redux";
import { setEventsFilterData, setShowPanelContent } from "#/state/slices/form";
import clsx from "clsx";
import { formatDate } from "#/utils/dates/dayjs";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/soho-dark/theme.css"
import { setEventsDateFilter } from "#/actions/inputActions";

const connector = connect((state: RootState, props: any) => ({
    byDate: state.form.events.panel.filter.byDate,
    props: props,
}));

/* TODO: Definitely find better calendar picker without all this extra css*/
export const FilterCalendar = connector(({ byDate }) => {
    const handleChange = (e: CalendarChangeEvent) => {
        let val;
        if (typeof e.value === "string") val = new Date(e.value);
        if (Array.isArray(e.value)) val = e.value[0];
        store.dispatch(setEventsFilterData({ byDate: val }));
    };
    return (
        <Calendar
            touchUI={isMobile}
            value={byDate as string | null}
            stepMinute={15}
            onChange={handleChange}
            hourFormat="12"
        />
    );
});

interface ByDateFilterProps {
    byDate: RootState['form']['events']['panel']['filter']['byDate']
}


const ByDateFilter = connector(({ byDate }: ByDateFilterProps) => {
    const handleChange = (e: CalendarChangeEvent) => {
        let val = e.value
        if (typeof e.value === "string") val = new Date(e.value);
        if (!val) return
        setEventsDateFilter(val)
    };

    const formatDateValue = (d: typeof byDate) => {
        let val = []
        if (d?.from) {
            val.push(new Date(d.from))
        }
        if (d?.to) {
            val.push(new Date(d.to))
        }
        return val
    }

    return (
        <div className={clsx("w-full min-w-fit min-h-fit flex flex-col justify-start items-start gap-2")}>
            <span className="label-text">By Date</span>
            <Calendar
                touchUI={isMobile}
                value={formatDateValue(byDate)}
                stepMinute={15}
                onChange={handleChange}
                hourFormat="12"
                className={"w-full bg-base-100 text-base-content"}
                minDate={new Date()}
                selectionMode="range"
                inputStyle={{
                    backgroundColor: "var(--base-100)",
                    color: "var(--base-content)"
                }}
            />
        </div>
    );
});


ByDateFilter.displayName = "ByDateFilter";

export default ByDateFilter;



/* <input */
/*     type="text" */
/*     disabled={true} */
/*     placeholder={"Filter by Date"} */
/*     onClick={setContent} */
/*     className={clsx("input input-bordered w-full")} */
/*     onChange={() => { }} */
/*     value={byDate ? formatDate(byDate, true) : ""} */
/* /> */
