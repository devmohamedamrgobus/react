import { useState } from "react";

const Products = ()=>{
    let [number,setNumber] = useState(0)
    return <>
        <h1> count is : {number} </h1>
        <button onClick={()=>setNumber(++number)} >increment</button>
        <button onClick={()=>setNumber(--number)} >decrement</button>
        <button onClick={()=>setNumber(0)} >rest</button>
    </>

    
}

export default Products;



