import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Layout from '../../components/Layout';

const LoginPage: React.FC = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <button onClick={signInWithGoogle} className="w-full bg-indigo-600 text-white py-2 rounded">Sign in with Google</button>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
