import Image from 'next/image';

import sidebarImgCadastro from '../../assets/img/sideBarImgCadastro.svg';
import FormCadastro from '../../Componentes/Cadastro/FormCadastro';
import '../../App.css';
function Cadastro() {
    return (
        <main className='mainCadastro'>
            <Image
                className="sideBarImgCadastro"
                src={sidebarImgCadastro}
                alt="Sidebar Cadastro"
               
            />
            <FormCadastro />
        </main>
    );
}

export default Cadastro;
