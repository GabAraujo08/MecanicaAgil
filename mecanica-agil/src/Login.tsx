import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import FormLogin from './Componentes/Login/FormLogin'
import sidebarImgLogin from './assets/img/sideBarImgLogin.svg'
function Login() {


    return (
       <main>
        <FormLogin/>
        <img className="sideBarImgLogin" src={sidebarImgLogin} alt="" />
       </main>
            
            
            
        
    )
}

export default Login
