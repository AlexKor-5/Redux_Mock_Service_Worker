import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { ids: [], entries: {}, todosLoadingStatus: 'idle' }

export const fetchDodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('/todos')
    return response.json()
})

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        loadedTodos(state, action) {
            state = action.payload.reduce((accum, current) => {
                return (accum[current.id] = current)
            }, {})
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchDodos.pending, state => {
                state.todosLoadingStatus = 'loading'
            })
            .addCase(fetchDodos.fulfilled, (state, action) => {
                state.entries = action.payload.reduce((accum, current) => {
                    state.ids.push(current.id)
                    accum[current.id] = current
                    return accum
                }, {})
                state.todosLoadingStatus = 'succeeded'
            })
            .addCase(fetchDodos.rejected, state => {
                state.todosLoadingStatus = 'rejected'
            })
    },
})

export const { loadedTodos } = counterSlice.actions
export default counterSlice.reducer

export const selectTodosArray = state => Object.values(state.todos.entries)
export const selectLoadingStatus = state => state.todos.todosLoadingStatus
