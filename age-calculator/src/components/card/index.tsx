import React from 'react'
import './styles.css'
interface CardProps {
  age: number | null
  date: string
  style?: React.CSSProperties
}
export const Card: React.FC<CardProps> = ({ age, date, style, ...props }) => {
  return (
    <div className="card" style={style} {...props}>
      <span className="age-styles">{age === null ? '--' : age}</span>
      <span>{date}</span>
    </div>
  )
}
