import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import axios from 'axios';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.authenticate({ username, password }, 'login'));
    console.log('username', username)

    // async function loginFunc() {
    // await axios
    //         .post("https://api-creepy.slotify.pro/users/login", {
    //           username: username,
    //           password: password  
    //       })
    //         .then(function(response) {
    //             self.axiosExperiment = response.data.message;
    //             console.log("response user", response.data);
    //             const token = response.data.token;
    //             localStorage.setItem("token", token);
    //         });
    //       }
    //       loginFunc()
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ width: '540px' }}
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
            <i className="material-icons md-dark md-inactive">email</i>
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
