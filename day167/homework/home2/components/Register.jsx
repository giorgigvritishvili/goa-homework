import React from 'react';
import { useAuth } from './AuthProvider';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register: registerUser } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password, username } = data;
    registerUser(email, password, username);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} placeholder="Email" required />
        <input type="password" {...register('password')} placeholder="Password" required />
        <input type="text" {...register('username')} placeholder="Username" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
