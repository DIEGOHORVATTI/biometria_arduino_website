import React from 'react'
import AppRoutes from 'components/Routes'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from 'styles/global-style'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <AppRoutes />
  </>
)

export default App
