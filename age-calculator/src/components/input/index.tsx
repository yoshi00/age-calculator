"use client";

import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {

    return(
        <input  className={styles.input}  {...props}/>    
    )
}