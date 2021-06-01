import React from 'react';
import productReducer from "../Reducers/productreducer.jsx"
import {Provider} from 'react-redux';
import{ createStore,applyMiddleware } from 'redux';
import ProductReduxDescribe from "./ProductReduxDescribe.jsx";
import thunk from 'redux-thunk';

const store = createStore(productReducer,applyMiddleware(thunk));

class ProductRedux extends React.Component
{
    
    render()
    {
        return(
            <Provider store={store}>
                  <ProductReduxDescribe/>
                  <div>Note: This page has been created with Redux with thunk middleware for asynchronous requests</div>
            </Provider>
        )
    }
}
export default ProductRedux;