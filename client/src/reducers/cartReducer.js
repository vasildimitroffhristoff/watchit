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
                    item._id === action.payload 
                        ? { ...item, quantity:item.quantity++ } 
                        : item
                )
             }
        
        case DECREMENT_PRODUCT:
             return { 
                 ...state, 
                 items: state.items.map(
                     (item) => 
                     item._id === action.payload 
                        ? { ...item, quantity:item.quantity-- } 
                        : item
                 )
            }
        default:
            return state;
    }
}
/* 

case 'SOME_ACTION':
   return { 
       ...state, 
       contents: state.contents.map(
           (content, i) => i === 1 ? {...content, text: action.payload}
                                   : content
       )
    }

*/









/*
  case UPDATE_ITEM_UNITS:
            let existingItemIndex = findProductIndex(state, action.payload.id);
            if (state[existingItemIndex].units === 0 && action.payload.units === -1) {
                break;
            }
            state[existingItemIndex].units += action.payload.units;
            return state.concat([]);

*/


// {
    //   itemsInCart: [
    //     {
    //       name: 'Item One',
    //       price: 9.95,
    //       quantity: 1,
    //       subtotal: 9.95,
    //     },
    //     {
    //       name: 'Item Two',
    //       price: 10,
    //       quantity: 2,
    //       subtotal: 20,
    //     },
    //   ],
    //   total: 29.95,
    // }


    /* 
         return array.map( (item, index) => {
            if(index !== action.index) {
                return item;
            }
    ​
            return {
                ...item,
                ...action.item
            };    
        });
    */