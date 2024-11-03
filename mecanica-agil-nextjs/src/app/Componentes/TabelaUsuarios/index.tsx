import React, { useEffect, useState } from 'react';
import './style.css';

interface Usuario {
  id: number;
  cpf: string;
  nome: string;
  endereco: string;
  email: string;
  senha: string;
  dataNascimento: string; // Manter como string para facilitar a manipulação
  telefone: string;
}

const TabelaUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('/api/proxy/usuario/all'); // Ajuste o endpoint se necessário
        if (!response.ok) {
          throw new Error('Erro ao buscar dados dos usuários');
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        setError('Falha ao carregar os dados dos usuários');
        console.error(error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleDelete = async (cpf: string) => {
    try {
      const response = await fetch(`http://meuprojeto.link/mecanica-agil/api/usuario/delete/${cpf}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir o usuário');
      }
      setUsuarios(usuarios.filter(usuario => usuario.cpf !== cpf));
    } catch (error) {
      setError('Falha ao excluir o usuário');
      console.error(error);
    }
  };

  const handleDownloadCSV = () => {
    const header = ["ID", "CPF", "Nome", "Endereço", "Email", "Senha", "Data de Nascimento", "Telefone"];
    const rows = usuarios.map(usuario => [
      usuario.id,
      usuario.cpf,
      usuario.nome,
      usuario.endereco,
      usuario.email,
      "******", // Senha oculta
      formatDate(usuario.dataNascimento),
      usuario.telefone,
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const openEditModal = (usuario: Usuario) => {
    setCurrentUsuario(usuario);
    setIsModalOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentUsuario) {
      setCurrentUsuario({
        ...currentUsuario,
        [e.target.name]: e.target.name === "dataNascimento" ? e.target.value : e.target.value,
      });
    }
  };

  const handleEditSave = async () => {
    if (currentUsuario) {
      try {
        const response = await fetch(`http://meuprojeto.link/mecanica-agil/api/usuario/update/${currentUsuario.cpf}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: currentUsuario.nome,
            endereco: currentUsuario.endereco,
            email: currentUsuario.email,
            senha: currentUsuario.senha,
            dataNascimento: currentUsuario.dataNascimento,
            telefone: currentUsuario.telefone,
          }),
        });
        if (!response.ok) {
          throw new Error('Erro ao atualizar o usuário');
        }

        setUsuarios(usuarios.map(usuario => usuario.cpf === currentUsuario.cpf ? currentUsuario : usuario));
        setIsModalOpen(false);
        setCurrentUsuario(null);
      } catch (error) {
        setError('Falha ao atualizar o usuário');
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
                <th>ID</th> {/* Coluna para ID */}
                <th>CPF</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Email</th>
                <th>Senha</th>
                <th>Data de Nascimento</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.cpf}>
                  <td>{usuario.id}</td> {/* Exibe o ID do usuário */}
                  <td>{usuario.cpf}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.endereco}</td>
                  <td>{usuario.email}</td>
                  <td>******</td> {/* Senha oculta */}
                  <td>{formatDate(usuario.dataNascimento)}</td>
                  <td>{usuario.telefone}</td>
                  <td>
                    <button onClick={() => openEditModal(usuario)} className="edit-button">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(usuario.cpf)} className="delete-button">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && currentUsuario && (
            <div className="modal">
              <div className="modal-content">
                <h3>Editar Usuário</h3>
                <label>
                  Nome:
                  <input
                    type="text"
                    name="nome"
                    value={currentUsuario.nome}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Endereço:
                  <input
                    type="text"
                    name="endereco"
                    value={currentUsuario.endereco}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={currentUsuario.email}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Senha:
                  <input
                    type="text"
                    name="senha"
                    value="******" // Exibir senha oculta
                    readOnly // Campo somente leitura
                  />
                </label>
                <label>
                  Data de Nascimento:
                  <input
                    type="date"
                    name="dataNascimento"
                    value={currentUsuario.dataNascimento}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Telefone:
                  <input
                    type="text"
                    name="telefone"
                    value={currentUsuario.telefone}
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

export default TabelaUsuarios;
