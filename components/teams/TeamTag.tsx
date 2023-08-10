import clsx from 'clsx'
import React from 'react'
import { BsFillXCircleFill } from 'react-icons/bs'


interface TeamTagProps {
    teamName: string
    itemChangeId?: string | number
    onRemove?: (itemChangeId: string | number) => void
    allowSelection?: boolean
    isSelected?: boolean
    toggleSelection?: (itemChangeId: string | number) => void
    noElevate?: boolean
}

const TeamTag = (props: TeamTagProps) => {
    return (
        <div className={clsx("w-fit h-fit px-6 py-4  border border-transparent rounded-2xl text-primary grid grid-cols-[auto_1fr] gap-2", props.noElevate ? "" : "elevate-200", props.isSelected && props.noElevate ? "border-primary" : "elevate-300 border-primary")}
        /*     style={{ */
        /*     borderRadius: "100%" */
        /* }} */
        >
            {Boolean(props.onRemove && props.itemChangeId) && <div style={{
                borderRadius: "100%",
                height: "32px",
                width: "32px"
            }}><BsFillXCircleFill /></div>}
            {Boolean(props.allowSelection && typeof props.itemChangeId !== "undefined" && props.toggleSelection) && (<div>
                <div className={clsx("toggle toggle-primary")} onClick={() => props.toggleSelection && typeof props.itemChangeId !== "undefined" && props.toggleSelection(props.itemChangeId)} />
            </div>)}
            <div className={"text-base-content"}>
                {props.teamName}
            </div>
        </div>
    )
}


TeamTag.displayName = "TeamTag"


export default TeamTag;
