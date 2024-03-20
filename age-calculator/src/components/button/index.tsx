"use client"

import { ButtonHTMLAttributes } from "react"
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return(
     <button className="button" {...props} >{children}</button>
    ) 
}