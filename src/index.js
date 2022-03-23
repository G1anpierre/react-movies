import React from 'react'
import ReactDOM from 'react-dom'
import './fonts.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  search: '',
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLESEARCH':
      return {
        ...state,
        search: action.payload,
      }
    case 'FETCHDATA':
      console.log('enter REDUCER: ', action.payload)
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
)

const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
