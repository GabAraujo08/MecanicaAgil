import '../../PagPrincipal/Banner/style.css';
import BannerIMG from '../../../assets/img/banner.png'


const Banner = () => {
    return (
        <section className="banner">
            <img src={BannerIMG} alt="" />
                <div className="texto-banner">
                    <h1>Escolha, Agende e Relaxe com a Mecânica Agil da Future Solutions!</h1>
                </div>

    </section>
    );
}

export default Banner;