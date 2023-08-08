import React from 'react'
import { BsFillXCircleFill } from 'react-icons/bs'


interface TeamTagProps {
    teamName: string
    removeId?: string | number
    onRemove?: (removeId: string | number) => void
    allowSelection?: boolean
    isSelected?: boolean
}

const TeamTag = (props: TeamTagProps) => {
    return (
        <div className={"w-fit h-fit px-6 py-4 rounded-full elevate-400 text-primary"}>
            {props.onRemove && props.removeId && <div style={{
                borderRadius: "100%",
                height: "32px",
                width: "32px"
            }}><BsFillXCircleFill /></div>}
            {props.allowSelection && <div>
                <input className={"toggle"} />
            </div>}
            {props.teamName}
        </div>
    )
}


TeamTag.displayName = "TeamTag"


export default TeamTag;
