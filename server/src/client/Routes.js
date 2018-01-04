import React from 'react'

import HomePage from './pages/HomePage'
import UsersPage, { loadData } from './pages/UsersPage'

export default [
  {
    path: '/',
    exact: true,
    ...HomePage,
  },
  {
    path: '/users',
    ...UsersPage,
  },
]
