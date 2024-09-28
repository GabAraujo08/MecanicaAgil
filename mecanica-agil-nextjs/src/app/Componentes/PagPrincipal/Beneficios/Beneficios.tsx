import Image from 'next/image';
import Rapidez from '../../../assets/img/beneficio-rapidez.svg';
import Orcamento from '../../../assets/img/beneficio-orcamento.svg';
import Mecanico from '../../../assets/img/beneficio-mecanico.svg';
import Agendamento from '../../../assets/img/beneficio-agendamento.svg';
import './style.css'; // Importando o CSS

const Beneficios: React.FC = () => {
    return (
        <section className="beneficios">
            <div className="beneficio">
                <Image src={Rapidez} alt="Rapidez e praticidade" />
                <p><b>Rapidez e praticidade</b> para seu problema.</p>
            </div>
            <div className="beneficio">
                <Image src={Orcamento} alt="Orçamento sem sair de casa" />
                <p>Seu <b>orçamento</b> sem sair de casa</p>
            </div>
            <div className="beneficio">
                <Image src={Mecanico} alt="Melhores mecânicos da região" />
                <p>Acesso aos <b>melhores mecânicos</b> da sua região</p>
            </div>
            <div className="beneficio">
                <Image src={Agendamento} alt="Agendamento com cliques" />
                <p><b>Agendamento</b> com apenas alguns cliques</p>
            </div>
        </section>
    );
}

export default Beneficios;