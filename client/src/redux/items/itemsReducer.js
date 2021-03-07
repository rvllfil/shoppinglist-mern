import {v1 as uuid} from 'uuid'
import { DELETE_ITEM, GET_ITEMS } from './itemsTypes'

const initialState = {
  items : [
  {id: uuid(), name: 'Egg'},
  {id: uuid(), name: 'Milk'},
  {id: uuid(), name: 'Steak'},
  {id: uuid(), name: 'Water'}
  ]
}

const itemsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS: 
      return {
        ...state
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  }
}

export default itemsReducer