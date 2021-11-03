import React, { useState } from 'react'
import Button from '../generic/input/button/Button'
import Input from '../generic/input/Input'
import styles from './styles.module.css'

const Signin = ({changeRoute}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!email.trim() || !password.trim() || !emailRegex.test(email) || password.length < 8){
            if(!email.trim()) setEmailError(true)
            if(!password.trim()) setPasswordError(true)
            if(!emailRegex.test(email)) setEmailError(true)
            if(password.length < 8) setPasswordError(true)
            return
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Welcome Back</h1>
                <span>Don't miss your next opportunity, Sign in to stay updated on your professional world.</span>
            </div>
            <form className={styles.form}>
                <div className={styles.inputDiv}>
                    <Input type="email" value={email} setValue={setEmail} ifError={emailError} setIfError={setEmailError} placeholder="Enter a valid E-Mail"/>
                    <Input type="password" value={password} setValue={setPassword} ifError={passwordError} setIfError={setPasswordError} placeholder="Enter Password (minimum 8 characters)"/>
                </div>
                <Button onClick={onSubmit}>Sign in</Button>
            </form>
            <span className={styles.link}>Forgot password?</span>
            <div className={styles.changePage}>
                <span>New to LinkedIn?</span>
                <span className={styles.link} onClick={() => changeRoute(e => !e)}>Join now</span>
            </div>
        </div>
    )
}

export default Signin
