import React, { useContext } from 'react';
import { InventoryContext } from '../../contexts/InventoryContext';

const Cart = () => {
  const { cart, updateCart } = useContext(InventoryContext);

  const handleChangeQuantity = (product, quantity) => {
    updateCart(cart.map(p => p.id === product.id ? { ...p, quantity } : p));
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - {product.quantity}
            <input type="number" value={product.quantity} onChange={(e) => handleChangeQuantity(product, parseInt(e.target.value))} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

// La cual presento la interfaz del carrito en la que esta integrada en la que muestre que hay en el carrito en la cual se describe el producto
// en esta conforme ala variacion de los productos y el numero de el cual va a llevar de cada uno. 
