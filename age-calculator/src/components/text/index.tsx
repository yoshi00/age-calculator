import React, { FC } from 'react'
import './styles.css'
type TextProps = {
  style?: React.CSSProperties
  children: React.ReactNode
}
export const Text: FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <text className="text" style={style} {...props}>
      {children}
    </text>
  )
}
