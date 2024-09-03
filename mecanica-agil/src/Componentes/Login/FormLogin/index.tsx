import './style.css';
import logoMecanicaAgil from '../../../assets/img/logo.svg'; // Import the logoCarCare image
import iconGoogle from '../../../assets/img/iconGoogle.svg'; // Import the google icon
import iconFacebook from '../../../assets/img/iconFacebook.svg'; // Import the facebook icon
import iconTwitter from '../../../assets/img/iconTwitter.svg'; // Import the twitter icon

const FormLogin = () => {
    return (
        <div className="login">
            <h1>ENTRE AGORA</h1>
            {/* <p>Acesse sua conta utilizando seu e-mail e senha ou conecte-se com suas redes sociais.</p> */}
            <section>
                <button className="social-login google"><img src={iconGoogle} alt="" />Fazer login com o Google</button>
                <button className="social-login facebook"><img src={iconFacebook} alt="" /> Fazer login com o Facebook</button>
                <button className="social-login twitter"><img src={iconTwitter} alt="" /> Fazer login com o Twitter</button>
            </section>
            <div className="divisor">
                <hr />
                <span>OU</span>
                <hr />
            </div>
            <form>
                
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
                <img src={logoMecanicaAgil} alt="CarCare Logo" />
            </footer>
        </div> 
    );
}

export default FormLogin;

