import React, { ChangeEvent } from "react"


export interface ToastConfigType {
    variant?: "success" | "info" | "warn" | "error"
    content: string
    timeout?: number | null
    isOpen?: boolean
    title?: string
}

export interface ContainerProps<T> extends React.HTMLProps<T> {}

export interface InputBaseProps {
    onChange: (e: ChangeEvent) => void
    value: string | boolean
    name: string
    helperText?: string
}
