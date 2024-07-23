import {configureStore} from '@reduxjs/toolkit'

import counterReducer  from './counterSlice'
export let Store = configureStore({
    reducer:{
        counter:counterReducer
    }
}) 