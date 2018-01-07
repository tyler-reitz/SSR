import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import UsersPage, { loadData } from './pages/UsersPage'

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/users',
        ...UsersPage,
      },
    ]
  }
]
