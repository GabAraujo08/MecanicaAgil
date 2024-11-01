import Image from 'next/image';
import logoMecanicaAgil from '../../../assets/img/logo.svg';
import vetorFormCadastro from '../../../assets/img/imgCarCadastro.svg';
import './style.css';

const FormCadastro = () => {
  return (
    <div className="boxFormCadastro">
      <Image
        className="vetorFormCadastro"
        src={vetorFormCadastro}
        alt="Imagem do Carro"
       
      />
      <form className="formCadastro" action="#" method="post">
        <h1>CADASTRE-SE</h1>
        <p>Crie uma conta em nossa plataforma e acesse todos nossos recursos.</p>
        <section className="camposFormCadastro">
          <input placeholder="Digite seu nome..." type="text" id="nome" name="nome_completo" required />
          <input placeholder="Digite seu e-mail..." type="email" id="email" name="email" required />
          <input placeholder="Digite sua senha" type="password" id="senha" name="senha" required />
        </section>
        <label htmlFor="data-nascimento">Data de nascimento:</label>
        <div className="birthdate">
          <select id="dia" name="dia" required>
            {[...Array(31)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select id="mes" name="mes" required>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select id="ano" name="ano" required>
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
