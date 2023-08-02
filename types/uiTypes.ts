import { CATEGORY } from "@prisma/client"
import React, { ChangeEvent } from "react"


export interface ToastConfigType {
    variant?: "success" | "info" | "warn" | "error"
    content: string
    timeout?: number | null
    isOpen?: boolean
    title?: string
    toastId: string
    clickRedirect?: string
}

export interface ContainerProps<T> extends React.HTMLProps<T> { }

export interface InputBaseProps {
    onChange: (e: ChangeEvent) => void
    value: string | boolean
    name: string
    helperText?: string
}

export type Elevation = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | null | undefined

export const elevationMap: Partial<{ [k in "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"]: string }> = {
    100: "elevate-100",
    200: "elevate-200",
    300: "elevate-300",
    400: "elevate-400",
    500: "elevate-500",
    600: "elevate-600",
    700: "elevate-700",
    800: "elevate-800",
    900: "elevate-900"
}


export interface EventCardProps {
    title: string
    category: CATEGORY
    date: Date
    description: string
    image?: string
    tags?: string[]
}
