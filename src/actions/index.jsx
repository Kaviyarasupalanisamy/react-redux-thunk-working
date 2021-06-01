import axios from 'axios';

const TextCont = (id) => 
{
    id=id+1;
    return (dispatch, getState) => {
        console.log('current state:', getState());
        console.log('dispatch:',dispatch )
        axios
        .get("http://jsonplaceholder.typicode.com/todos/"+id)
        .then(function(response){
            dispatch(nextContent(response)) 
        });
    };
}

const nextContent = response =>
({
    type : "nextcontent",
    payload : {...response.data}
});

export default TextCont;