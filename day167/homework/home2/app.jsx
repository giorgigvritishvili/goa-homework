import React from 'react';
import { AuthProvider } from './AuthProvider';
import Register from './Register';
import Login from './Login';
import AdminPanel from './AdminPanel';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Authentication App</h1>
        <Register />
        <Login />
        <AdminPanel />
      </div>
    </AuthProvider>
  );
};

export default App;
