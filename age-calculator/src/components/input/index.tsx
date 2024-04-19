'use client'

import React, { ChangeEvent, KeyboardEvent, InputHTMLAttributes, useState } from 'react'
import './styles.css'

interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
  value?: string
  text: string
  placeholder: string
  style?: React.CSSProperties
}

export const Input: React.FC<InputProps> = ({ value, text, placeholder, onChange, onKeyDown, style, ...props }) => {
  return (
    <div>
      <input
        className="input-age"
        style={style}
        value={value}
        name={text}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...props}
      />
    </div>
  )
}
