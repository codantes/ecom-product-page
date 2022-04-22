import { configureStore, createSlice} from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';

const counterSlice = createSlice({
    name: 'counter',
    initialState : {counter: 0},
    reducers : {
        add(state, action) {
            state.counter++;
        },
        remove(state, action) {
            state.counter--;
        },
        setZero(state, action){
            state.counter = state.counter - state.counter;
        }
    }
})

export const actions = counterSlice.actions;

const store = configureStore({
    reducer : counterSlice.reducer
})

export default store;