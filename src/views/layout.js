import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './home.jsx';
import AboutUs from './aboutus.jsx';
import Navigation from './navigation.jsx';
import Product from './product.jsx';
import ProductRedux from "./productredux.jsx";
import ArrayMap from "./arraymap.jsx";

class Layout extends React.Component
{
    render()
    {
        return( 
            <Router>
                <Switch>
                  <Route exact path="/"> 
                    <Navigation/>
                    <Home /> 
                  </Route>
                  <Route exact path="/home">
                    <Navigation/>
                    <Home />
                  </Route>
                  <Route exact path="/aboutus">
                    <Navigation/>
                    <AboutUs />
                  </Route>
                  <Route exact path="/product">
                    <Navigation/>
                    <Product />
                  </Route>
                  <Route exact path="/productreduxdescribe">
                    <Navigation/>
                    <ProductRedux />
                  </Route>
                  <Route exact path="/arraymap">
                    <Navigation/>
                    <ArrayMap />
                  </Route>
              </Switch>
            </Router>
        )
    }
}
export default Layout;