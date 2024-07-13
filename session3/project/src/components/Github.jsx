import axios from "axios"
import { useState } from "react"
import {useForm} from 'react-hook-form'
const Github = ()=>{
    let [data,setData] = useState([])
    let {register,handleSubmit} = useForm()

    function sendData(request){
        axios.get(`https://api.github.com/users/${request.username}`).then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    }

    return <>
        <form onSubmit={handleSubmit(sendData)}>
            <input type="text" {...register('username')}  />
            <input type="submit" value="get"/>
        </form>


        <img src={data.avatar_url} />
    </>
    
}

export default Github