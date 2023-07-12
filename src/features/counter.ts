import { Return } from "@ngneat/falso/lib/core/core";
import { createAction, createReducer} from "@reduxjs/toolkit";

type CounterState = {count:number};
type CounterAction = ReturnType<typeof increment> | ReturnType<typeof decrement> | ReturnType<typeof reset>



const countReducer = createReducer({
    count: 0
}, (builder)=>{
    builder.addCase(increment, (state, action)=>{
        state.count++;
    });

    

})

const increment = createAction("INC", (amount: number)=>{
    return {
        payload: amount
    }
});

const decrement = createAction("DEC", (amount: number)=>{
    return {
        payload: amount
    }
});

const reset = createAction("RESET");

export const reducer = (state: CounterState, action:CounterAction )=>{
    if(action.type === increment.type){
        return {count: state.count +action.payload}
    }

    if(action.type === decrement.type){
        return {count: state.count = action.payload}
    }
}