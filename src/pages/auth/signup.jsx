import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'
import TextInput from '../../components/text-input'

const initialState = {
    email: '',
    password: '',
}

export default function SignIn() {

    const [ formData, setFormData ] = useState(initialState)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData, 'from form');
        setFormData(initialState);
    }

    return <div className={styles['form-container']}>
        <h2>Don't have account.</h2>
        <span>Create account with email and password.</span>
        <form className={styles['form']} onSubmit={handleFormSubmit}>
            <TextInput 
                type="email" 
                name="email"
                label="Email"
                value={formData.email} 
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                required
            />

            <TextInput 
                type="password" 
                name="password"
                label="Password"
                value={formData.password} 
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                required
            />

            <input type="submit"  value="Sign Up"/>
            <Link className={styles['link']} to="/auth/signin">Have account?</Link>
        </form>
    </div>
}
