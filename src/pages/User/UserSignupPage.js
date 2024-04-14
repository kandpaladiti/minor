import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';

function UserSignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push('/user/dashboard'); // Redirect to user dashboard after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>User Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in here</Link>.
      </p>
    </div>
  );
}

export default UserSignupPage;
