import { createStore, combineReducers } from 'redux'
import primaryReducer from './reducers/primaryReducer'

const reducers = combineReducers({
  primaryReducer
})

const store = createStore(reducers)

export default store
