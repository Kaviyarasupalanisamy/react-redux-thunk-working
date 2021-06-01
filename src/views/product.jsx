import React from 'react';
import ReactDOM from 'react-dom';
import CartIcon from './carticon.jsx';
import Shoppingbag from './shoppingbag.jsx';
import FooterContent from './footercontent.jsx';

class Product extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={productCount:1};
        this.updateCount=this.updateCount.bind(this);
    }
    updateCount = ()=>
    {
        this.setState({productCount:this.state.productCount+1});
    }
    render()
    {
        return(<React.Fragment>
        <br></br>
        <CartIcon count={this.state.productCount} updateFunc= {this.updateCount}/>
        <br></br>
        <Shoppingbag count={this.state.productCount} updateFunc= {this.updateCount}/>
        <br></br>
        <FooterContent count={this.state.productCount} updateFunc= {this.updateCount}/>
        <br></br>
        <div>Note: This page has been tested with passing methods as props to child components</div>
        </React.Fragment>)
    }
}
export default Product;