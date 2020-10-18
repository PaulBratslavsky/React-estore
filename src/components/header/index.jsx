import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import { auth } from '../../api/firebase'
import { connect } from 'react-redux'
import { setUser } from '../../redux/user/user.actions'

import {ReactComponent as Logo} from '../../assets/crown.svg'

function Header({user, setUser}) {
    function handleSignOut() {
        auth.signOut()
        setUser(null)
    }

    return <header className={styles['header']}>
        <div className={styles['logo-container']}>
            <Link className={styles['logo']} to="/"><Logo /></Link>
        </div>
        <nav className={styles['links']}>
            <Link className={styles['link']} to="/shop">Shop</Link>
            <Link className={styles['link']} to="/contact">Contact</Link>
            {   
                user !== null 
                ? <button className={styles['sign-out']} onClick={handleSignOut}>Sign Out</button>
                : <Link className={styles['link']} to="/auth/signin">Sign In</Link>
            }
        </nav> 
    </header>
}

const mapStateToProps = state => ({
    user: state.user.user
})


export default connect(mapStateToProps, { setUser })(Header)
