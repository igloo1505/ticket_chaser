import clsx from "clsx"

interface Props {
    onClick: () => void
    color?: string
    open: boolean
}
const Overlay = (props: Props) => {
    return (
        <div onClick={props.onClick}
            className={clsx("bg-gray-800 bg-opacity-70 fixed h-screen w-screen top-0 left-0 bottom-0 right-0 z-[999]", props.open ? "scale-1" : "scale-0")}
            style={props.color ? { backgroundColor: props.color } : {}}
        ></div>
    )
}


export default Overlay
