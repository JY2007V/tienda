import React, { useContext } from 'react';
import { InventoryContext } from '../../contexts/InventoryContext';

const Checkout = () => {
  const { cart, updateCart, products, updateProduct } = useContext(InventoryContext);

  const handleCheckout = () => {
    cart.forEach(cartItem => {
      const product = products.find(p => p.id === cartItem.id);
      if (product) {
        updateProduct({ ...product, stock: product.stock - cartItem.quantity });
      }
    });
    updateCart([]);
    alert('Compra realizada con éxito');
  };

  return (
    <div>
      <h1>Resumen de Compra</h1>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Confirmar Compra</button>
    </div>
  );
};

export default Checkout;
// Implemente la la orden de compra como la factura para que muestre el resumen y el valor a pagar
// cuando confirme y de al pagar se realize el aviso de que fue una compra con exito.
