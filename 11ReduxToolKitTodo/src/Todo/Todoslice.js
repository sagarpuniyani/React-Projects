import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
        id: 1,
        text: "Welcome to all "
    }]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo : (state , action ) => {
            state.todos.map((eachtodo) => {
                (eachtodo.id === action.payload.id 
                ? action.payload.text :eachtodo)
            })
        }
    }
})

export const {addTodo, removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer