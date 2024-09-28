import './style.css'
import FotoAr from '../../../assets/img/ar-condicionado.svg'
    
const OpcaoServico = () => {
    return (
        <main>
            <section className="opcoes-servicos">
                <div className="servico">
                    <img src={FotoAr} alt=""/>
                    <p>COMPRESSOR</p>
                </div>
                <div className="servico">
                    <img src={FotoAr} alt=""/>
                    <p>HIGIENIZAÇÃO</p>
                </div>
                <div className="servico">
                    <img src={FotoAr} alt=""/>
                    <p>VENTOINHA</p>
                </div>
            </section>
        </main>
    )
}

export default OpcaoServico;
