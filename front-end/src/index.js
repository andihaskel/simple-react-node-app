import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './state/reducers'

import App from './components/App';


const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
