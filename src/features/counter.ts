import { Return } from "@ngneat/falso/lib/core/core";
import { createAction, createReducer} from "@reduxjs/toolkit";

type CounterState = {count:number};
type CounterAction = ReturnType<typeof increment> | ReturnType<typeof decrement> | ReturnType<typeof reset>

export const increment = createAction("INC", (amount: number)=>{
    return {
        payload: amount
    }
});

export const decrement = createAction("DEC", (amount: number)=>{
    return {
        payload: amount
    }
});


export const reset = createAction("RESET");

export const countReducer = createReducer({
    count: 0
}, (builder)=>{
    builder.addCase(increment, (state, action)=>{
        state.count++;
    });

    builder.addCase(decrement, (state, action)=>{
        state.count--;
    })

})


export const reducer = (state: CounterState, action:CounterAction )=>{
    if(action.type === increment.type){
        return {count: state.count +action.payload}
    }

    if(action.type === decrement.type){
        return {count: state.count = action.payload}
    }
}