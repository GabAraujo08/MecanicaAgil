import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Login from './Login.tsx'
import App from './App.tsx'
import Cadastro from './Cadastro.tsx'
import EscolhaServicoPage from './EscolhaServicoPage.tsx'

const _router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/escolha-servico",
    element: <EscolhaServicoPage />
  }
  

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={_router} />
  </StrictMode>,
)