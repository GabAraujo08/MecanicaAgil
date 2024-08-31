import '../Beneficios/style.css'
import Rapidez from '../../../assets/img/beneficio-rapidez.svg'
import Orcamento from '../../../assets/img/beneficio-orcamento.svg'
import Mecanico from '../../../assets/img/beneficio-mecanico.svg'
import Agendamento from '../../../assets/img/beneficio-agendamento.svg'

const Beneficios = () => {
    return (
        <section className="beneficios">
            <div className="beneficio">
                <img src={Rapidez} alt=""/>
                <p><b>Rapidez e praticidade</b> para seu problema.</p>
            </div>
            <div className="beneficio">
                <img src={Orcamento} alt=""/>
                <p>Seu <b>orçamento</b> sem sair de casa</p>
            </div>
            <div className="beneficio">
                <img src={Mecanico} alt=""/>
                <p>Acesso aos <b>melhores mecânicos</b> da sua região</p>
            </div>
            <div className="beneficio">
                <img src={Agendamento} alt=""/>
                <p><b>Agendamento</b> com apenas alguns cliques</p>
            </div>
        </section>

    );
}

export default Beneficios