import '../Banner/style.css'
import FotoAr from '../../../assets/img/ar-condicionado.svg'

const ServicoBanner = () => {
    return(
        <section className="banner-servico">
            <article>
                <h1>Ar-condicionado</h1>
                <p>Aqui estão alguns serviços que disponibilizamos para ar-condicionado.</p>
            </article>

            <img src={FotoAr} alt=""/>
            <article>
                <h1>Não achou o que precisa?</h1>
                <p><a href="/solicitar-servico">Clique aqui</a> para enviar uma sugestão de serviço.</p>
            </article>
        </section>


    );
}
export default ServicoBanner;