import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'
import TextInput from '../../components/text-input'
import { auth, createUserProfileDocument } from '../../api/firebase'


const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export default function SignIn() {

    const [ formData, setFormData ] = useState(initialState)

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = formData;
        
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            setFormData({...formData, confirmPassword: ''})
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {displayName})
            setFormData(initialState);
        } catch (err) {
            console.error(`SIGN UP ERROR: ${err}`)
        }
    }

    return <div className={styles['form-container']}>
        <h2>Don't have account.</h2>
        <span>Create account with email and password.</span>
        <form className={styles['form']} onSubmit={handleFormSubmit}>
            <TextInput 
                type="text" 
                name="displayName"
                label="Display Name"
                value={formData.displayName} 
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                required
            />

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

            <TextInput 
                type="password" 
                name="confirmPassword"
                label="Confirm Password"
                value={formData.confirmPassword} 
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                required
            />

            <input type="submit"  value="Sign Up"/>
            <Link className={styles['link']} to="/auth/signin">have account?</Link>
        </form>
    </div>
}
