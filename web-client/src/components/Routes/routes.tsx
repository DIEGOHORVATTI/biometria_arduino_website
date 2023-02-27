import React from 'react'
import Home from 'pages/Home'
import Login from 'components/Login'

export type RouteProps = {
  component: React.ReactNode
  path: string
}

export const routes: RouteProps[] = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/login',
    component: <Login />
  }
]
