"use client"
import { logout } from "#/actions/authActions"
import { setDevelopmentState } from "#/actions/devActions"
import Button from "#/components/ui/button"
import { useRouter } from 'next/navigation'


interface QuickActionButtonProps {
    label: string
    action: (router: ReturnType<typeof useRouter>) => void
    desc?: string
}

const actions: QuickActionButtonProps[] = [
    {
        label: "Set Development State",
        action: () => setDevelopmentState(),
        desc: "Set some random values for forms, toasts, notifications and whatnot just to save some time."
    },
    {
        label: "FAQ Stuff",
        action: (r) => r.push("/admin/legit/faq"),
        desc: "Set some random values for forms, toasts, notifications and whatnot just to save some time."
    },
]

interface QAButtonProps {
    item: QuickActionButtonProps
    router: ReturnType<typeof useRouter>
}

const QAButton = ({ item, router }: QAButtonProps) => {
    /* router.push("/admin/legit/faq") */
    return (
        <Button label={item.label} variants={["btn-lg", "btn-info"]} onClick={() => item.action(router)} />
    )
}

const QuickActions = () => {
    const router = useRouter()
    return (
        <div className={"flex flex-col gap-4 justify-center items-center w-full max-w-[min(calc(100vw-4rem),768px)]"}>
            <div className={"w-full gap-4"} style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
            }}>
                {actions.map((a, i) => <QAButton router={router} item={a} key={`quick-action-admin-${i}`} />)}
            </div>
            <div className={"w-full"}>
                <Button variants={["btn-lg", "btn-error"]} label="Logout" onClick={logout} className={"w-full"} />
            </div>
        </div>
    )
}

export default QuickActions
