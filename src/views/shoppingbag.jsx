import React from 'react';
import ReactDOM from 'react-dom';

class ShoppingBag extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(<React.Fragment>
            <div style={{border:"1px solid yellow",margin:"15px"}}>
            <div>This is the shoppingBag Section</div>
            <div style={{fontSize:"22px",margin:"25px"}}>{this.props.count}</div>
            <button onClick={this.props.updateFunc} style={{color: "#000",height: "50px",backgroundColor:"#f2f2f2"}}>Click Here to update the Count</button>
            </div>
            </React.Fragment>)
    }
}
export default ShoppingBag;