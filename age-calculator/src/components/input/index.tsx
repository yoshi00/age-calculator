"use client";

import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    disable?: boolean
}

export const Input: React.FC<InputProps> = ({ disable, ...props }) => {

    

    return(
        <input style={ disable ? {border: '1px solid grey' } : {border: '1px solid purple'} } className={styles.input}  {...props}/>    
    )
}