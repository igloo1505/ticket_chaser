"use client"
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
    return (
        <Button label={item.label} onClick={() => item.action(router)} />
    )
}

const QuickActions = () => {
    const router = useRouter()
    return (
        <div className={"w-full flex flex-row justify-center items-center gap-4"}>
            {actions.map((a, i) => <QAButton router={router} item={a} key={`quick-action-admin-${i}`} />)}
        </div>
    )
}

export default QuickActions
