import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';

function GoogleAuth() {
  const history = useHistory();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new auth.GoogleAuthProvider();
      await auth().signInWithPopup(provider);
      history.push('/user/dashboard'); // Redirect to user dashboard after successful Google sign-in
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default GoogleAuth;
