import {createSlice}  from '@reduxjs/toolkit'

const initialState  = {
    value:0
}
export let counterSlice = createSlice({
    name:"counter",
    initialState ,
    reducers:{
        increment:(state)=>{
            state.value += 1
        }
    }
})


export let {increment} = counterSlice.actions
export default counterSlice.reducer