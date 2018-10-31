import { 
    FILTER_PRICE_RANGE, 
    SELECT_SORT_HIGHEST, 
    SELECT_SORT_LOWEST,
    FILTER_BY_TAGS
   } from '../actions/ActionTypes';

const initialState = {
    priceRange: 1000,
    sortType: 'lowest',
    tags: []
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
        case FILTER_BY_TAGS:
            return {
                ...state,
                tags: [...action.payload]
            }      
            
        default:
            return state;
    }
}