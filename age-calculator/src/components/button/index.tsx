'use client'

import React, { ButtonHTMLAttributes, FC } from 'react'
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  )
}
