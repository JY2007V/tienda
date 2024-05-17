import React, { useContext } from 'react';
import { InventoryContext } from '../../contexts/InventoryContext';

const Catalog = () => {
  const { products, addToCart } = useContext(InventoryContext);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ull>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.stock}
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ull>
    </div>
  );
};

export default Catalog;
// En esta oportunida se muestra un catalogo de los productos  igualmente con su breve descripcion de los productos 
// y el boton de añadir al carrito al lado de cada producto.