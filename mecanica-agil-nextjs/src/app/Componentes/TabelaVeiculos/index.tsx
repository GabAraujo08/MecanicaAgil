"use client";

import React, { useEffect, useState } from 'react';
import './style.css';

interface Veiculo {
  placa: string;
  marca: string;
  modelo: string;
  ano: string;
  cor: string;
  kilometragem: number;
  tipo: string;
  proprietarioId: number; // Você pode ajustar isso dependendo de como você lida com proprietários
}

const TabelaVeiculos: React.FC = () => {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVeiculo, setCurrentVeiculo] = useState<Veiculo | null>(null);

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const response = await fetch('http://localhost:8080/mecanica-agil/api/veiculo/all');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados dos veículos');
        }
        const data = await response.json();
        setVeiculos(data);
      } catch (error) {
        setError('Falha ao carregar os dados dos veículos');
        console.error(error);
      }
    };

    fetchVeiculos();
  }, []);

  const handleDelete = async (placa: string) => {
    try {
      const response = await fetch(`http://localhost:8080/mecanica-agil/api/veiculo/delete/${placa}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir o veículo');
      }
      setVeiculos(veiculos.filter(veiculo => veiculo.placa !== placa));
    } catch (error) {
      setError('Falha ao excluir o veículo');
      console.error(error);
    }
  };

  const openEditModal = (veiculo: Veiculo) => {
    setCurrentVeiculo(veiculo);
    setIsModalOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentVeiculo) {
      setCurrentVeiculo({
        ...currentVeiculo,
        [e.target.name]: e.target.name === "kilometragem" ? parseInt(e.target.value) : e.target.value,
      });
    }
  };

  const handleEditSave = async () => {
    if (currentVeiculo) {
      try {
        const response = await fetch(`http://localhost:8080/mecanica-agil/api/veiculo/update/${currentVeiculo.placa}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Remover a placa do corpo da requisição
            marca: currentVeiculo.marca,
            modelo: currentVeiculo.modelo,
            ano: currentVeiculo.ano,
            cor: currentVeiculo.cor,
            kilometragem: currentVeiculo.kilometragem,
            tipo: currentVeiculo.tipo,
            proprietarioId: currentVeiculo.proprietarioId,
          }),
        });
        if (!response.ok) {
          throw new Error('Erro ao atualizar o veículo');
        }
  
        // Atualizar a lista de veículos sem alterar a placa
        setVeiculos(veiculos.map(veiculo => veiculo.placa === currentVeiculo.placa ? currentVeiculo : veiculo));
        setIsModalOpen(false);
        setCurrentVeiculo(null);
      } catch (error) {
        setError('Falha ao atualizar o veículo');
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
          <table className="user-table">
            <thead>
              <tr>
                <th>Placa</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Cor</th>
                <th>Kilometragem</th>
                <th>Tipo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {veiculos.map((veiculo) => (
                <tr key={veiculo.placa}>
                  <td>{veiculo.placa}</td>
                  <td>{veiculo.marca}</td>
                  <td>{veiculo.modelo}</td>
                  <td>{veiculo.ano}</td>
                  <td>{veiculo.cor}</td>
                  <td>{veiculo.kilometragem}</td>
                  <td>{veiculo.tipo}</td>
                  <td>
                    <button onClick={() => openEditModal(veiculo)} className="edit-button">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(veiculo.placa)} className="delete-button">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && currentVeiculo && (
            <div className="modal">
              <div className="modal-content">
                <h3>Editar Veículo</h3>
                <label>
                  Placa: {/* Exibir a placa no modal */}
                  <input
                    type="text"
                    name="placa"
                    value={currentVeiculo.placa}
                    disabled // A placa pode ser desabilitada para evitar alterações
                  />
                </label>
                <label>
                  Marca:
                  <input
                    type="text"
                    name="marca"
                    value={currentVeiculo.marca}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Modelo:
                  <input
                    type="text"
                    name="modelo"
                    value={currentVeiculo.modelo}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Ano:
                  <input
                    type="text"
                    name="ano"
                    value={currentVeiculo.ano}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Cor:
                  <input
                    type="text"
                    name="cor"
                    value={currentVeiculo.cor}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Kilometragem:
                  <input
                    type="number"
                    name="kilometragem"
                    value={currentVeiculo.kilometragem}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Tipo:
                  <input
                    type="text"
                    name="tipo"
                    value={currentVeiculo.tipo}
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

export default TabelaVeiculos;
