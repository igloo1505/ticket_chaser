import { setDevelopmentState } from "#/actions/devActions"
import Button from "#/components/ui/button"


interface QuickActionButtonProps {
    label: string
    action: () => void
}

const actions: QuickActionButtonProps[] = [
    {
        label: "Set Development State",
        action: () => setDevelopmentState()
    }
]

const QuickActions = () => {
    return (
        <div>
            {actions.map((a, i) => <Button key={`quick-action-admin-${i}`} label={a.label} onClick={a.action} />)}
        </div>
    )
}

export default QuickActions
