import React from 'react'
import useField from '../hooks/input'
import {login} from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
const LoginForm = () => {
  const dispatch = useDispatch()
  const name = useField('text')
  const password = useField('password')
  const handleLogin = async (event) =>{
    event.preventDefault()
    const username = event.target.Username.value
    const password = event.target.Password.value
    const credentials = {
      username: username,
      password: password
    }
    event.target.Username.value = ''
    event.target.Password.value = ''
    dispatch(login(credentials))
  }
  
   return (
    <form onSubmit={handleLogin}>
        <div>
          username
          <input
            name='Username'
            type={name.type}
          value={name.value}
          onChange={name.onChange}  />
        </div>
        <div>
          password
          <input
            name='Password'
            type={password.type}
          value={password.value}
          onChange={password.onChange}  />
        </div>
        <button type="submit">Login</button>
        </form>
   )
    
}

export default LoginForm