import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Singleproduct = () => {
  let [product,setProduct] =useState([])
  let {id} = useParams()
  useEffect(()=>{
    getproduct()
  },[])

  function getproduct(){
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      setProduct(res.data)
    })
  }

  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} />
        <p>{product.description}</p>
    </div>
  )
}

export default Singleproduct
