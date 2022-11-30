import LoginForm from './LoginForm';

const Login = () => (
  <>
  <center>
  <div style={{ 
      backgroundColor: `red` , width: '600px', height: '220px', borderRadius: '10px' }}>
    <h3 className="title is-3">Login</h3>
    <LoginForm />
  </div>
  </center>
  </>
);

export default Login;
