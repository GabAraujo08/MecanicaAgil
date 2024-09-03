
import './App.css'
import sidebarImgCadastro from './assets/img/sideBarImgCadastro.svg'

import FormCadastro from './Componentes/Cadastro/FormCadastro'
function Cadastro() {


    return (
       <main className='mainCadastro'>
        <img className="sideBarImgCadastro" src={sidebarImgCadastro} alt="" />
        <FormCadastro/>
       </main>
        
            
        
    )
}

export default Cadastro
