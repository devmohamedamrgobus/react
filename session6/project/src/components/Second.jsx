import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment } from '../Redux/counterSlice'

export default function Second() {
  let count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
    <h1>count is : {count}</h1>
    <button onClick={()=>dispatch(increment())}>increment</button>
</div>
  )
}
