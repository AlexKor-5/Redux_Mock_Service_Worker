import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, selectValue } from '../../reducers/counterReducer'

export const ReduxCounter = () => {
    const dispatch = useDispatch()
    const value = useSelector(selectValue)
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}
