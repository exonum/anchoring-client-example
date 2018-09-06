import React from 'react'
import { hot } from 'react-hot-loader'
import Main from './components/Main/Main'
import { Provider } from 'react-redux'
import { store } from './store'
import './sagas/index'

import './styles/main.scss'

const App = () =>
  (<Provider store={store}>
    <Main />
  </Provider>)
export default hot(module)(App)
