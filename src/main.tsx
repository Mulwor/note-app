import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './Lesson №9 - thunk/routes'
import { fetchUsers } from './Lesson №9 - thunk/users/model/fetch-users'
import { store } from './Lesson №9 - thunk/store'

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
