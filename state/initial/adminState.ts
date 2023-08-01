import { Faq } from "@prisma/client"


export interface FaqFormData extends Pick<Faq, "body" | "title" | "subtitle"> {
    id?: number
}

interface AdminStateType {
    editing: {
        faq: FaqFormData
    }
}

const initialAdminState: AdminStateType = {
    editing: {
        faq: {
            title: "",
            subtitle: "",
            body: "<p><br></p>"
        }
    }
}


export default initialAdminState
