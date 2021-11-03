import React, { useState } from 'react'
import styles from "./input.module.css"

const Input = ({type, value, setValue, ifError, setIfError, placeholder}) => {
    const [focused, setFocused] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const onTyping = e => {
        if(ifError) setIfError(false)
        setValue(e.target.value)
    }
    return (
        <div className={styles.inputDiv} style={ifError ? {borderColor: "red"} : (focused ? {borderColor: "black"} : {})}>
            <input onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={styles.input} type={showPass ? "text" : type} value={value} placeholder={placeholder} onChange={onTyping}/>
            {type === "password" && 
            <span className={styles.passwordShow} onClick={() => setShowPass(!showPass)}>{showPass ? "Hide" : "Show"}</span>
            }
        </div>
    )
}

export default Input
