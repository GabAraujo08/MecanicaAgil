"use client";

import React, { useEffect, useState } from 'react';
import './style.css';

interface Servico {
  id: number;
  idServico: number;
  nome: string;
  descricao: string;
  categoria: string;
  valor: number;
}

const TabelaServicos: React.FC = () => {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentServico, setCurrentServico] = useState<Servico | null>(null);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await fetch('http://localhost:8080/mecanica-agil/api/servico/all');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados dos serviços');
        }
        const data = await response.json();
        setServicos(data);
      } catch (error) {
        setError('Falha ao carregar os dados dos serviços');
        console.error(error);
      }
    };

    fetchServicos();
  }, []);

  const handleDelete = async (idServico: number) => {
    try {
      const response = await fetch(`http://localhost:8080/mecanica-agil/api/servico/delete/${idServico}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir o serviço');
      }
      setServicos(servicos.filter(servico => servico.idServico !== idServico));
    } catch (error) {
      setError('Falha ao excluir o serviço');
      console.error(error);
    }
  };

  const handleDownloadCSV = () => {
    const header = ["ID Serviço", "Nome do Serviço", "Descrição", "Categoria", "Valor"];
    const rows = servicos.map(servico => [
      servico.idServico,
      servico.nome,
      servico.descricao,
      servico.categoria,
      servico.valor.toFixed(2),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header, ...rows].map(row => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "servicos.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openEditModal = (servico: Servico) => {
    setCurrentServico(servico);
    setIsModalOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentServico) {
      setCurrentServico({
        ...currentServico,
        [e.target.name]: e.target.name === "valor" ? parseFloat(e.target.value) : e.target.value,
      });
    }
  };

  const handleEditSave = async () => {
    if (currentServico) {
      try {
        const response = await fetch(`http://localhost:8080/mecanica-agil/api/servico/update/${currentServico.idServico}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: currentServico.nome,
            descricao: currentServico.descricao,
            categoria: currentServico.categoria,
            valor: currentServico.valor,
          }),
        });
        if (!response.ok) {
          throw new Error('Erro ao atualizar o serviço');
        }

        setServicos(servicos.map(servico => servico.idServico === currentServico.idServico ? currentServico : servico));
        setIsModalOpen(false);
        setCurrentServico(null);
      } catch (error) {
        setError('Falha ao atualizar o serviço');
        console.error(error);
      }
    }
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
                <th>ID Serviço</th>
                <th>Nome do Serviço</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {servicos.map((servico) => (
                <tr key={servico.idServico}>
                  <td>{servico.idServico}</td>
                  <td>{servico.nome}</td>
                  <td>{servico.descricao}</td>
                  <td>{servico.categoria}</td>
                  <td>{`R$ ${servico.valor.toFixed(2)}`}</td>
                  <td>
                    <button onClick={() => openEditModal(servico)} className="edit-button">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(servico.idServico)} className="delete-button">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && currentServico && (
            <div className="modal">
              <div className="modal-content">
                <h3>Editar Serviço</h3>
                <label>
                  Nome:
                  <input
                    type="text"
                    name="nome"
                    value={currentServico.nome}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Descrição:
                  <input
                    type="text"
                    name="descricao"
                    value={currentServico.descricao}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Categoria:
                  <input
                    type="text"
                    name="categoria"
                    value={currentServico.categoria}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Valor:
                  <input
                    type="number"
                    name="valor"
                    value={currentServico.valor}
                    onChange={handleEditChange}
                  />
                </label>
                <button onClick={handleEditSave} className="save-button">
                  Salvar
                </button>
                <button onClick={() => setIsModalOpen(false)} className="cancel-button">
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TabelaServicos;
