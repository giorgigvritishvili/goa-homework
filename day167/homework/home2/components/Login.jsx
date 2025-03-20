import React from 'react';
import { useAuth } from './AuthProvider';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    login(email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} placeholder="Email" required />
        <input type="password" {...register('password')} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
