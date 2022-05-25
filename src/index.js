import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Counter } from "./components/Counter/Counter";
import { Provider } from 'react-redux'
import store from './store'
import { ReduxCounter } from './components/ReduxCounter/ReduxCounter'
import { ToDoList } from './features/todos/ToDoList/ToDoList'
// import { DataGetting } from './components/DataGetting/DataGetting'
/* eslint-disable */
import { worker } from './mocks/browser'
if (process.env.NODE_ENV === 'development') {
    worker.start().then(data => data)
}
/* eslint-enable */

const root = ReactDOM.createRoot(document.querySelector('#container'))
root.render(
    <Provider store={store}>
        <ReduxCounter />
        {/*<DataGetting />*/}
        <ToDoList />
    </Provider>
)
