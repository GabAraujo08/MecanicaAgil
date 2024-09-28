import './style.css';
import Logo from '../../../assets/img/logo.svg';

const ServicoHeader = () => {
    return (
        <header>
        <nav>
            <img src= {Logo} alt="" className="logo" />
            <ul>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#">Dúvidas</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#">Fale conosco</a></li>
            </ul>
            <input placeholder="Pesquise um serviço" type="search" name="" id="" />
        </nav>
    </header>

    );
}

export default ServicoHeader;
