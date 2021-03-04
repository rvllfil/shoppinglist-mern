import {v1 as uuid} from 'uuid'
import { GET_ITEMS } from './itemsTypes'

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
    default:
      return state;
  }
}

export default itemsReducer