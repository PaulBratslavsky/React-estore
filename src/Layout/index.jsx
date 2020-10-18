import React from 'react'
import styles from './layout.module.scss';
import Header from '../components/header';

export default function Layout({children, user, setUser}) {
    return <div className={styles['main-layout']}>
        <Header user={user} setUser={setUser} />
        <div className={styles['main-content']}>{children}</div> 
        <footer>Footer</footer>      
    </div>
}
