import React,{useState} from ".react";
function FetchApi(){
    const[data,setData]=useState([]);
    const apiGet=()=>{
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    };
    return(
        <div>
            myApi
            <button onClick={apiGet}>Fetch API</button>
            <pre>{json.stringify(data,null,2)}</pre>
        </div>
    );
}
export default FetchApi;