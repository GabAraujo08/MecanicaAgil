import Image from 'next/image';
import './style.css'
import Diag from '../../../assets/img/robo-image.jpeg'

const Diagnostico = () => {
    return (
        <section className="gerar-diagnostico">
            <h1>Qual problema você está enfrentando</h1>
            <div className="caixa-diagnostico">
                <div className="img-e-texto">
                    <Image src={Diag} alt="Robo Image"/>
                    <p>
                        Experimente nosso modelo de inteligência artificial que analisa e identifica qual problema você está enfrentando
                    </p>
                </div>
                <textarea name="" id="" placeholder="Digite o seu problema..."></textarea>
                <p id="response"></p>
                </div>
        </section>
    );
}

export default Diagnostico