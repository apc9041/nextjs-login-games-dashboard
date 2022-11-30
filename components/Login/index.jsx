import LoginForm from './LoginForm';
import Image from 'next/image'

const Login = () => (
  <>
    <center style={{width: '100vw', height:'100vh', position:'relative'}}>
      <div className='loginContainer'>
        <h3 className="title is-3" style={{ color: 'white' }}>Login</h3>
        <LoginForm />
      </div>
      <div className='characterBox' style={{width: '100vw', height:'100vh'}}>
        <Image className='characterBox1' src= '/img/character1.png' alt='' width={280} height={500} style={{position:'absolute'}}/>
      </div>
    </center>
  </>
); 

export default Login;
