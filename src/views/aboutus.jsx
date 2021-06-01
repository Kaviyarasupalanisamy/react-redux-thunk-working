import React from 'react';
import ReactDOM from 'react-dom';

class AboutUs extends React.Component
{
    constructor(props)
    {
      super(props);  
      this.state = {name:"Kaviyarasu - Click me to change the state"};
      console.log("constructor");
      this.updateFunction = this.updateFunction.bind(this);
    }
    updateFunction = () => {
        this.setState({ name: "Javascript learner"});
    }
    componentDidMount()
    {
        console.log("componentdidMount");
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("shouldComponentUpdate");
        console.log(this.state);
        console.log(nextState)
        return true;
    }
    componentDidUpdate(prevProps,prevState, snapshot)
    {
        console.log("componentDidUpdate");
        console.log(prevState);
        console.log("snapshot "+ snapshot);
    }
    getSnapshotBeforeUpdate(prevProp,prevState)
    {
        console.log("getSnapshotBeforeUpdate");
        console.log(prevState);
        return "2";
    }
    render()
    {
        console.log("render");
        return(<React.Fragment>
            <div onClick={this.updateFunction}>
               {this.state.name}
            </div>
            <div>Note: This Page has tested with Life-cycle methods (constructor, render, componentDidMount, shouldComponentUpdate,getSnapshotBeforeUpdate,componentDidUpdate) Check the console for outputs.</div>
            </React.Fragment>) 
    }
}
export default AboutUs;