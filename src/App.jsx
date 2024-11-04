import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';

function App() {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <h1>Tienda</h1>

      <Login />
      {/* si el usuario está logueado, se muestra el componente Cart */}
      {isLoggedIn && <Cart />}
    </div>
  );
}

export default App;
