import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension'

import {cartReducer} from './reducers/cartReducers'
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer= combineReducers({
 cart: cartReducer,
 getProducts: getProductsReducer,
 getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cardFromLocalStorage =localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []

const INITIAL_STATE ={
    cart: {
        cartItems: cardFromLocalStorage
    }
}
 
const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;