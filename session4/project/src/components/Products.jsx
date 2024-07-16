import axios from "axios";
import { useEffect, useState } from "react";
import Card from './Card'

const Products = ()=>{

    let [data,setData] = useState([])

    useEffect(()=>{
        getProducts()
    },[])

    function getProducts(){
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData(res.data)
        }) 
    }


    return <>

    <div className="row">
    { data.map((product)=> <Card id={product.id} image={product.image} title={product.title} price={product.price} />) }

    </div>
    </>
}

export default Products;