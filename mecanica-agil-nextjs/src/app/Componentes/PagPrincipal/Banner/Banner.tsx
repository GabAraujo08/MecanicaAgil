import Image from 'next/image';
import BannerIMG from '../../../assets/img/banner.png'; // Adjust the path as necessary
import './style.css'; // Importando o CSS

const Banner = () => {
    return (
        <section className="banner">
            <Image src={BannerIMG} alt="Banner" />
            <div className="texto-banner">
                <h1>Escolha, Agende e Relaxe com a Mecânica Agil da Future Solutions!</h1>
            </div>

        </section>
    );
}

export default Banner;