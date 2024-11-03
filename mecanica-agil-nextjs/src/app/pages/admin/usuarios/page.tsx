"use client";

import React, { useState } from 'react';
import TabelaUsuarios from '../../../Componentes/TabelaUsuarios';
import './style.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com a autenticação
  const handleAuthentication = () => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert("Usuário ou senha incorretos. Tente novamente.");
      setUsername('');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    // Renderiza o modal de autenticação se o usuário não estiver autenticado
    return (
      
      <div className="auth-modal">
        <h2>Autenticação Necessária</h2>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleAuthentication}>Entrar</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <TabelaUsuarios />
    </div>
  );
};

export default App;
