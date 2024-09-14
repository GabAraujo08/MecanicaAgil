import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Login from './Login.tsx'
import App from './App.tsx'
import Cadastro from './Cadastro.tsx'
import EscolhaServicoPage from './EscolhaServicoPage.tsx'
import SolicitarServicoPage from './SolicitarServico.tsx'
import IntegrantesPage from './IntegrantesPage.tsx'

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