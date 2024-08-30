


import './style.css';

const Header = () => {
    return (
        <header>
            <nav>
                <img src="assets/img/logo.png" alt="" className="logo" />
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

export default Header;