import React from 'react'
import styles from './button.module.scss'

export default function Button({onClick, label}) {
    return <button className={styles['button']} type="button" onClick={onClick}>{label}</button>
}
