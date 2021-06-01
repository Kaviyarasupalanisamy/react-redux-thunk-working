const initialState = { title:"Component mounted successfully!!",body:"",id:1}
const simpleReducer = (state=initialState, action) => {

    switch(action.type)
    {
        case "nextcontent":
        return {...state, ...action.payload};
        default:
        return state;
    }

}
export default simpleReducer;