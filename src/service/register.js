import axios from 'axios'

const baseUrl = 'http://localhost:3001/user'

// object
const register = async (user) => {
    const response = await axios.post(baseUrl, user)
    return response.data
}
export default {register}