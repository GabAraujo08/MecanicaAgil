"use client";

import { useState } from 'react';
import Image from 'next/image';
import logoMecanicaAgil from '../../../assets/img/logo.svg';
import vetorFormCadastro from '../../../assets/img/imgCarCadastro.svg';
import './style.css';

const FormCadastro = () => {
  // Estados para capturar valores do formulário
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState({ dia: '1', mes: '1', ano: '2000' });

  // Função para enviar os dados para a API
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Formatar a data de nascimento para o formato YYYY-MM-DD
    const formattedDate = `${dataNascimento.ano}-${dataNascimento.mes.padStart(2, '0')}-${dataNascimento.dia.padStart(2, '0')}`;

    // Objeto com os dados a serem enviados
    const userData = {
      nome,
      endereco,
      email,
      senha,
      dataNascimento: formattedDate,
      cpf,
      telefone,
    };

    try {
      const response = await fetch('http://localhost:8080/mecanica-agil/api/usuario/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      // Forçando o alert para verificar se ele é exibido
      alert('Tentando exibir o alert!');
  
      if (response.status === 201) {
        alert('Cadastro realizado com sucesso!');
      } else {
        const errorData = await response.json();
        console.error('Erro ao cadastrar usuário:', errorData);
        alert('Erro ao cadastrar: ' + (errorData.mensagem || 'Verifique os dados e tente novamente.'));
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição. Verifique sua conexão e tente novamente.');
    }
    
  };

  return (
    <div className="boxFormCadastro">
      <Image
        className="vetorFormCadastro"
        src={vetorFormCadastro}
        alt="Imagem do Carro"
      />
      <form className="formCadastro" onSubmit={handleSubmit}>
        <h1>CADASTRE-SE</h1>
        <p>Crie uma conta em nossa plataforma e acesse todos nossos recursos.</p>
        <section className="camposFormCadastro">
          <input
            placeholder="Digite seu nome..."
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            placeholder="Digite seu e-mail..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Digite sua senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <input
            placeholder="Nos informe seu endereço"
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
          <input
            placeholder="Digite seu CPF"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <input
            placeholder="Digite seu número de telefone"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </section>
        <label htmlFor="data-nascimento">Data de nascimento:</label>
        <div className="birthdate">
          <select
            id="dia"
            name="dia"
            value={dataNascimento.dia}
            onChange={(e) => setDataNascimento({ ...dataNascimento, dia: e.target.value })}
            required
          >
            {[...Array(31)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select
            id="mes"
            name="mes"
            value={dataNascimento.mes}
            onChange={(e) => setDataNascimento({ ...dataNascimento, mes: e.target.value })}
            required
          >
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select
            id="ano"
            name="ano"
            value={dataNascimento.ano}
            onChange={(e) => setDataNascimento({ ...dataNascimento, ano: e.target.value })}
            required
          >
            {[...Array(101)].map((_, i) => {
              const currentYear = new Date().getFullYear();
              return <option key={i} value={currentYear - i}>{currentYear - i}</option>;
            })}
          </select>
        </div>

        <button type="submit">Cadastrar-se</button>
        <p className="legendaFormCadastro">
          Caso já tenha uma conta, <u>clique aqui.</u>
        </p>
        <div className="logoFormCadastro">
          <Image
            src={logoMecanicaAgil}
            alt="Logo Mecânica Ágil"
          />
        </div>
      </form>
    </div>
  );
};

export default FormCadastro;
