import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Counter } from "./components/Counter/Counter";
import { Provider } from 'react-redux'
import store from './store'
import { ReduxCounter } from './components/ReduxCounter/ReduxCounter'

const root = ReactDOM.createRoot(document.querySelector('#container'))
root.render(
    <Provider store={store}>
        <ReduxCounter />
    </Provider>
)
