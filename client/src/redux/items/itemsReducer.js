import {v1 as uuid} from 'uuid'
import { DELETE_ITEM, GET_ITEMS, ADD_ITEM } from './itemsTypes'

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
    case ADD_ITEM:
      return{
        ...state,
        items: [action.payload, ...state.items]
      }
    default:
      return state;
  }
}

export default itemsReducer