import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../localStorageHelpers';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(form);
    alert('რეგისტრაცია  დასრულდა');
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>რეგისტრაცია</h2>
      <input placeholder="" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} />
      <input type="password" placeholder="პაროლი" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
      <button type="submit">დარეგისტრირება</button>
    </form>
  );
}

export default Register;
