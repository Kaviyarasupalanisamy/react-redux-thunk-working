const initialProductState={productCount:1};
const productReducer = (state=initialProductState, action) =>
{
    if(action.type=="inc")
    {
        return {productCount:state.productCount+1}
    }
    else
    {
       return state;
    }
}

export default productReducer;