import React from 'react';
import ReactDOM from 'react-dom';
import CartIcon from './carticon.jsx';
import Shoppingbag from './shoppingbag.jsx';
import FooterContent from './footercontent.jsx';
import { connect } from 'react-redux';
import productAction from '../actions/productAction.jsx';



class ProductReduxDescribe extends React.Component
{
    constructor()
    {
        super();

    }
    
    render()
    {
        return(<React.Fragment>
        <br></br>
        <CartIcon count={this.props.productCount} updateFunc= {this.props.updateFunc}/>
        <br></br>
        <Shoppingbag count={this.props.productCount} updateFunc= {this.props.updateFunc}/>
        <br></br>
        <FooterContent count={this.props.productCount} updateFunc= {this.props.updateFunc}/>
        <br></br>
        
        </React.Fragment>)
    }
}
const mapStatetoProps = (state) =>
{
    return({productCount:state.productCount})
}
const mapDispatchtoProps = (dispatch) =>
{
    return({updateFunc:()=>dispatch(productAction())});
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProductReduxDescribe)