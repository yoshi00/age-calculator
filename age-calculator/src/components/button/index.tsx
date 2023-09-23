"use client"

import { ButtonHTMLAttributes } from "react"
import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return(
     <button className={styles.button} {...props} >{children}</button>
    ) 
}