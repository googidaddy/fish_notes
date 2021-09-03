// 后端
import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getUserAll = async (user) => {
    const response = await axios.post(baseUrl,user)
    return response.data
}

const getAll = async () => {
    const response = await axios.get('http://localhost:3001')
    return response.data
}

const createNew = async (content) => {
    const response = await axios.post(baseUrl, content)
    return response.data;
}

export default {getAll,createNew, getUserAll}