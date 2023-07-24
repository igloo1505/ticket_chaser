import { toastConfigs } from "#/data/defaultToasts"
import { AccessType } from "#/types/AuthTypes"
import { ToastConfigType } from "#/types/uiTypes"
import { getCorsHeaders } from "#/utils/server/cors"
import { NextRequest, NextResponse } from "next/server"

export type ToastErrorTypes = "unauthenticated" | "tokenExpired" | "mustBeVerified" | "faqNotFound"



export interface ToastError extends ToastConfigType {
    restricted?: AccessType[]
}

export interface ConsoleError {
    msg: string
    restricted?: AccessType[]
}



export interface InternalError {
    consoleError?: ConsoleError
    toastErrorType?: ToastErrorTypes
    toastRestricted?: AccessType[]
    statusCode?: number
    currentRole: AccessType
}

interface ReturnedConsoleError extends ConsoleError {
    show: boolean
}


export class AppError {
    consoleError?: ReturnedConsoleError
    toastErrorType?: ToastErrorTypes
    toastError?: ToastError
    toastRestricted?: AccessType[]
    statusCode: number = 500
    showError: boolean = false
    currentRole: AccessType = false
    constructor(public props: InternalError) {
        this.handleRestriction()
    }
    handleRestriction() {
        if (this.consoleError) {
            if (Boolean(this.consoleError.restricted && this.consoleError.restricted.indexOf(this.currentRole) >= 0) || !this.consoleError.restricted) {
                this.consoleError.show = true
            }
        }

        if (this.toastErrorType) {
            if (Boolean(this.toastRestricted && this.toastRestricted.indexOf(this.currentRole) >= 0) || !this.toastRestricted) {
                this.toastError = toastConfigs[this.toastErrorType]
            }
        }
    }
    errorBody() {
        return {
            ...(this.consoleError && { consoleError: this.consoleError }),
            ...(this.toastError && { toastError: this.toastError }),
            showError: this.showError
        }

    }
    genResponse(responseBody: any = {}, req: NextRequest): NextResponse {
        let _res = new NextResponse(JSON.stringify({ ...responseBody, error: this.errorBody() }), getCorsHeaders(req, this.statusCode))
        return _res
    }
}
