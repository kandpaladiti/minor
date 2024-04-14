import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';

function UserLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/user/dashboard'); // Redirect to user dashboard after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
    </div>
  );
}

export default UserLoginPage;
