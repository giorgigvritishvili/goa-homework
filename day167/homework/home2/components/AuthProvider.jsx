import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(0);

  const register = (email, password, username) => {
    const user = { email, password, username };
    localStorage.setItem('user', JSON.stringify(user));
    setAccount(user);
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setAccount(storedUser);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setAccount(0);
  };

  return (
    <AuthContext.Provider value={{ account, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
