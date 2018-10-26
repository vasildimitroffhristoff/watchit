import { GET_PRODUCTS, PRODUCTS_LOADING } from './ActionTypes'
import axios from 'axios'

export const getProducts = (range, filterType) => dispatch => {
    // console.log(range, filterType);
    dispatch(setProductLoading())

    axios.get('/api/products')
        .then( res => {
            let products = res.data;
            
            // // if(range.length > 0) {
            // products = products.filter(product => product.price < range)
            // // }

            // switch (filterType) {
            //     case 'highest': 
            //         products = products.sort((a, b) => {
            //             return a.price - b.price
            //         })
            //         break;

            //     case 'lowest':
            //         products = products.sort((a, b) => {
            //             return b.price - a.price
            //         })
            //         break;     
            
            //     default:
            //         return products;
            //         break;
            // }

            // console.log(products)

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