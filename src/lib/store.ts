import {configureStore} from "@reduxjs/toolkit"
import { tasksReducer } from "../features/tasks.slice"


const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})

export default store;