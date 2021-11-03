import React, { useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'

const Registeration = () => {
    const [showSignupPage, setShowSignupPage] = useState(false)
    return (
        <>
        {showSignupPage ? <Signup changeRoute={setShowSignupPage}/> : <Signin changeRoute={setShowSignupPage}/>}
        </>
    )
}

export default Registeration

