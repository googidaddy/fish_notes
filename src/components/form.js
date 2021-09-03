import React, { useState } from 'react'
import LoginForm from './loginform'
import Register from './register'
const Form = () => {
    const [loginVisible, setLoginVisible] = useState(false)
    const [loginVisible1, setLoginVisible1] = useState(false)

        const hideWhenVisible = { display: loginVisible ? 'none' : '' }
        const showWhenVisible = { display: loginVisible ? '' : 'none' }
        const hideWhenVisible1 = { display: loginVisible1 ? 'none' : '' }
        const showWhenVisible1 = { display: loginVisible1 ? '' : 'none' }
        return (
            <div>
                <div>
                    <div style={hideWhenVisible}>
                        <button onClick={() => setLoginVisible(true)}>login</button>
                    </div>
                    <div style={showWhenVisible}>
                        <LoginForm />
                        <button onClick={() => setLoginVisible(false)}>cancel</button>
                    </div>
                </div>
                <div>
                    <div style={hideWhenVisible1}>
                        <button onClick={() => setLoginVisible1(true)}>Signup</button>
                    </div>
                    <div style={showWhenVisible1}>
                        <Register />
                        <button onClick={() => setLoginVisible1(false)}>cancel</button>
                    </div>
                </div>
            </div>
        )
    
}
export default Form