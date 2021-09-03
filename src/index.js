import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'



console.log(store.getState());
ReactDOM.render(
  // 组件共享使用store.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)