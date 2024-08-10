import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { fetchUsers } from './youtube/Lesson №9/users/model/fetch-users.ts'
import { store } from './youtube/Lesson №9/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './youtube/Lesson №9/routes.tsx'

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
