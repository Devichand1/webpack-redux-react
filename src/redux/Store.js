import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import LoginReducer from './reducer'


const store = createStore(LoginReducer, applyMiddleware(thunk) )

export default store