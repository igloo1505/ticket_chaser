"use client"
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
/* import 'react-quill/dist/quill.snow.css'; */

interface Props {
    value: string
    onChange: (val: string) => void
}

const RichTextEditor = ({ value, onChange }: Props) => {
    return (
        <div className={"w-full h-full px-4 pb-4 relative text-base-content rounded-xl"} style={{
            /* border: "1px solid hsl(var(--bc) / var(--tw-border-opacity))" */
            border: "1px solid hsl(var(--bc) / 0.25)"
            /* borderColor: "hsl(var(--bc))" */
            /* borderColor: "hsl(var(--bc))" */
        }}>
            <ReactQuill theme="bubble" value={value} onChange={onChange} className={"h-full overflow-hidden rounded-xl"} />
        </div >
    )
}


export default RichTextEditor
