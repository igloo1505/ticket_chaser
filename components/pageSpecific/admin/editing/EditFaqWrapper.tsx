"use client"
import SplitPageWrapper from '#/components/ui/splitPage';
import React from 'react'
import RichTextEditor from './richTextEditor';
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { setFaqData, setFaqFormFromItem } from '#/state/slices/admin';
import FaqEditFormCard from './FaqEditFormCard';
import FaqCard from '#/components/information/faqCard';
import { Faq } from '@prisma/client';


type FormDataType = RootState['admin']['editing']['faq']

const connector = connect((state: RootState, props: any) => ({
    faq: state.admin.editing.faq,
    props: props
}))


const SplitLeft = () => {
    return (
        <FaqEditFormCard />
    )
}

const SplitRight = connector(({ faq }: { faq: RootState['admin']['editing']['faq'] }) => {
    return (
        <div className={"w-full px-6 h-full flex justify-center items-center"}>
            <FaqCard faq={faq} initialOpen={true} />
        </div>
    )
})


const EditFaqWrapper = ({ item }: { item?: Faq }) => {
    if (item) {
        store.dispatch(setFaqFormFromItem(item))
    }
    return (
        <SplitPageWrapper left={<SplitLeft />} right={<SplitRight />} />
    )

}


EditFaqWrapper.displayName = "EditFaqWrapper"


export default EditFaqWrapper;
