import '../Serviços/styles.css'
import Ar from '../../../assets/img/ar-condicionado.svg'
import Painel from '../../../assets/img/painel.svg'
import Cambio from '../../../assets/img/cambio.svg'
import Airbag from '../../../assets/img/airbag.svg'
import Embreagem from '../../../assets/img/embreagem.svg'
import Filtro from '../../../assets/img/filtro.svg'


const Serviços = () => {
    return (
        <section id="servicos" className="servicos">
            <div className="caixa-servico">
                <div className="servico">
                    <img src= {Ar} alt=""/>
                    <p>AR-CONDICIONADO</p>
                </div>
                <div className="servico">
                    <img src={Painel} alt=""/>
                    <p>PAINEL </p>
                </div>
                <div className="servico">
                    <img src={Cambio} alt=""/>
                    <p>CÂMBIO</p>
                </div>
                <div className="servico">
                    <img src={Airbag} alt=""/>
                    <p>AIRBAG</p>
                </div>
                <div className="servico">
                    <img src={Embreagem} alt=""/>
                    <p>EMBREAGEM</p>
                </div>
                <div className="servico">
                    <img src={Filtro} alt=""/>
                    <p>FILTRO</p>
                </div>
            </div>

            <button>
                Ver mais
            </button>
        </section>

    );
}

export default Serviços;