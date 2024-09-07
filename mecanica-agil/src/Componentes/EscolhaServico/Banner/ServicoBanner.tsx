import '../Banner/style.css'

const ServicoBanner = () => {
    return(
        <section className="banner">
            <article>
                <h1>Ar-condicionado</h1>
                <p>Aqui estão alguns serviços que disponibilizamos para ar-condicionado.</p>
            </article>

            <img src="../assets/img/ar-condicionado.svg" alt=""/>
            <article>
                <h1>Não achou o que precisa?</h1>
                <p><a href="">Clique aqui</a> para enviar uma sugestão de serviço.</p>
            </article>
        </section>


    );
}
export default ServicoBanner;