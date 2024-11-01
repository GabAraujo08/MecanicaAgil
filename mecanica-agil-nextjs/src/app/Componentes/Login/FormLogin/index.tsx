import Image from 'next/image';
import logoMecanicaAgil from '../../../assets/img/logo.svg';
import iconGoogle from '../../../assets/img/iconGoogle.svg';
import iconFacebook from '../../../assets/img/iconFacebook.svg';
import iconTwitter from '../../../assets/img/iconTwitter.svg';
import './style.css';

const FormLogin = () => {
    return (
        <div className="login">
            <h1>ENTRE AGORA</h1>
            <section>
                <button className="social-login google">
                    <Image src={iconGoogle} alt="Google Icon"  />
                    Fazer login com o Google
                </button>
                <button className="social-login facebook">
                    <Image src={iconFacebook} alt="Facebook Icon"  />
                    Fazer login com o Facebook
                </button>
                <button className="social-login twitter">
                    <Image src={iconTwitter} alt="Twitter Icon"  />
                    Fazer login com o Twitter
                </button>
            </section>
            <div className="divisor">
                <hr />
                <span>OU</span>
                <hr />
            </div>
            <form className="formLogin">
                <input type="email" id="email" name="email" placeholder="E-mail" required />
                <input type="password" id="password" name="password" placeholder="Sua senha" required />
                <label htmlFor="remember">
                    <input type="checkbox" id="remember" name="remember" />
                    Lembrar de mim
                </label>
                <button type="submit">Entrar</button>
            </form>
            <a href="#">Esqueceu sua senha? <u>Clique aqui.</u></a>
            <footer>
                <Image src={logoMecanicaAgil} alt="CarCare Logo"  />
            </footer>
        </div>
    );
};

export default FormLogin;
