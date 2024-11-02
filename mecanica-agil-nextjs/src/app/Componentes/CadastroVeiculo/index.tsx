"use client";

import React, { useState } from 'react';
import './style.css';

const CadastroVeiculo: React.FC = () => {
    const [veiculo, setVeiculo] = useState({
        marca: '',
        modelo: '',
        ano: '',
        placa: '',
        cor: '',
        kilometragem: '',
        proprietarioId: '', // Certifique-se de definir o ID do proprietário de forma adequada
        tipo: ''
    });
    const [mensagem, setMensagem] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVeiculo(prevVeiculo => ({
            ...prevVeiculo,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Configuração do body para a requisição
        const veiculoData = {
            marca: veiculo.marca,
            modelo: veiculo.modelo,
            ano: veiculo.ano,
            placa: veiculo.placa,
            cor: veiculo.cor,
            kilometragem: parseInt(veiculo.kilometragem), // Convertendo a kilometragem para número
            proprietarioId: parseInt(veiculo.proprietarioId), // Convertendo o ID do proprietário para número
            tipo: veiculo.tipo
        };

        try {
            const response = await fetch('http://localhost:8080/mecanica-agil/api/veiculo/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(veiculoData)
            });

            if (response.ok) {
                setMensagem("Veículo cadastrado com sucesso!");
                // Reseta o formulário após o cadastro bem-sucedido
                setVeiculo({
                    marca: '',
                    modelo: '',
                    ano: '',
                    placa: '',
                    cor: '',
                    kilometragem: '',
                    proprietarioId: '',
                    tipo: ''
                });
            } else {
                const errorData = await response.json();
                setMensagem(`Erro ao cadastrar veículo: ${errorData.message || 'Erro desconhecido'}`);
            }
        } catch (error) {
            setMensagem("Erro ao conectar ao servidor. Tente novamente.");
        }
    };

    return (
        <div className="cadastro-veiculo-container">
            <h2>Cadastro de Veículo</h2>
            {mensagem && <p className="mensagem">{mensagem}</p>}
            <form onSubmit={handleSubmit} className="form-cadastro-veiculo">
                <div className="form-group">
                    <label htmlFor="marca">Marca</label>
                    <input
                        type="text"
                        id="marca"
                        name="marca"
                        value={veiculo.marca}
                        onChange={handleChange}
                        required
                        maxLength={20}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="modelo">Modelo</label>
                    <input
                        type="text"
                        id="modelo"
                        name="modelo"
                        value={veiculo.modelo}
                        onChange={handleChange}
                        required
                        maxLength={50}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ano">Ano</label>
                    <input
                        type="text"
                        id="ano"
                        name="ano"
                        value={veiculo.ano}
                        onChange={handleChange}
                        required
                        maxLength={4}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="placa">Placa</label>
                    <input
                        type="text"
                        id="placa"
                        name="placa"
                        value={veiculo.placa}
                        onChange={handleChange}
                        required
                        maxLength={7}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cor">Cor</label>
                    <input
                        type="text"
                        id="cor"
                        name="cor"
                        value={veiculo.cor}
                        onChange={handleChange}
                        required
                        maxLength={30}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="kilometragem">Kilometragem</label>
                    <input
                        type="number"
                        id="kilometragem"
                        name="kilometragem"
                        value={veiculo.kilometragem}
                        onChange={handleChange}
                        required
                        min="0"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="proprietarioId">ID do Proprietário</label>
                    <input
                        type="number"
                        id="proprietarioId"
                        name="proprietarioId"
                        value={veiculo.proprietarioId}
                        onChange={handleChange}
                        required
                        min="1"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tipo">Tipo</label>
                    <input
                        type="text"
                        id="tipo"
                        name="tipo"
                        value={veiculo.tipo}
                        onChange={handleChange}
                        required
                        maxLength={20}
                    />
                </div>
                <button type="submit" className="btn-submit">Cadastrar Veículo</button>
            </form>
        </div>
    );
};

export default CadastroVeiculo;
