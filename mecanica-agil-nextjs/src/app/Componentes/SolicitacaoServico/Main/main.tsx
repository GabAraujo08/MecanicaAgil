import Image from 'next/image';
import './style.css';
import foto from '../../../assets/img/carrobatido.png';

const Main = () => {
    return (
        <main className="solicitar-servico">
            <div className="content-wrapper">
                <Image src={foto} className="carro" alt="Carro batido" width={500} height={300} />
                <div className="form-column">
                    <form className="service-form">
                        <label>Nome do serviço:</label>
                        <input type="text" className="form-input" placeholder="Digite aqui..." />
                        <select className="form-select">
                            <option value="">Selecione o tipo de serviço</option>
                            <option value="">a</option>
                            <option value="">b</option>
                            <option value="">c</option>
                        </select>
                        <label>Qual o motivo da sua solicitação?</label>
                        <textarea className="form-textarea" placeholder="Digite aqui..."></textarea>
                        <div className="submit-button">
                            <button type="submit" className="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        
            <div className="feedback-section">
                <p className="feedback-text">
                    Sentimos muito que você não encontrou o que precisava. Nos ajude a melhorar enviando sua sugestão!
                </p>
            </div>
        </main>
    );
}

export default Main;