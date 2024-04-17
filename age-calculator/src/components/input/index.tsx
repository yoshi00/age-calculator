'use client'

import React, { InputHTMLAttributes } from 'react'
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties
}

export const Input: React.FC<InputProps> = ({ style, ...props }) => {
  return <input className="input-age" style={style} {...props} />
}
