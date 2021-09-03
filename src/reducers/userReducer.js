import loginService from '../service/login'


const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_USER':
            return [...state, action.data]
        case 'LOGIN':
            return action.data
        default:
            return state
    }
}


export const login = (data) => {
    return async dispatch => {
        const user = await loginService.login(data)
        dispatch({
            type: 'LOGIN',
            data: user
        })
        
    }
}
export default userReducer