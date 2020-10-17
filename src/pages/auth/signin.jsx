import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'

const initialState = {
    email: '',
    password: '',
}

export default function SignIn() {

    const [ formData, setFormData ] = useState(initialState)
    console.log(formData)
    return <div className={styles['form-container']}>
        <h2>Already have account.</h2>
        <span>Sign in with your email and password.</span>
        <form className={styles['form']}>
            <label>Email</label>
            <input 
                className={styles['form-input']}
                type="email" 
                value={formData.email} 
                required
                autoComplete="off"
                name="email"
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
            />
            <label>Password</label>
            <input 
                className={styles['form-input']}
                type="password" 
                value={formData.password} 
                required
                autoComplete="off"
                name="password"
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
            />
            <Link to="/auth/signup">don't have account?</Link>
        </form>
    </div>
}
