import { useContext } from "react" 
import {CounterContext} from '../Context/CounterContextProvider'
export default function Home() {


  let {number,increment} = useContext(CounterContext)
  return (
    <div>
        <h1>home count is : {number}</h1>
        <button onClick={increment}>increment</button>
    </div>
  )
}
