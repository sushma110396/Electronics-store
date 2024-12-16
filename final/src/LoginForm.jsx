import './LoginForm.css';
import Status from './Status';

import { useState } from 'react';

function LoginForm({ onLogin, error }) {

  const [ username, setUsername ] = useState('');

  function onChange(event) {
    setUsername(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault(); 
    onLogin(username); 
  }

  return (
      <div className="login">
        <p className="welcome-message"> Welcome! </p>
        <form className="login-form" onSubmit={onSubmit}>
          <label className="username-label">
            <span>Username:</span>
            <input className="username-input" value={username} onChange={onChange}/>
          </label>
          <button className="login-button" type="submit">Login</button>
        </form>
        { error && <Status error={error}/> }
      </div>
  );

}

export default LoginForm;
