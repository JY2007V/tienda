import React from 'react';

const Sales = () => {
  // Aqui es donde se muestra como manejar el inventario de las salidas econ las cuales tiene el control de dicha informacion que se añada 
  const sales = []; // mostraria en forma de lista la representacion de los productos de la tienda

  return (
    <div>
      <h1>Ventas Realizadas</h1>
      <ul>
        {sales.map((sale, index) => (
          <li key={index}>
            {sale.productName} - {sale.quantity} - {sale.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;
// exportacion de las salidas.