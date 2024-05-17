import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Catálogo</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
        <li><Link to="/admin/inventory">Inventario</Link></li>
        <li><Link to="/admin/sales">Ventas</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
// La implementacion del carrito en la cual esta en la distribuccion de un costado de la pagina
// con la cual va relacionada con el inventario
// y con las salidas de las ventas actualizando los productos que hay en el inventario.