"use client"
import clsx from 'clsx'
import React, { useState } from 'react'
import {
    AiOutlineArrowsAlt
} from 'react-icons/ai'
import {
    PiArrowsOutLineHorizontalFill
} from 'react-icons/pi'
/* import SplitPane from 'react-split-pane' */


type SplitPageState = "half" | "left-full" | "right-full" | "right-modal"


interface SplitPageWrapperProps {
    left: React.ReactNode
    right: React.ReactNode
}

const SplitIndicatorIcon = ({ splitState, setSplitState }: { splitState: SplitPageState, setSplitState: (v: SplitPageState) => void }) => {
    console.log("splitState: ", splitState)
    if (splitState === "half") {
        return <AiOutlineArrowsAlt onClick={() => setSplitState("left-full")} className={"hidden md:block cursor-pointer"} />
    }

    if (splitState === "left-full") {
        return <PiArrowsOutLineHorizontalFill onClick={() => setSplitState("half")} className={"hidden md:block cursor-pointer"} />
    }
    return null
}

interface SectionProps {
    children: React.ReactNode
    hideOn?: SplitPageState[]
    splitState: SplitPageState
}

const SplitPageSection = ({ children, hideOn, splitState }: SectionProps) => {
    return (
        <div className={clsx("w-full h-full relative flex flex-col justify-center items-center gap-4", hideOn && hideOn.indexOf(splitState) >= 0 && "hidden")}>{children}</div>
    )

}


const SplitPageWrapper = ({ left, right }: SplitPageWrapperProps) => {
    const [splitState, setSplitState] = useState<SplitPageState>("half")
    return (
        <div className={clsx("w-full h-full px-6 grid py-6 min-h-[inherit]", splitState === "half" && "grid-cols-2", splitState === "left-full" && "grid-cols-1")}>
            <div className={""}>
                <SplitPageSection splitState={splitState}>
                    {left}
                    <div className={"absolute top-[16px] right-[16px]"}>
                        <SplitIndicatorIcon splitState={splitState} setSplitState={setSplitState} />
                    </div>
                </SplitPageSection>
            </div>
            <SplitPageSection splitState={splitState} hideOn={["left-full", "right-modal"]}>
                {right}
            </SplitPageSection>
        </div >
    )
}


SplitPageWrapper.displayName = "SplitPageWrapper"


export default SplitPageWrapper;
