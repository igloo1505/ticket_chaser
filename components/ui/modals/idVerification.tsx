
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { setDrawerOpen } from '#/state/slices/ui';
import ModalWrapper from "../ModalWrapper"

const connector = connect((state: RootState, props: any) => ({
    modals: state.UI.modals,
    props: props
}))

const IdVerificationModal = () => {
        return (
            <ModalWrapper modalKey="idVerification">
            ID Verification Modal will go here... 
            </ModalWrapper>
        )
    }
