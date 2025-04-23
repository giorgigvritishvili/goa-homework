import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../localStorageHelpers';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = getUser();

    if (savedUser && savedUser.username === form.username && savedUser.password === form.password) {
      navigate('/success');
    } else {
      alert('არასწორია');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>ავტორიზაცია</h2>
      <input placeholder="მომხმარებელი" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} />
      <input type="password" placeholder="პაროლი" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
      <button type="submit">შესვლა</button>
    </form>
  );
}

export default Login;
