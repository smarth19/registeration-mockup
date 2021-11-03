import React, { useState } from 'react'
import Button from '../generic/input/button/Button'
import Input from '../generic/input/Input'
import styles from './styles.module.css'

const Signup = ({changeRoute}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [re_enterPass, setRe_enterPass] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [re_enterPassError, setRe_enterPassError] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!email.trim() || !password.trim() || !re_enterPass.trim() || !emailRegex.test(email) || password.length < 8 || re_enterPass.length < 8){
            if(!email.trim()) setEmailError(true)
            if(!password.trim()) setPasswordError(true)
            if(!re_enterPass.trim()) setRe_enterPassError(true)
            if(!emailRegex.test(email)) setEmailError(true)
            if(password.length < 8) setPasswordError(true)
            if(re_enterPass.length < 8) setRe_enterPassError(true)
            return
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Make the most of your professional life</h1>
            </div>
            <form className={styles.form}>
                <div className={styles.inputDiv}>
                    <Input type="email" value={email} setValue={setEmail} ifError={emailError} setIfError={setEmailError} placeholder="Enter a valid E-Mail"/>
                    <Input type="password" value={password} setValue={setPassword} ifError={passwordError} setIfError={setPasswordError} placeholder="Enter Password (minimum 8 characters)"/>
                    <Input type="password" value={re_enterPass} setValue={setRe_enterPass} ifError={re_enterPassError} setIfError={setRe_enterPassError} placeholder="Re-enter Password (minimum 8 characters)"/>
                </div>
                <Button onClick={onSubmit}>Sign up</Button>
            </form>
            <div className={styles.changePage}>
                <span>Already have an account?</span>
                <span className={styles.link} onClick={() => changeRoute(e => !e)}>Sign in</span>
            </div>
        </div>
    )
}

export default Signup
