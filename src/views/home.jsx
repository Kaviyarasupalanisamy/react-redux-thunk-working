import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import simpleReducer from '../Reducers/simplereducer.jsx';
import { Provider } from 'react-redux';
import Counter from './counter.jsx';
import thunk from 'redux-thunk';


const store = createStore(simpleReducer,applyMiddleware(thunk));

class Home extends React.Component
{
    constructor(props)
    {
      super(props);
    }
    render(){
        return(<Provider store={store}> 
            <Counter/>
        </Provider>) 
    }
}

export default Home;