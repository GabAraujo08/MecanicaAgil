
import './App.css'
import ServicoBanner from './Componentes/EscolhaServico/Banner/ServicoBanner';
import ServicoFooter from './Componentes/EscolhaServico/Footer/ServicoFooter';
import ServicoHeader from './Componentes/EscolhaServico/Header/EscolhaServico';
import OpcaoServico from './Componentes/EscolhaServico/Main/Opcao';

function EscolhaServicoPage() {
    return (
        <main className='global'>
            <ServicoHeader />
            <ServicoBanner />
            <OpcaoServico />
        {/* <section className='margem'> */}
            <ServicoFooter />
        {/* </section> */}
        </main>
    )
}

export default EscolhaServicoPage
