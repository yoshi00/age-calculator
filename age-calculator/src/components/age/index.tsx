"use client"

import React from "react"
import './styles.css'

interface OutputAgeProps {
    number: number
    data: string
}

export const Age: React.FC<OutputAgeProps> = ({ number, data }) => {
    
    return (
        <div  className="ageMain">
            <h1 className="h1"  >{number}</h1>
            <h2 className="data" >{data}</h2>
        </div>
    )
}