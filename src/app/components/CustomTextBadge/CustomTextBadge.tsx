import React from 'react'
import styles from './styles.module.css'

const CustomTextBadge = ({text}: {text: string}) => {
  return (
    <span className={styles.badge}>{text}</span>
  )
}

export default CustomTextBadge