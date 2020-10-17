import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

export default function Header() {
    return <header className={styles['header']}>
        <div className={styles['logo-container']}>
            <Link className={styles['logo']} to="/"><Logo /></Link>
        </div>
        <nav className={styles['links']}>
            <Link className={styles['link']} to="/shop">Shop</Link>
            <Link className={styles['link']} to="/contact">Contact</Link>
            <Link className={styles['link']} to="/auth/signin">Sign In</Link>
        </nav> 
    </header>
}