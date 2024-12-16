
import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice';
// import todoReducer from '../app/store/todoReducer'


export const store = configureStore({
    reducer: todoReducer
})
