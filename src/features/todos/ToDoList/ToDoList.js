import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDodos, selectLoadingStatus, selectTodosArray } from '../../../reducers/todosReducer'

export const ToDoList = () => {
    const dispatch = useDispatch()
    const todosArray = useSelector(selectTodosArray)
    const loadingStatus = useSelector(selectLoadingStatus)
    console.log('array = ', todosArray)

    const list = todosArray.map((item, i) => <h3 key={i}>{item.text}</h3>)

    if (loadingStatus === 'loading') {
        return <h3>loading ....</h3>
    }

    return (
        <div>
            <button onClick={() => dispatch(fetchDodos())}>Open todos</button>
            {list}
        </div>
    )
}
