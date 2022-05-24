import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import todosReducer from './reducers/todosReducer'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
    },
})

export default store
