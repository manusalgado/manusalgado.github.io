import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import {loadProducts} from './actionCreators'

store.dispatch(loadProducts())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

serviceWorker.unregister()
