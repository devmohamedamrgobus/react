
import {createContext, useState} from 'react'

export let CounterContext = createContext()

export default function CounterContextProvider(props){

    let [number,setNumber] = useState(0)

    function increment(){
        setNumber(number+1)
    }

    return <CounterContext.Provider value={{number,increment}}>
        {props.children}
    </CounterContext.Provider>

}