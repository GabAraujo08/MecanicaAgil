"use client";

import React, { useState } from 'react';
import './style.css';

const CadastroServico: React.FC = () => {
    const [servico, setServico] = useState({
        nome: '',
        descricao: '',
        categoria: '',
        valor: ''
    });
    const [mensagem, setMensagem] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setServico(prevServico => ({
            ...prevServico,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Configuração do body para a requisição
        const servicoData = {
            nome: servico.nome,
            descricao: servico.descricao,
            categoria: servico.categoria,
            valor: parseFloat(servico.valor) // Convertendo o valor para número
        };

        try {
            const response = await fetch('http://meuprojeto.link/mecanica-agil/api/servico/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(servicoData)
            });

            if (response.ok) {
                setMensagem("Serviço cadastrado com sucesso!");
                // Reseta o formulário após o cadastro bem-sucedido
                setServico({
                    nome: '',
                    descricao: '',
                    categoria: '',
                    valor: ''
                });
            } else {
                const errorData = await response.json();
                setMensagem(`Erro ao cadastrar serviço: ${errorData.message || 'Erro desconhecido'}`);
            }
        } catch (error) {
            console.error(error);
            setMensagem("Erro ao conectar ao servidor. Tente novamente.");
        }
    };

    return (
        <div className="cadastro-servico-container">
            <h2>Cadastro de Serviço</h2>
            {mensagem && <p className="mensagem">{mensagem}</p>}
            <form onSubmit={handleSubmit} className="form-cadastro-servico">
                <div className="form-group">
                    <label htmlFor="nome">Nome do Serviço</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={servico.nome}
                        onChange={handleChange}
                        required
                        maxLength={100}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={servico.descricao}
                        onChange={handleChange}
                        required
                        maxLength={80}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoria">Categoria</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={servico.categoria}
                        onChange={handleChange}
                        required
                        maxLength={50}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="valor">Valor do Serviço (R$)</label>
                    <input
                        type="number"
                        id="valor"
                        name="valor"
                        value={servico.valor}
                        onChange={handleChange}
                        required
                        min="0"
                        step="0.01"
                    />
                </div>
                <button type="submit" className="btn-submit">Cadastrar Serviço</button>
            </form>
        </div>
    );
};

export default CadastroServico;
