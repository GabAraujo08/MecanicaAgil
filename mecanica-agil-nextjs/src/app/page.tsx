import './App.css'
import Banner from './Componentes/PagPrincipal/Banner/Banner'
import Beneficios from './Componentes/PagPrincipal/Beneficios/Beneficios'
import Header from './Componentes/PagPrincipal/Header/Header'
import Diagnostico from './Componentes/PagPrincipal/Diagnostico/Diagnostico'
import Serviços from './Componentes/PagPrincipal/Serviços/Serviços'
import Depoimento from './Componentes/PagPrincipal/Depoimento/Depoimento'
import Footer from './Componentes/PagPrincipal/Footer/Footer'

function App() {
  return (
    <>
    <main className='global'>
    <Header />
    <Banner />
    <section className='margem'>
    <Beneficios />
    <Diagnostico />
    <Serviços />
    <Depoimento />
    <Footer />
    </section>
    </main>
    
    </>
  )
}

export default App
