import React, { FC } from 'react'
import './styles.css'
type CardProps = {
  age: number | null
  date: string
  style?: React.CSSProperties
}
export const Card: FC<CardProps> = ({ age, date, style, ...props }) => {
  const formattedAge = age !== 0 ? `${age}` : '--'

  return (
    <div className="card" style={style} {...props}>
      <span className="age-styles">{formattedAge}</span>
      <span>{date}</span>
    </div>
  )
}
