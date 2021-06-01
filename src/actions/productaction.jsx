
const productAction = () => 
{
    console.log("productAction");
    return (dispatch,getState)=>{
        setTimeout(()=>dispatch({type:"inc"}),2000)
    }
}; 

export default productAction;