import { ToastConfigType } from "#/types/uiTypes"
import Toast from "./toast"
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
// import { setDevelopmentState } from "#/actions/devActions";

// setDevelopmentState()

const connector = connect((state: RootState, props: any) => ({
    toasts: state.UI.toasts,
    props: props
}))

interface Props {
    toasts: ToastConfigType[]
}


export const ToastList = connector(({ toasts }: Props) => {
    const _toasts = [...toasts].reverse()
    return (
        <div className="z-[999] fixed bottom-4 right-4 flex flex-col justify-center items-center gap-4">
            {_toasts.map((t, i) => {
                return <Toast toast={t} key={`toast-item-${i}`} />
            })}
        </div>
    )
})

export default ToastList
