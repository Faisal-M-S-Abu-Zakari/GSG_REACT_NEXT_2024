import { createSlice } from "@reduxjs/toolkit";
import { taskCancelled } from './../../node_modules/@reduxjs/toolkit/src/listenerMiddleware/exceptions';


const taskSlice = createSlice({
    initialState:{
        task:''
    },
    name:'task',
    reducers:{
        getTask:(state , action)=>{
            state.task=action.payload
        }
    }
})