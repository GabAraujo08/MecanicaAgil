import './App.css'
import Banner from './Componentes/PagPrincipal/Banner/Banner'
import Beneficios from './Componentes/PagPrincipal/Beneficios/Beneficios'
import Header from './Componentes/PagPrincipal/Header/Header'
import Diagnostico from './Componentes/PagPrincipal/Diagnostico/Diagnostico'

function App() {
  return (
    <>
    <main className='global'>
    <Header />
    <Banner />
    <Beneficios />
    <Diagnostico />
    </main>
    
    </>
  )
}

export default App
