"use client"

import React from "react"
import styles from './styles.module.css'

interface OutputAgeProps extends React.HtmlHTMLAttributes<HTMLElement> {
    name: string
}

export const Age: React.FC<OutputAgeProps> = ({ name, children , ...props }) => {
    
    return (
        <h1 id={name} className={styles.h1} { ...props }> {children} </h1>
    )
}