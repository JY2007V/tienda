import React, { useContext } from 'react';
import { InventoryContext } from '../../contexts/InventoryContext';
import ProductForm from './ProductForm';

const Inventory = () => {
  const { products, updateProduct } = useContext(InventoryContext);

  return (
    <div>
      <h1>Inventario </h1>
      <ProductForm />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.stock}
            <button onClick={() => updateProduct({ ...product, stock: product.stock + 1 })}>Incrementar stock</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
// En esta pestaña la cual se presenta es la variacion de la creacion del inventario en forma que se vean los productos alos cuales se van añadir.