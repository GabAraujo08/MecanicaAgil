import './styles.css'
import Image from 'next/image';
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
                    <Image src={Ar} alt="Ar Condicionado" />
                    <a href="/escolha-servico"><p>AR-CONDICIONADO</p></a>
                </div>
                <div className="servico">
                    <Image src={Painel} alt="Painel" />
                    <p>PAINEL </p>
                </div>
                <div className="servico">
                    <Image src={Cambio} alt="Câmbio" />
                    <p>CÂMBIO</p>
                </div>
                <div className="servico">
                    <Image src={Airbag} alt="Airbag" />
                    <p>AIRBAG</p>
                </div>
                <div className="servico">
                    <Image src={Embreagem} alt="Embreagem" />
                    <p>EMBREAGEM</p>
                </div>
                <div className="servico">
                    <Image src={Filtro} alt="Filtro" />
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