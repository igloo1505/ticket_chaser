"use client"
import clsx from 'clsx'
import React, { MouseEventHandler } from 'react'

type variants = "btn-neutral" | "btn-primary" | "btn-secondary" | "btn-accent" | "btn-info" | "btn-success" | "btn-warning" | "btn-error" | "btn-ghost" | "btn-link" | "btn-outline" | "btn-active" | "btn-disabled" | "glass" | "btn-lg" | "btn-md" | "btn-sm" | "btn-xs" | "btn-wide" | "btn-block" | "btn-circle" | "btn-square"


export interface ButtonProps {
    label: string
    onClick: MouseEventHandler<HTMLButtonElement>
    variants?: variants[]
    className?: string
}

const Button = ({label, onClick, variants, className}: ButtonProps) => {
    const _varients = variants ? variants.join(" ") : "btn-primary"
    return (
    <button className={clsx('btn', _varients, className && className)} onClick={onClick}>{label}</button>
    )
}



export default Button;
