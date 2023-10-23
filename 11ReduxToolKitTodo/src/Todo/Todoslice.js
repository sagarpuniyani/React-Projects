import { createSlice , nanoid } from '@reduxjs/toolkit';

const initialstate = {
    todo : [{
        id : 1 ,
        text : 'GM'
    }]
}

export const todoSlice = createSlice({
    name : 'todos',
    initialstate,
    reducers : {
        addTodo : (state , action ) => {

            const todo = {
            id : nanoid(),
            text : action.payload
            }
            state.todos.push(todo)
        } ,

        removeTodo : (state , action ) => {
            state.todo = state.todo.filter((prevtodo ) => prevtodo.id !== action.payload)
        },

    }
})

export const {addTodo , removeTodo } = todoSlice.actions;

export default todoSlice.reducer;