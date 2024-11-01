import Image from 'next/image';
import FormLogin from '../../Componentes/Login/FormLogin';
import sidebarImgLogin from '../../assets/img/sideBarImgLogin.svg';
import '../../App.css'
function Login() {
  return (
    <main className='mainLogin'>
      <FormLogin />
      <Image
        className="sideBarImgLogin"
        src={sidebarImgLogin}
        alt="Sidebar Login Image"
        
      />
    </main>
  );
}

export default Login;
