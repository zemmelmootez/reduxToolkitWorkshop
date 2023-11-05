import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';



export const counterSlice=createSlice(
    {
        name:"counter",
        initialState:{
            counter:0
        } , 
        reducers:{
            increment:(state,action)=>{
                state.counter=state.counter+1
            },
            decrement:(state,action)=>{
                state.counter=state.counter-1
            },
            incrementByNumber:(state,action)=>{
                console.log(action)
                state.counter=state.counter+action.payload
            }
        }
    }
)

export const {increment,decrement,incrementByNumber}=counterSlice.actions
export default counterSlice.reducer
