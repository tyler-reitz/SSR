import React from 'react'

import Home from './components/Home'
import Users from './components/Users'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/users',
    component: Users,
  },
]
