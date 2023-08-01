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
        <div className={"w-full h-full px-4 pb-4 relative bg-base-200 text-base-content"}>
            <ReactQuill theme="bubble" value={value} onChange={onChange} className={"h-full overflow-hidden"} />
        </div>
    )
}


export default RichTextEditor
