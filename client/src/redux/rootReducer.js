import { combineReducers } from 'redux'
import itemsReducer from './items/itemsReducer'

const rootReducer = combineReducers({
  items: itemsReducer
})

export default rootReducer
