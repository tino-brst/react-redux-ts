import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.scss'

import { Provider as StoreProvider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
