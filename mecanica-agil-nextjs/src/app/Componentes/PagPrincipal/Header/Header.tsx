import React from 'react';
import Image from 'next/image';
import Logo from '../../../assets/img/logo.svg';
import './style.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Image className='logo' src={Logo} alt="Logo" />
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