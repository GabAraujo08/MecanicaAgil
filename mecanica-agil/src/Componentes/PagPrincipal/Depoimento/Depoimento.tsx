import '../Depoimento/style.css'
import ArrowLeft from '../../../assets/img/arrow-left.png'
import ArrowRight from '../../../assets/img/arrow-right.png'     
    
const Depoimento = () => {
        return (
            <section id="depoimentos" className="depoimentos">
                <i><img src={ArrowLeft} alt=""/></i>
                <div className="depoimento">
                    <h2>Conserto de ar-condicionado </h2>
                    <p>“Com certeza voltarei a usar o serviço, me ajudou muito quando eu estava sem saber o que fazer para
                        solucionar meu problema.”</p>
                    <h3>Gabriel Araujo</h3>
                </div>
                <div className="depoimento">
                    <h2>Direção hidraúlica</h2>
                    <p>“O serviço foi prestado com rapidez, indo direto ao problema, consegui achar um lugar para levar meu
                        carro e o preço cabe no bolso.”</p>
                    <h3>Thiago Henry Dias</h3>
                </div>
                <i><img src={ArrowRight} alt=""/></i>
            </section> 
        
        )
}

export default Depoimento;