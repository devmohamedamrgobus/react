import axios from "axios";
import { useEffect, useState } from "react";
const Todo = ()=>{
    let [data,setData] = useState([])

    useEffect(()=>{
        getTodos()
    },[])

    function getTodos(){
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    }

    return <>
        <ul>
           {data.map((todo)=> <li key={todo.id}>{todo.title}</li>)} 
        </ul>
    </>

    
}

export default Todo;