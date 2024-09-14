import '../Main/style.css'
import foto from '../../../assets/img/carrobatido.png'

const Main = () => {
    return (
        <main className="solicitar-servico">
            <div className="content-wrapper">
                <img src={foto} className="carro" alt=""/>
            <div className="form-column">
                <form className="service-form">
                <label >Nome do serviço:</label>
                <input type="text" className="form-input" placeholder="Digite aqui..." />
                <label htmlFor="service-type" className="visually-hidden">Tipo de serviço</label>
                <select className="form-select">
                    <option value="">Selecione o tipo de serviço</option>
                </select>
                <label >Qual o motivo da sua solicitação ?</label>
                <textarea className="form-textarea" placeholder="Digite aqui..."></textarea>
                </form>
            </div>
            </div>
        
            <div className="feedback-section">
            <p className="feedback-text">
                Sentimos muito que você não encontrou o que precisava. Nos ajude a melhorar enviando sua sugestão!
            </p>
            <div className="submit-button">
                <button type="submit" className="submit">Enviar</button>
            </div>
            </div>
        </main>
    )
}

export default Main;