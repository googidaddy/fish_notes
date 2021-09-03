import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import userReducer from "./reducers/userReducer";
// reducer
const reducer = combineReducers({
    notes : noteReducer,
    filter: filterReducer,
    user: userReducer
    
})

// action
const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store
