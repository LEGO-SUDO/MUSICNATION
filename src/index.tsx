import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import UserService from './services/UserService'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const renderApp = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
// const renderApp = () =>
//   ReactDOM.render(
//     <App />,
//     // </Provider>,
//     document.getElementById('app')
//   )
UserService.initKeycloak(renderApp)
// //  <Provider store={store}>
