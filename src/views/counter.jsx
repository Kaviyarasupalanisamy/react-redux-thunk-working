import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TextCont from '../actions/index.jsx';
import "./style/style.css";

class Counter extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {count : 1};
    }
   
    render()
    {
        return(<React.Fragment>
            <div onClick={({id=this.props.id}) => {this.props.nextItems(id)}} className="NextCmt" style={{border:"1px solid green",backgroundColor:"green",color:"#FFF"}}>Click here for next Comment</div>
                <div style={{margin:"10px 0px 0px 0px",textTransform:"capitalize"}}>{this.props.title}</div><br></br>
                <div>Note: This page has tested with Redux( Actions, Action creator, reducer, createStore, provider, connect, mapStatetoProps, mapDispatchtoProps, Axios ) </div>
            </React.Fragment>
            )
    }
}

const mapStatetoProps = (state)=> ({ title:state.title,body:state.body,id:state.id }) ;
const mapDispatchToProps = (dispatch) => ({ nextItems: (id)=>dispatch(TextCont(id)) });
export default connect(mapStatetoProps,mapDispatchToProps)(Counter);