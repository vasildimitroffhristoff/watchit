import { GET_PRODUCTS, PRODUCTS_LOADING } from './ActionTypes'
import axios from 'axios'

export const getProducts = (range, filterType) => dispatch => {
    dispatch(setProductLoading())

    axios.get('/api/products')
        .then( res => {
            let products = res.data;
            
            if (!!range) {
                products = products.filter(product => product.price <= parseInt(range))            
            }
            
            if (!!filterType) {
                if (filterType === 'highest') {
                    products = products.sort((a, b) => {
                        return a.price > b.price
                    })                   
                } else if (filterType === 'lowest') {
                    products = products.sort((a, b) => {
                        return b.price < a.price
                    })
                } 
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