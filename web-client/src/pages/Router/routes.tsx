import React from 'react'
import Home from 'pages/Home'

export type RouteProps = {
  component: React.ReactNode
  path: string
}

export const routes: RouteProps[] = [
  {
    path: '/',
    component: <Home />
  }
]
