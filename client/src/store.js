import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]
const persistedState = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : {}

const store = createStore(
    rootReducer,    
    initialState,
    // persistedState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.subscribe(()=>{
    localStorage.setItem('productsInCart', JSON.stringify(store.getState().cart))
})

export default store
