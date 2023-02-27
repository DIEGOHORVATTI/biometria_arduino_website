import React, { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavbarComponent } from 'components'
import { routes } from './routes'

const AppRoutes: React.FC = () => {
  console.clear()

  return (
    <StrictMode>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          {routes.map(({ path, component }, index) => (
            <Route key={index} path={path} element={component} />
          ))}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

export default AppRoutes
