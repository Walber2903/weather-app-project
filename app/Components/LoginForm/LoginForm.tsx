// components/LoginForm/LoginForm.tsx
"use client";

import React, { useState } from 'react';
import { auth } from '../../../firebaseConfig';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useAuth } from '../../context/AuthContext';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setError(null);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      login(user.displayName || 'User'); // Update shared state on successful login
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      login(user.displayName || 'User'); // Update shared state on successful login
    } catch (err) {
      setError("Google login failed. Please try again.");
    }
  };

  return (
    <div className="form-container w-[400px] mx-auto mt-20"> {/* Added class to ensure visibility */}
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className="w-full px-4 py-2 mb-3 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        className="w-full px-4 py-2 mb-4 border rounded"
      />

      <button
        onClick={handleLogin}
        className="w-full px-4 py-2 mb-3 bg-[#4CBB17] text-white rounded"
      >
        Sign In with Email
      </button>

      <button
        onClick={handleGoogleLogin}
        className="w-full px-4 py-2 mb-3 bg-red-500 text-white rounded"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default LoginForm;
