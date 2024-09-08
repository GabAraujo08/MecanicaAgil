
import './App.css'
import ServicoBanner from './Componentes/EscolhaServico/Banner/ServicoBanner';
import ServicoHeader from './Componentes/EscolhaServico/Header/EscolhaServico';
import OpcaoServico from './Componentes/EscolhaServico/Main/Opcao';

function EscolhaServicoPage() {
    return (
        <main className='global'>
        <ServicoHeader />
        <ServicoBanner />
        <OpcaoServico />
        </main>

        
    )
}

export default EscolhaServicoPage
