"use client"
import { updateRichTextString } from '#/utils/ui'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import "#/styles/richText.scss"


interface RichTextDisplayProps {
    __html: string
    className?: string
}

const RichTextDisplay = ({ __html, className }: RichTextDisplayProps) => {
    console.log("className: ", className)
    const [htmlString, setHtmlString] = useState(__html)
    useEffect(() => {
        setHtmlString(updateRichTextString(__html))
    }, [__html])
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} className={clsx("richTextContent", className && className)}></div>
    )
}


RichTextDisplay.displayName = "RichTextDisplay"


export default RichTextDisplay;
