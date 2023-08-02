"use client"
import TextInput from '#/components/forms/inputs/textInput';
import React, { ChangeEvent } from 'react'

import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import RichTextEditor from './richTextEditor';
import { setFaqData } from '#/state/slices/admin';
import { SubmitFaqData } from '#/actions/adminActions';
import Button from '#/components/ui/button';

const connector = connect((state: RootState, props: any) => ({
    data: state.admin.editing.faq,
    props: props
}))


interface FaqEditFormCardProps {
    data: RootState['admin']['editing']['faq']
}

const FaqEditFormCard = connector(({ data }: FaqEditFormCardProps) => {
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        store.dispatch(setFaqData({
            ...data,
            [target.name]: target.value
        }))
    }
    const handleBodyChange = (val: string) => {
        store.dispatch(setFaqData({
            ...data,
            body: val
        }))
    }

    const clearForm = () => {
        store.dispatch(setFaqData({
            title: "",
            subtitle: "",
            body: "<p><br></p>",
            id: undefined
        }))
    }

    return (
        <div className={"w-full pt-4 h-full max-h-full gap-4 grid grid-rows-[auto_1fr] @container"}>
            <div className={"w-full grid gap-4 grid-cols-1 @lg:grid-cols-2"}>
                <TextInput onChange={handleChange} name="title" label="Title" value={data.title}
                />
                <TextInput onChange={handleChange} name="subtitle" label="Subtitle (Optional)" value={data.subtitle}
                />
            </div>
            <RichTextEditor value={data.body} onChange={handleBodyChange} />
            <div className={"w-full flex flex-row justify-end items-center gap-4"}>
                <Button label="Clear" variants={["btn-error"]} onClick={clearForm} />
                <Button label="Submit" onClick={SubmitFaqData} />
            </div>
        </div>
    )
})


FaqEditFormCard.displayName = "FaqEditFormCard"


export default FaqEditFormCard;
