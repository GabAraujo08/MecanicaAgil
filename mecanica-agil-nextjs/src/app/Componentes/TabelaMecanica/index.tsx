"use client";

import React, { useEffect, useState } from 'react';
import './style.css';

interface Mecanica {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  cnpjMecanica: string;
}

const TabelaMecanicas: React.FC = () => {
  const [mecanicas, setMecanicas] = useState<Mecanica[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMecanica, setCurrentMecanica] = useState<Mecanica | null>(null);

  useEffect(() => {
    const fetchMecanicas = async () => {
      try {
        const response = await fetch('/api/proxy/mecanica/all');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados das mecânicas');
        }
        const data = await response.json();
        setMecanicas(data);
      } catch (error) {
        setError('Falha ao carregar os dados das mecânicas');
        console.error(error);
      }
    };

    fetchMecanicas();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/proxy/mecanica/delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir a mecânica');
      }
      setMecanicas(mecanicas.filter(mecanica => mecanica.id !== id));
    } catch (error) {
      setError('Falha ao excluir a mecânica');
      console.error(error);
    }
  };

  const handleDownloadCSV = () => {
    const header = ["ID Mecânica", "Nome", "Endereço", "Telefone", "CNPJ"];
    const rows = mecanicas.map(mecanica => [
      mecanica.id,
      mecanica.nome,
      mecanica.endereco,
      mecanica.telefone,
      mecanica.cnpjMecanica,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header, ...rows].map(row => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "mecanicas.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openEditModal = (mecanica: Mecanica) => {
    setCurrentMecanica(mecanica);
    setIsModalOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentMecanica) {
      setCurrentMecanica({
        ...currentMecanica,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleEditSave = async () => {
    if (currentMecanica) {
      try {
        const response = await fetch(`/api/proxy/mecanica/update/${currentMecanica.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: currentMecanica.nome,
            endereco: currentMecanica.endereco,
            telefone: currentMecanica.telefone,
            cnpjMecanica: currentMecanica.cnpjMecanica,
          }),
        });
        if (!response.ok) {
          throw new Error('Erro ao atualizar a mecânica');
        }

        setMecanicas(mecanicas.map(mecanica => mecanica.id === currentMecanica.id ? currentMecanica : mecanica));
        setIsModalOpen(false);
        setCurrentMecanica(null);
      } catch (error) {
        setError('Falha ao atualizar a mecânica');
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
                <th>ID Mecânica</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>CNPJ</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {mecanicas.map((mecanica) => (
                <tr key={mecanica.id}>
                  <td>{mecanica.id}</td>
                  <td>{mecanica.nome}</td>
                  <td>{mecanica.endereco}</td>
                  <td>{mecanica.telefone}</td>
                  <td>{mecanica.cnpjMecanica}</td>
                  <td>
                    <button onClick={() => openEditModal(mecanica)} className="edit-button">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(mecanica.id)} className="delete-button">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && currentMecanica && (
            <div className="modal">
              <div className="modal-content">
                <h3>Editar Mecânica</h3>
                <label>
                  Nome:
                  <input
                    type="text"
                    name="nome"
                    value={currentMecanica.nome}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Endereço:
                  <input
                    type="text"
                    name="endereco"
                    value={currentMecanica.endereco}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Telefone:
                  <input
                    type="text"
                    name="telefone"
                    value={currentMecanica.telefone}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  CNPJ:
                  <input
                    type="text"
                    name="cnpjMecanica"
                    value={currentMecanica.cnpjMecanica}
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

export default TabelaMecanicas;
