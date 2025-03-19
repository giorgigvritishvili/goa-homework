import React, { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  const register = (username, password) => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    setUser({ username, password });
  };

  const login = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setUser(storedUser);
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, register, login, logout };
};

const App = () => {
  const { user, register, login, logout } = useAuth();
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("products")) || []);
  const [product, setProduct] = useState("");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (product.trim()) {
      setProducts([...products, product]);
      setProduct("");
    }
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  if (!user) {
    return (
      <div>
        <h2>Login / Register</h2>
        <input id="username" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
        <button onClick={() => register(username.value, password.value)}>Register</button>
        <button onClick={() => login(username.value, password.value)}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <button onClick={logout}>Logout</button>
      <h3>Add Product</h3>
      <input value={product} onChange={(e) => setProduct(e.target.value)} />
      <button onClick={addProduct}>Add</button>
      <h3>Product List</h3>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod} <button onClick={() => deleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;