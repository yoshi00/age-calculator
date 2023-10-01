"use client"

import React from "react"
import styles from './styles.module.css'

interface OutputAgeProps {
    number: number
    data: string
}

export const Age: React.FC<OutputAgeProps> = ({ number, data }) => {
    
    return (
        <div  className={styles.ageMain}>
            <h1 className={styles.h1}  >{number}</h1>
            <h2 className={styles.data} >{data}</h2>
        </div>
    )
}