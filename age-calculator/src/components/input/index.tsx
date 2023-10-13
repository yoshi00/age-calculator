"use client";

import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    style?: React.CSSProperties
}

export const Input: React.FC<InputProps> = ({ style, ...props }) => {

    

    return(
        <input className={styles.input}  style={style} {...props}/>    
    )
}