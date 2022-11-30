import LoginForm from './LoginForm';

const Login = () => (
  <>
    <center>
      <div style={{
        backgroundColor: 'gray', width: '600px', height: '220px', borderRadius: '10px', opacity: '0.5'
      }}>
        <h3 className="title is-3" style={{ color: 'white' }}>Login</h3>
        <LoginForm />
      </div>
    </center>
  </>
);

export default Login;
