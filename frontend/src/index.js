import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import { store } from 'store'
import { API_BASE_URL } from 'config/base'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'
import 'styles/core.scss'

axios.defaults.baseURL = API_BASE_URL

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register()
