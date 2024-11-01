"use client";

import React, { useEffect, useState } from 'react';
import './style.css';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  dataNascimento: string;
  cpf: string;
}

const TabelaUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:8080/mecanica-agil/api/usuario/all');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados dos usuários');
        }
        const data = await response.json();

        const usuariosFormatados = data.map((usuario: any) => {
          const [year, month, day] = usuario.dataNascimento.split(' ')[0].split('-');
          return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            telefone: usuario.telefone,
            endereco: usuario.endereco,
            cpf: usuario.cpf,
            dataNascimento: `${day}-${month}-${year}`,
          };
        });

        setUsuarios(usuariosFormatados);
      } catch (error) {
        setError('Falha ao carregar os dados dos usuários');
        console.error(error);
      }
    };

    fetchUsuarios();
  }, []);

  // Função para converter os dados em CSV e baixar o arquivo
  const handleDownloadCSV = () => {
    const header = ["ID", "Nome", "Email", "Telefone", "Endereço", "CPF", "Data de Nascimento"];
    const rows = usuarios.map(usuario => [
      usuario.id,
      usuario.nome,
      usuario.email,
      usuario.telefone,
      usuario.endereco,
      usuario.cpf,
      usuario.dataNascimento,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header, ...rows].map(row => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "usuarios.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="table-container">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <button onClick={handleDownloadCSV} className="download-button">
            Baixar CSV
          </button>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>CPF</th>
                <th>Data de Nascimento</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.telefone}</td>
                  <td>{usuario.endereco}</td>
                  <td>{usuario.cpf}</td>
                  <td>{usuario.dataNascimento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TabelaUsuarios;
