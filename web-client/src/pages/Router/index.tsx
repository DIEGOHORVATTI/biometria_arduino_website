import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />
        })}
      </Routes>
    </Router>
  )
}

export default AppRoutes
