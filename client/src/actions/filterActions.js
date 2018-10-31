import {
    FILTER_PRICE_RANGE, 
    SELECT_SORT_HIGHEST, 
    SELECT_SORT_LOWEST, 
    FILTER_BY_TAGS
} from './ActionTypes';

export const sortByPrice = val => dispatch => {
    switch (val) {
      case 'lowest':
          dispatch({
            type: SELECT_SORT_LOWEST,
            payload: 'lowest'
          })
          break;
          
      case 'highest':
          dispatch({
              type: SELECT_SORT_HIGHEST,
              payload: 'highest'
            })
            break;
            
      default: 
            dispatch({
                type: SELECT_SORT_LOWEST,
                payload: 'lowest'
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

  export const filterByTag = tags => dispatch => {
    dispatch({
        type: FILTER_BY_TAGS,
        payload: tags
    })
  }
  