"use client";

import Image from 'next/image';
import { useState } from 'react';
import './style.css';
import Diag from '../../../assets/img/robo-image.jpeg';
import ReactMarkdown from 'react-markdown'; // Importa o ReactMarkdown

const Diagnostico = () => {
    const [diagnostico, setDiagnostico] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para lidar com a geração do diagnóstico
    const handleDiagnostico = async () => {
        const problemaElement = document.getElementById('problema') as HTMLTextAreaElement;
        const problema = problemaElement ? problemaElement.value : '';

        try {
            const response = await fetch('http://127.0.0.1:5000/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: problema }),
            });

            if (!response.ok) {
                throw new Error('Erro na requisição ao servidor');
            }

            const data = await response.json();
            // Aqui você pode formatar a resposta em Markdown
            const formattedResponse = `${data.response}`;
            setDiagnostico(formattedResponse);
            setError(null);
            setIsModalOpen(true); // Abre o modal ao receber a resposta
        } catch (err) {
            setError('Falha ao gerar o diagnóstico. Verifique a conexão com o servidor.');
            console.error(err);
        }
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="gerar-diagnostico">
            <h1>Qual problema você está enfrentando</h1>
            <div className="caixa-diagnostico">
                <div className="img-e-texto">
                    <Image src={Diag} alt="Robo Image" />
                    <p>
                        Experimente nosso modelo de inteligência artificial que analisa e identifica qual problema você está enfrentando.
                    </p>
                </div>
                <textarea
                    name="problema"
                    id="problema"
                    placeholder="Digite o seu problema..."
                ></textarea>
                <button
                    onClick={handleDiagnostico}
                    className="btn-gerar-diagnostico"
                >
                    Gerar Diagnóstico
                </button>
                {error && <p className="error">{error}</p>}
            </div>

            {/* Modal para exibir o diagnóstico */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Diagnóstico</h2>
                        <ReactMarkdown>{diagnostico}</ReactMarkdown> {/* Renderiza o conteúdo em Markdown */}
                        <button onClick={closeModal} className="btn-close-modal">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Diagnostico;
