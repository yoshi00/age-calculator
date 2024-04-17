'use client'

import './styles.css'

interface AddIconProps extends React.HTMLAttributes<HTMLImageElement> {}

export const AddIcon: React.FC<AddIconProps> = ({ ...props }) => {
  return <img className="imgIcon" src="assets/image/icon-arrow.svg" alt="arrow button" {...props} />
}
