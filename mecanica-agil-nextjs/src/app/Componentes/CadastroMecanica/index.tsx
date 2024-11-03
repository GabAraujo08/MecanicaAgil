"use client";

import React, { useState } from 'react';
import './style.css';

const CadastroMecanica: React.FC = () => {
    const [mecanica, setMecanica] = useState({
        cnpjMecanica: '',
        nome: '',
        endereco: '',
        telefone: ''
    });
    const [mensagem, setMensagem] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setMecanica(prevMecanica => ({
            ...prevMecanica,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Configuração do body para a requisição
        const mecanicaData = {
            nome: mecanica.nome,
            endereco: mecanica.endereco,
            telefone: mecanica.telefone,
            cnpjMecanica: mecanica.cnpjMecanica
        };

        try {
            const response = await fetch('http://meuprojeto.link/mecanica-agil/api/mecanica/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mecanicaData)
            });

            if (response.ok) {
                setMensagem("Mecânica cadastrada com sucesso!");
                // Reseta o formulário após o cadastro bem-sucedido
                setMecanica({
                    cnpjMecanica: '',
                    nome: '',
                    endereco: '',
                    telefone: ''
                });
            } else {
                const errorData = await response.json();
                setMensagem(`Erro ao cadastrar mecânica: ${errorData.message || 'Erro desconhecido'}`);
            }
        } catch (error) {
            setMensagem("Erro ao conectar ao servidor. Tente novamente.");
        }
    };

    return (
        <div className="cadastro-mecanica-container">
            <h2>Cadastro de Mecânica</h2>
            {mensagem && <p className="mensagem">{mensagem}</p>}
            <form onSubmit={handleSubmit} className="form-cadastro-mecanica">
                <div className="form-group">
                    <label htmlFor="cnpjMecanica">CNPJ da Mecânica</label>
                    <input
                        type="text"
                        id="cnpjMecanica"
                        name="cnpjMecanica"
                        value={mecanica.cnpjMecanica}
                        onChange={handleChange}
                        required
                        maxLength={14}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nome">Nome da Mecânica</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={mecanica.nome}
                        onChange={handleChange}
                        required
                        maxLength={110}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endereco">Endereço</label>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        value={mecanica.endereco}
                        onChange={handleChange}
                        required
                        maxLength={200}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={mecanica.telefone}
                        onChange={handleChange}
                        required
                        maxLength={20}
                    />
                </div>
                <button type="submit" className="btn-submit">Cadastrar Mecânica</button>
            </form>
        </div>
    );
};

export default CadastroMecanica;
