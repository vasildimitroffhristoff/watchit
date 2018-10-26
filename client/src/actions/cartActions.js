import { GET_CART_PRODUCTS , ADD_PRODUCT, REMOVE_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT } from './ActionTypes';

export const getCartProducts = (product) => dispatch => {
    dispatch({
        type: GET_CART_PRODUCTS,
        payload: product
    })
} 

export const addProduct = (product) => dispatch => {
    dispatch({
        type: ADD_PRODUCT,
        payload: product
    })
} 

export const removeProduct = (id) => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT,
        payload: id
    })
}

export const decrementQty = (id) => dispatch => {
    dispatch({
        type: DECREMENT_PRODUCT,
        payload: id
    })
}
export const incrementQty = (id) => dispatch => {
    dispatch({
        type: INCREMENT_PRODUCT,
        payload: id
    })
}

// export const updateProduct = (id) => dispatch => {

// }

// export const updateProduct = (id) => dispatch => {
//     dispatch({
//         type: UPDATE_PRODUCT,
//         payload: id
//     })
// }