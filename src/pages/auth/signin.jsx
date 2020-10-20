import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'
import { signInWithGoogle, auth } from '../../api/firebase'
import TextInput from '../../components/text-input'
import Button from '../../components/button'

const initialState = {
    email: '',
    password: '',
}

export default function SignIn() {

    const [ formData, setFormData ] = useState(initialState)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData

        try {
            await auth.signInWithEmailAndPassword(email,password)
        } catch (err) {
            console.error(`AUTH ERROR SIGNIN: ${err}`)
        }

        setFormData(initialState);
    }

    return <div className={styles['form-container']}>
        <h2>Already have account.</h2>
        <span>Sign in with your email and password.</span>
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

            <input type="submit"  value="Sign In"/>
            <Link className={styles['link']} to="/auth/signup">don't have account?</Link>
        </form>

        <h2>Use your Google account to sign in.</h2>
        <Button onClick={signInWithGoogle} label="Sign In With Google" />

    </div>
}
