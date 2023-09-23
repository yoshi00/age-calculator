"use client"

import React from "react"
import styles from './styles.module.css'

interface OutputAgeProps {
    children: React.ReactNode;
    name: string;
}

export const Age: React.FC<OutputAgeProps> = ({ name, children }) => {
    
    return (
        <h1 id={name} className={styles.h1}>{children}</h1>
    )
}