import loginService from '../service/login'


const userReducer = (state = [], action) => {
    switch (action.type) {
        case "INIT_USER":
            return action.data
        case 'NEW_USER':
            return [...state, action.data]
        case 'LOGIN':
            return action.data
        default:
            return state
    }
}

export const init_user = () => {
    return dispatch => {
        dispatch({
            type: "INIT_USER",
            data: []
        })
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