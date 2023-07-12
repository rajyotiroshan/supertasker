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
  },
  extraReducers(builder) {
    builder.addCase('increment', () => {});
  },
});

