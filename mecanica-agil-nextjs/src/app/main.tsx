import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Login from './Login'
import App from './page'
import Cadastro from './pages/Cadastro'
import EscolhaServicoPage from './EscolhaServicoPage'
import SolicitarServicoPage from './SolicitarServico'
import IntegrantesPage from './IntegrantesPage'

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
  },
  {
    path: "/solicitar-servico",
    element: <SolicitarServicoPage/>
  },
  {
    path: "/integrantes",
    element: <IntegrantesPage/>
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={_router} />
  </StrictMode>,
)