import "./style.css";
import logoMecanicaAgil from "../../../assets/img/logo.svg"; 

const FormCadastro = () => {
  return (
    <form className="formCadastro" action="#" method="post">
      <h1>CADASTRE-SE</h1>

      <label htmlFor="nome">Nome Completo</label>
      <input type="text" id="nome" name="nome_completo" required />

      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" required />

      <label htmlFor="data-nascimento">Data de nascimento:</label>
      <div className="birthdate">
        <select id="dia" name="dia" required></select>
        <select id="mes" name="mes" required></select>
        <select id="ano" name="ano" required></select>
      </div>

      <div className="gender-options">
        <label>
          <input type="radio" name="genero" value="F" required /> F
        </label>
        <label>
          <input type="radio" name="genero" value="M" required /> M
        </label>
        <label>
          <input type="radio" name="genero" value="Outro" required /> Outro
        </label>
      </div>

      <button type="submit">Cadastra-se</button>

      <div className="logo">
        <img src={logoMecanicaAgil} alt="Logo Mecânica Ágil" />
        <div className="logo-text">MECÂNICA ÁGIL</div>
      </div>
    </form>
  );
};

export default FormCadastro;
