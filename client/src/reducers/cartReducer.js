import { GET_CART_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT } from '../actions/ActionTypes';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CART_PRODUCTS: 
            return {
                items: [...state]
            }

        case ADD_PRODUCT:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
            
        case REMOVE_PRODUCT: 
            return {
                ...state,
                items: state.items.filter(
                    (item, index) => item._id !== action.payload)
            }        
    
        case INCREMENT_PRODUCT:
            return { 
                ...state, 
                items: state.items.map(
                    (item) => 
                    item._id === action.payload ? { ...item, quantity:item.quantity++ } : item
                )
             }
        
        case DECREMENT_PRODUCT:
             return { 
                 ...state, 
                 items: state.items.map(
                     (item) => 
                     item._id === action.payload ? { ...item, quantity:item.quantity-- } : item
                 )
            }
        default:
            return state;
    }
}