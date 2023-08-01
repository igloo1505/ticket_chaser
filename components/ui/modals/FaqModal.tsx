"use client"
import { Faq } from '@prisma/client'
import React from 'react'
import ModalWrapper from '../ModalWrapper'

import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { FaqFormData } from '#/state/initial/adminState';

const connector = connect((state: RootState, props: any) => ({
    faq: state.UI.modals.faq,
    props: props
}))


interface FaqModalProps {
    faq: Faq | FaqFormData | false
}


const ModalContent = ({ faq }: { faq: Faq | FaqFormData }) => {
    return (
        <div className={""}>{faq.title}</div>
    )

}

const FaqModal = connector(({ faq }: FaqModalProps) => {
    return (
        <ModalWrapper modalKey="faq">
            {faq && <ModalContent faq={faq} />}
        </ModalWrapper>
    )
})


FaqModal.displayName = "FaqModal"


export default FaqModal;
