import { 
    FILTER_PRICE_RANGE, 
    SELECT_SORT_HIGHEST, 
    SELECT_SORT_LOWEST 
   } from '../actions/ActionTypes';

const initialState = {
priceRange: 500,
sortType: 'highest'
}

export default function(state = initialState, action) {
switch (action.type) {
   case FILTER_PRICE_RANGE: 
       return {
           ...state,
           priceRange: action.payload
       }  
   case SELECT_SORT_HIGHEST: 
       return {
           ...state,
           sortType: action.payload
       }  
   
   case SELECT_SORT_LOWEST: 
       return {
           ...state,
           sortType: action.payload
       }      
    
   default:
       return state;
}
}