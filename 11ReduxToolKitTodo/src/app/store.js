import {configureStore} from '@reduxjs/toolkit';
import todoReducers from '../Todo/Todoslice'

export const store = configureStore({
    reducer : todoReducers
})