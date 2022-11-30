import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.authenticate({ username, password }, 'login'));
    console.log('username', username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
    >
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="username"
            placeholder="Username"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="material-icons md-dark md-inactive">person</i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="material-icons md-dark md-inactive">lock</i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-text-centered">
          <button type="submit" className="button is-success">
            Login
          </button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
