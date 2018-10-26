import { GET_PRODUCTS, PRODUCTS_LOADING } from '../actions/ActionTypes'

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {  
      case PRODUCTS_LOADING:    
        return {
          ...state,
          loading: true
        }

      case GET_PRODUCTS:
        return {
          ...state,
          items: [...action.payload],
          loading: false
        }
      default:
        return state
    }  
  }