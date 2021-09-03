import React from 'react'
import useField from '../hooks/input'
import register  from '../service/register'

const Register = () => {
    const name = useField('text')
    const password = useField('password')
    const account = useField('text')
    const handleRegister = async (event) => {
        event.preventDefault()
        const name_value = event.target.Name.value
        const account_value = event.target.Account.value
        const password_value = event.target.Password.value
        const user = {
            username: account_value,
            name: name_value,
            password: password_value
        }
        const res = await register.register(user)
        // 设置
        console.log(res);
    }
    return (
        <form onSubmit={handleRegister}>
        <div>
          name
          <input
            name='Name'
            type={name.type}
          value={name.value}
          onChange={name.onChange}  />
            </div>
        <div>
          account
          <input
            name='Account'
            type={account.type}
          value={account.value}
          onChange={account.onChange}  />
        </div>
        <div>
          password
          <input
            name='Password'
            type={password.type}
          value={password.value}
          onChange={password.onChange}  />
        </div>
        <button type="submit">confirm</button>
        </form>
)
}
export default Register