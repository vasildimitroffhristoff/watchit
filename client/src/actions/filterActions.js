import {
    FILTER_PRICE_RANGE, 
    SELECT_SORT_HIGHEST, 
    SELECT_SORT_LOWEST } from './ActionTypes';

export const sortByPrice = val => dispatch => {
    switch (val) {
      case 0:
          dispatch({
            type: SELECT_SORT_LOWEST,
            payload: 'lowest'
          })
          break;
          
      case 1:
          dispatch({
              type: SELECT_SORT_HIGHEST,
              payload: 'highest'
            })
            break;
            
      default: 
            dispatch({
                type: SELECT_SORT_HIGHEST
            })
            break;
    }
  }

  export const filterPriceRange = range => dispatch => {
      dispatch({
          type: FILTER_PRICE_RANGE,
          payload: range
      })
  }
  