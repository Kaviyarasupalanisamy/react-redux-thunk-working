import React from 'react';
import ReactDOM from 'react-dom';

class CartIcon extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(<React.Fragment>
            <div style={{border:"2px solid green",margin:"15px"}}>
            <div>This is the cartIcon Section</div>
            <div style={{fontSize:"22px",margin:"25px"}}>{this.props.count}</div>
            <button onClick={this.props.updateFunc} style={{color: "#000",height: "50px",backgroundColor:"#f2f2f2"}}>Click Here to update the Count</button>
            </div>
            </React.Fragment>)
    }
}
export default CartIcon;