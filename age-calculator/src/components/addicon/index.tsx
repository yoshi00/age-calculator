"use client"

import styles from './styles.module.css'

interface AddIconProps extends React.HTMLAttributes<HTMLImageElement> {}

export const AddIcon: React.FC<AddIconProps> = ({ ...props }) => {
    return (
        <img className={styles.imgIcon} src='/assets/image/icon.png' {...props}/>
    )
}