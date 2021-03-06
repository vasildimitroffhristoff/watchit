import { GET_PRODUCTS, PRODUCTS_LOADING } from './ActionTypes'
import axios from 'axios'

const compare = {
    'lowest': (a, b) => {
      if (a.price < b.price)
        return -1;
      if (a.price > b.price)
        return 1;
      return 0;
    },
    'highest': (a, b) => {
      if (a.price > b.price)
        return -1;
      if (a.price < b.price)
        return 1;
      return 0;
    }
}

export const getProducts = (range, filterType, tags) => dispatch => {
    dispatch(setProductLoading())

    axios.get('/api/products')
        .then(res => {
            let products = res.data;
            
            if (!!range) {
                products = products.filter(product => parseInt(product.price) <= parseInt(range))            
            }
            
            if (!!filterType) {
                products = products.sort(compare[filterType]);
            }

            if (!!tags && tags.length > 0) {
                products = products.filter(product => {
                    return tags.indexOf(product.category) > -1
                })
            }

            dispatch({
                    type: GET_PRODUCTS,
                    payload: products
            })
        })
        .catch(err => {
            dispatch({
                type: GET_PRODUCTS,
                payload: []
            })
        })
}

export const setProductLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
}