import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import { auth } from '../../api/firebase'
import { connect } from 'react-redux'
import { setUser } from '../../redux/user/user.actions'
import CartIcon from '../../components/cart-icon'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropdown from '../cart-dropdown'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

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
            <CartIcon count={10}/>
        </nav> 
        <CartDropdown />
    </header>
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})


export default connect(mapStateToProps, { setUser })(Header)
