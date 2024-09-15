import '../Integrantes/style.css'
import FotoGabriel from '../../../assets/img/gabriel-foto.svg'
import FotoGabrielly from '../../../assets/img/gabrielly-foto.svg'
import FotoThiago from '../../../assets/img/thiagohenry.svg'
import LogoGIT from '../../../assets/img/icon-github.svg'

const Integrantes = () => {
    return (
        <main>
            <section className='sectionIntegrantes'>
            
                <div className="colaborador">
                    <img src={FotoGabriel} alt=""/>
                    <h1>Gabriel Araujo</h1>
                    <a href="https://github.com/GabAraujo08" target="_blank"><img src={LogoGIT} alt=""/></a>
                    <h3><a href="https://github.com/Challenge-FrontEnd-FIAP/MecanicaAgil">Link repositório</a></h3>
                </div>
                <div className="colaborador">
                    <img src={FotoGabrielly} alt=""/>
                    <h1>Gabrielly Macedo</h1>
                    <a href="https://github.com/gabimaced0" target="_blank"><img src={LogoGIT} alt=""/></a>
                    <h3><a href="https://github.com/Challenge-FrontEnd-FIAP/MecanicaAgil">Link repositório</a></h3>
                </div>
                <div className="colaborador">
                    <img src={FotoThiago} alt=""/>
                    <h1>Thiago Henry Dias</h1>
                    <a href="https://github.com/lavithiluan" target="_blank"><img src={LogoGIT} alt=""/></a>
                    <h3><a href="https://github.com/Challenge-FrontEnd-FIAP/MecanicaAgil">Link repositório</a></h3>
                </div>
            </section>
        </main>
    )
}

export default Integrantes