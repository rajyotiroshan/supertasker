import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TaskState = {
  entities: Task[];
};

const initialState: TaskState = {
  entities: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.unshift(action.payload);
    },
    removeTask: (state) => state,
  },
  extraReducers(builder) {
    builder.addCase('increment', () => {});
  },
});

/**
 * Export
 */
//export reducers
export const tasksReducer = tasksSlice.reducer;

//export actions
export const {addTask, removeTask} = tasksSlice.actions

//export tasksSlice
export default tasksSlice;


