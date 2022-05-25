import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import todosReducer from './reducers/todosReducer'
import { apiSlice } from './features/api/apiSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
