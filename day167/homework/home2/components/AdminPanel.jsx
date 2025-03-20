import React from 'react';
import { useAuth } from './AuthProvider';

const AdminPanel = () => {
  const { account, logout } = useAuth();

  if (account === 0) {
    return <p>Please login to access the admin panel.</p>;
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome, {account.username}!</p>
      <p>Email: {account.email}</p>
      <p>Username: {account.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminPanel;
